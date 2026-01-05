# AGENT_INSTRUCTIONS.md (v2 - Updated for TJK Specs)

## Role & Vision
You are the Lead Architect for HRAI (Horse Racing Analytics Intelligence). You are building a high-precision data analysis tool for Turkish Horse Racing (TJK). The system relies on **Zero Hallucination** logic.

## Core Feature: The Admin Dashboard
The heart of the system is the Admin Panel where the user manages race days and uploads screenshots.

### UI/UX Requirements
1.  **Race Day Context:** User selects a Date and Hippodrome (Location).
2.  **Race Cards:** Show all races for that day. Indicators for missing data (e.g., "Program Missing", "Pool Odds: 10 mins ago").
3.  **Clipboard Support:** The upload zone MUST support `CTRL+V` (Paste) events to handle screenshots directly from the clipboard.
4.  **Split-Screen Verification:**
    * **Left:** The uploaded image.
    * **Right:** The parsed data in editable inputs.
    * **Action:** User must click "Verify & Save" to commit data.

## Data Ingestion & Validation Logic (CRITICAL)

You will use Google Gemini Vision for OCR. You must implement strict validation checks before parsing data.

### 1. Race Program (Yarış Programı)
* **Source:** Image of the pre-race list (TJK "Günlük Yarış Programı").
* **Validation:** Check if the image contains horse names and program numbers.
* **Data to Extract:** `Program No`, `Horse Name`, `Jockey`, `Weight`, `Latest Ganyan (if available)`, `AGF % (Six Ganyan Fav)`.
* **Logic:**
    * Create `horses` entries.
    * If a horse is marked as "Koşmaz" (Scratched) in the update, set `is_scratched = true`.
    * **Update Rule:** If program is re-uploaded, update AGF and Status; do not duplicate horses.

### 2. Pool Odds (HAVUZ Muhtemeller)
* **Source:** Image of "Muhtemeller" tab.
* **Visual Validation (OCR Check):**
    * Look for the **Date** at the top. Must match selected Race Day.
    * Look for the **Hippodrome Name** (Highlighted in RED text/bg). Must match current location.
    * Look for the **Race Number** (Highlighted in RED). Must match current race.
* **Data to Extract:** `Ganyan`, `İkili`, `Sıralı İkili`. Ignore "Çifte".
* **Logic:** Create a new `odds_snapshot` with type `POOL`.

### 3. Fixed Odds (SABİT Muhtemeller)
* **Source:** Image of "Sabit Muhtemeller" tab.
* **Visual Validation:** Same "Red Highlight" checks as Pool Odds.
* **Data to Extract:** `Sabit Ganyan`, `Sabit İkili`, `Sabit Sıralı İkili`.
* **Logic:** Create a new `odds_snapshot` with type `FIXED`.

### 4. Results (Sonuçlar)
* **Source:** Post-race result list.
* **Data:** Ranking (1st, 2nd, 3rd...), Final Ganyan/Payouts.

## Database Schema (PostgreSQL via Firebase Data Connect)

```graphql
# This is a conceptual schema. Adapt to Data Connect GQL syntax.

type RaceDay @table {
  id: UUID!
  date: Date!
  location: String! # e.g., "İzmir"
  created_at: DateTime!
}

type Race @table {
  id: UUID!
  race_day: RaceDay!
  race_number: Int! # 1, 2, 3...
  status: String! # 'PENDING', 'FINISHED'
}

type Horse @table {
  id: UUID!
  race: Race!
  program_number: Int! # The visible number on the horse (1, 2...)
  name: String!
  jockey: String
  is_scratched: Boolean! @default(value: false)
}

enum OddsType {
  POOL
  FIXED
}

type OddsSnapshot @table {
  id: UUID!
  race: Race!
  type: OddsType!
  image_url: String! # Path to storage
  created_at: DateTime! # Upload timestamp
}

type OddsEntry @table {
  id: UUID!
  snapshot: OddsSnapshot!
  horse_id: UUID!
  ganyan: Float # Win odd
  ikili: Float # Quinella
  sirali_ikili: Float # Exacta
  agf_percent: Float # AGF % from program
}