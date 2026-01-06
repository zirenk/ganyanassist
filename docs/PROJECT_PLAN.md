# PROJECT_PLAN.md

## VİZYON
Gerçek veriye dayalı, bahisçinin risk algısına göre matematiksel sigorta (hedge) önerileri sunan analiz platformu.

## ✅ TAMAMLANDI: FAZ 0.5 - STABİLİZASYON (BUGFIX) - v0.0.2
**Tamamlanma Tarihi:** 2026-01-05

### Çözülen Sorunlar:
1. ✅ **Dark Mode Fix:** Tailwind v4'te `@variant dark` directive eklendi ([src/index.css:3](../src/index.css#L3))
   - Light/Dark mode toggle artık görsel olarak çalışıyor
   - localStorage ile kalıcı hale getirildi
2. ✅ **Renk Paleti:** Kırmızı (#dc2626) ve Mavi (#2563eb) HEX kodları doğrulandı
   - Logo gradient, ikonlar, hover efektleri marka kimliğine uygun
   - `@theme` ile özel renkler tanımlandı
3. ✅ **Vite Port Sabitleme:** Port 5173'te sabitlendi ([vite.config.ts:7-9](../vite.config.ts#L7-L9))
4. ✅ **Dosya Temizliği:** Gereksiz dokümantasyon silindi (PROJECT_CONTEXT.md, AGENT_INSTRUCTIONS.md)
5. ✅ **Versiyon Güncelleme:** v0.0.1 → v0.0.2

**Deploy:** ✅ Firebase Hosting - https://ganyanassist.web.app
**Git Commit:** 304e33b - Pushed to GitHub main branch

## 🚀 DEVAM EDİYOR: FAZ 1 - VERİ YÖNETİMİ

### ✅ TAMAMLANDI: FAZ 1.1 - Firebase Data Connect Entegrasyonu - v0.0.4
**Tamamlanma Tarihi:** 2026-01-05

### Yapılanlar:

#### 1. Firebase Data Connect Şeması (PostgreSQL)
- ✅ **7 Tablo Şeması:** Hipodrom, RaceDay, Race, Horse, OddsSnapshot, OddsEntry
  - [dataconnect/schema/schema.gql](../dataconnect/schema/schema.gql) - Tam ilişkisel yapı (Foreign Keys)
- ✅ **Mutations:** INSERT/UPDATE/DELETE işlemleri ([dataconnect/connectors/hrai/mutations.gql](../dataconnect/connectors/hrai/mutations.gql))
- ✅ **Queries:** SELECT sorguları ([dataconnect/connectors/hrai/queries.gql](../dataconnect/connectors/hrai/queries.gql))
- ✅ **Yapılandırma:** [dataconnect/dataconnect.yaml](../dataconnect/dataconnect.yaml), [firebase.json:27-29](../firebase.json#L27-L29)
- ✅ **Dokümantasyon:** [docs/FIREBASE_DATA_CONNECT_SETUP.md](FIREBASE_DATA_CONNECT_SETUP.md)

#### 2. Admin Panel UI (React + Tailwind)
- ✅ **Layout:** Sol menülü, koyu tema admin paneli ([src/components/admin/AdminLayout.tsx](../src/components/admin/AdminLayout.tsx))
- ✅ **Dashboard:** Stats, hızlı işlemler, sistem durumu ([src/pages/admin/Dashboard.tsx](../src/pages/admin/Dashboard.tsx))
- ✅ **Hipodromlar:** Ekleme formu + tablo ([src/pages/admin/Hipodroms.tsx](../src/pages/admin/Hipodroms.tsx))
- ✅ **Yarış Günleri:** Tarih + hipodrom seçimi ([src/pages/admin/RaceDays.tsx](../src/pages/admin/RaceDays.tsx))
- ✅ **Koşular:** Placeholder (FAZ 1.2) ([src/pages/admin/Races.tsx](../src/pages/admin/Races.tsx))
- ✅ **Oranlar:** OCR placeholder (FAZ 1.3) ([src/pages/admin/Odds.tsx](../src/pages/admin/Odds.tsx))
- ✅ **Ayarlar:** Sistem bilgisi ve entegrasyon durumları ([src/pages/admin/Settings.tsx](../src/pages/admin/Settings.tsx))

#### 3. Firebase Data Connect Deployment
- ✅ **Schema Deploy:** PostgreSQL tabloları oluşturuldu (6 tablo)
  - Tables: `hipodrom`, `race_day`, `race`, `horse`, `odds_snapshot`, `odds_entry`
  - Location: europe-west9
  - Instance: ganyanassist-instance
- ✅ **Queries & Mutations:** GraphQL operations ([dataconnect/connectors/](../dataconnect/connectors/))
  - Auth Level: PUBLIC (geçici - test için)
- ✅ **TypeScript SDK:** Auto-generated React hooks ([src/dataconnect-generated/](../src/dataconnect-generated/))

#### 4. React Integration (CRUD Aktif)
- ✅ **QueryClient Provider:** TanStack Query entegrasyonu ([src/App.tsx:26](../src/App.tsx#L26))
- ✅ **Firebase Config:** Web app credentials ([src/lib/firebase.ts](../src/lib/firebase.ts))
- ✅ **Hipodromlar Page:**
  - `useListHipodroms()` - Liste görüntüleme
  - `useCreateHipodrom()` - Yeni hipodrom ekleme
  - `useUpdateHipodrom()` - Aktif/Pasif durumu değiştirme
- ✅ **Yarış Günleri Page:**
  - `useListRaceDays()` - Yarış günleri listesi
  - `useCreateRaceDay()` - Yeni yarış günü ekleme
  - Hipodrom dropdown (useListHipodroms'dan besleniyor)

#### 5. Versiyon ve Console Logging
- ✅ **Versiyon:** v0.0.3 → v0.0.4
- ✅ **Console Logging:** Firebase init status + version info ([src/main.tsx:7-23](../src/main.tsx#L7-L23))
- ✅ **Dynamic Version Display:** useVersion hook ile tüm sayfalarda ([src/components/admin/AdminLayout.tsx:76](../src/components/admin/AdminLayout.tsx#L76))

### Test Sonuçları (Kullanıcı Onayı):
- ✅ Firebase Data Connect bağlantısı çalışıyor
- ✅ Hipodrom CRUD operasyonları başarılı (CREATE, READ, UPDATE)
- ✅ Yarış Günü CRUD operasyonları başarılı
- ✅ Versiyon v0.0.4 görünüyor (Console + UI)
- ✅ QueryClient Provider hatası çözüldü
- ✅ Auth level PUBLIC'e çekilerek 403 hatası çözüldü

### Çözülen Sorunlar:
1. ✅ **QueryClient Missing:** App.tsx'e QueryClientProvider eklendi
2. ✅ **Firebase 403 Permission Denied:** @auth(level: NO_ACCESS) → PUBLIC olarak değiştirildi
3. ✅ **Firebase Web App Missing:** `firebase apps:create WEB` ile web app oluşturuldu
4. ✅ **Version Caching:** Cache busting mekanizması zaten mevcuttu, tarayıcı yenileme yeterli oldu
5. ✅ **JSX Syntax Error:** QueryClientProvider kapanış tag'i düzeltildi

#### 6. Production Deployment
- ✅ **Build:** Production bundle oluşturuldu (382.31 kB, gzip: 109.69 kB)
- ✅ **Firebase Hosting:** https://ganyanassist.web.app
- ✅ **Firebase Data Connect:** Schema ve connectors deploy edildi
- ✅ **Database:** ganyanassist-instance (europe-west9) schema compatible

**Deploy Durumu:** ✅ PRODUCTION - Tam Çalışır Durumda
**Live URL:** https://ganyanassist.web.app
**Firebase Console:** https://console.firebase.google.com/project/ganyanassist/dataconnect/locations/europe-west9/services/ganyanassist-service/schema
**Git Commit:** Hazırlanıyor...

### ✅ TAMAMLANDI: FAZ 1.1 - Tam CRUD Implementasyonu - v0.0.5
**Tamamlanma Tarihi:** 2026-01-06

#### GraphQL Mutations Tamamlandı
- ✅ **DeleteHipodrom:** `mutation DeleteHipodrom($id: UUID!)` ([dataconnect/connectors/mutations.gql:37-39](../dataconnect/connectors/mutations.gql#L37-L39))
- ✅ **DeleteRaceDay:** `mutation DeleteRaceDay($id: UUID!)` ([dataconnect/connectors/mutations.gql:41-43](../dataconnect/connectors/mutations.gql#L41-L43))
- ✅ **UpdateHipodrom:** country parametresi eklendi (tam güncelleme)
- ✅ **UpdateRaceDay:** date ve hipodromId parametreleri eklendi (tam güncelleme)

#### UI Components
- ✅ **ConfirmModal:** Silme işlemi için onay penceresi komponenti ([src/components/ConfirmModal.tsx](../src/components/ConfirmModal.tsx))
  - AlertCircle ikonu ile görsel uyarı
  - "Evet, Sil" / "İptal" butonları
  - Loading state desteği

#### Hipodromlar Page - TAM CRUD
**GraphQL Operations Kullanımı:**
- `useListHipodroms()` → READ - Hipodrom listesi
- `useCreateHipodrom()` → CREATE - Yeni hipodrom (name, code, city, country)
- `useUpdateHipodrom()` → UPDATE - Düzenleme (tüm alanlar + isActive toggle)
- `useDeleteHipodrom()` → DELETE - Silme (confirmation modal ile)

**UI İşlemleri:**
- ✅ Düzenle butonu (Edit ikonu) - Formu doldurur, edit mode'a geçer
- ✅ Sil butonu (Trash2 ikonu) - Confirmation modal açar
- ✅ Form başlığı dinamik: "Yeni Hipodrom Ekle" / "Hipodrom Düzenle"
- ✅ Cancel (X) butonu - Formu kapatır, edit mode'dan çıkar
- ✅ Reaktif güncelleme: Her CRUD işleminden sonra `refetch()` çağrılır

#### Yarış Günleri Page - TAM CRUD
**GraphQL Operations Kullanımı:**
- `useListRaceDays()` → READ - Yarış günü listesi
- `useCreateRaceDay()` → CREATE - Yeni yarış günü (date, hipodromId, notes)
- `useUpdateRaceDay()` → UPDATE - Düzenleme (date, hipodromId, notes)
- `useDeleteRaceDay()` → DELETE - Silme (confirmation modal ile)

**UI İşlemleri:**
- ✅ Düzenle butonu (Edit ikonu) - Formu doldurur, edit mode'a geçer
- ✅ Sil butonu (Trash2 ikonu) - Confirmation modal açar
- ✅ Form başlığı dinamik: "Yeni Yarış Günü Ekle" / "Yarış Günü Düzenle"
- ✅ Cancel (X) butonu - Formu kapatır, edit mode'dan çıkar
- ✅ Hipodrom dropdown - useListHipodroms'dan besleniyor
- ✅ Reaktif güncelleme: Her CRUD işleminden sonra `refetch()` çağrılır

#### Veri Bütünlüğü
- ✅ **Foreign Key Koruması:** Hipodrom silinmeye çalışıldığında bağlı yarış günü varsa hata mesajı
- ✅ **Yarış Günü FK Koruması:** Yarış günü silinmeye çalışıldığında bağlı koşu varsa hata mesajı
- ✅ **Error Handling:** Tüm CRUD işlemlerinde try-catch ile hata yakalama ve kullanıcıya mesaj gösterme

#### Production Deployment - v0.0.5
- ✅ **Build:** Production bundle (386.33 kB, gzip: 110.49 kB)
- ✅ **Firebase Data Connect:** Delete mutations deployed
- ✅ **Firebase Hosting:** https://ganyanassist.web.app
- ✅ **SDK Generation:** TypeScript hooks for delete operations

**Deploy Durumu:** ✅ PRODUCTION - TAM CRUD ÇALIŞIR DURUMDA
**Live URL:** https://ganyanassist.web.app
**Versiyon:** v0.0.5
**Git Commit:** a9b94c7 - Pushed to GitHub main branch

## MEVCUT DURUM: FAZ 1.2'YE HAZIR (Yarış/Koşu Yönetimi)

## SIRADAKİ ADIMLAR
### FAZ 1: Veri Yönetimi (Admin & OCR)
* Admin Paneli: Yarış Günü ve Koşu ekleme.
* OCR Entegrasyonu: SS yükleme, Gemini ile veri çıkarma ve "Split-Screen" onay ekranı.
* DB Bağlantısı: Firebase Data Connect (PostgreSQL) şemasının ayağa kaldırılması.

### FAZ 2: Matematik Motoru (BahisAssist)
* "Razı Olunan Oran" üzerinden Sigorta Bütçesi hesaplama.
* Arbitraj kovalayan (En ucuz sigortayı bulan) maliyet optimizasyonu.

### FAZ 3: Profesyonel Konsensüs
* Yorumcu puanlama ve Power Law tabanlı olasılık grafikleri.