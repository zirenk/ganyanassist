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

## MEVCUT DURUM: FAZ 1'E HAZIR

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