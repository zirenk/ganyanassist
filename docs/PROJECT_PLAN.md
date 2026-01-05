# PROJECT_PLAN.md

## HRAI v1 - Horse Racing Analytics Intelligence
**Vizyon:** Gerçek veriye dayalı, halüsinasyon görmeyen, bahisçinin kendi risk algısına göre matematiksel sigorta (hedge) önerileri sunan finansal analiz platformu.

## FAZ 0: Altyapı ve Güvenli Boru Hattı (ŞU AN BURADAYIZ)
* **Amaç:** React, Firebase ve Deploy hattını kurmak. Versiyon takibini otomatize etmek.
* **Çıktı:** Ekranda "v0.0.1 - System Online" yazan, Kırmızı/Mavi/Gri temalı, Dark mode destekli, Mobil uyumlu boş bir ana sayfa.
* **Test:** Firebase Hosting'e deploy edilecek. Tarayıcıda versiyon numarası görülecek.

## FAZ 1: Veri Yönetimi (Admin & OCR)
* **Amaç:** Yarış günlerini oluşturmak ve SS (Screenshot) yükleyip Gemini Vision ile okutmak.
* **Çıktı:** Admin Paneli -> Yarış Ekle -> Resim Yükle -> Veriyi Onayla -> DB'ye Kaydet.
* **Test:** Gerçek bir TJK bülten resmi yüklenecek, OCR çıktısı ile resim yan yana teyit edilecek.

## FAZ 2: Matematik Motoru (BahisAssist Çekirdeği)
* **Amaç:** Kullanıcının razı olduğu oranları girmesi ve "Akıllı Sigorta" hesaplaması.
* **Mantık:**
    1.  `Hedef Kazanç` = `Bütçe` * `Razı Olunan Oran`
    2.  `Ana Bahis Tutarı` = `Hedef Kazanç` / `Piyasa Ganyan Oranı`
    3.  `Sigorta Bütçesi` = `Bütçe` - `Ana Bahis Tutarı`
    4.  **Dağıtım:** Kalan sigorta bütçesi ile en az maliyetli "İkili" veya "Sıralı İkili" kombinasyonunu bul.
* **Çıktı:** BahisAssist Modülü (Simülatör Ekranı).

## FAZ 3: Raporlama ve Analiz
* **Amaç:** Profesyonellerin Konsensüs Puanı ve Grafiksel Gösterim.
* **Çıktı:** Çubuk Grafikler (Mavi: Havuz, Turuncu: Sabit, Yeşil: AGF, Kırmızı: Yorumcu).

---
**DEPLOYMENT KURALI:**
Her deploy işleminde `public/version.json` güncellenecek ve UI üzerinde versiyon numarası gösterilecek.