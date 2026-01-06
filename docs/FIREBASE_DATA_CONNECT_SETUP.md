# Firebase Data Connect Kurulum Rehberi

Bu döküman, HRAI projesinde Firebase Data Connect ve Cloud SQL (PostgreSQL) kurulumunu adım adım anlatır.

## 📋 Ön Gereksinimler

- Firebase projesi: `ganyanassist` (✅ Mevcut)
- Firebase Blaze Plan (Pay as you go) - Data Connect için gerekli
- Google Cloud Console erişimi

---

## 🚀 ADIM 1: Firebase Console'dan Data Connect Aktivasyonu

### 1.1. Firebase Console'a Giriş
```
https://console.firebase.google.com/project/ganyanassist
```

### 1.2. Data Connect Servisini Etkinleştir
1. Sol menüden **"Build"** bölümünü açın
2. **"Data Connect"** seçeneğini bulun
3. **"Get Started"** butonuna tıklayın
4. Region seçimi: **us-central1** (önerilen)
5. **"Continue"** ile devam edin

### 1.3. Cloud SQL Instance Oluşturma
Data Connect otomatik olarak bir Cloud SQL (PostgreSQL) instance oluşturacak:
- Instance ID: `hrai-postgres` (veya Firebase'in önerdiği)
- Database: `hrai-db`
- Machine Type: Shared Core (başlangıç için yeterli)
- Storage: 10 GB SSD

**Not:** Instance oluşturma 5-10 dakika sürebilir.

---

## 🗂️ ADIM 2: Şema Deploy

Projede şema dosyaları hazır durumda:
```
dataconnect/
├── dataconnect.yaml
├── schema/
│   └── schema.gql
└── connectors/
    └── hrai/
        ├── connector.yaml
        ├── mutations.gql
        └── queries.gql
```

### 2.1. Firebase CLI ile Deploy
Terminal'den:
```bash
firebase deploy --only dataconnect
```

**Beklenen Çıktı:**
```
✔ Deploy complete!

Data Connect:
  Service: hrai-dataconnect
  Endpoint: https://hrai-dataconnect-{region}.a.run.app
```

### 2.2. Alternatif: Firebase Console'dan Manuel Upload
Eğer CLI çalışmazsa:
1. Firebase Console → Data Connect
2. "Upload Schema" butonuna tıklayın
3. `dataconnect/schema/schema.gql` dosyasını yükleyin

---

## 🔧 ADIM 3: TypeScript SDK Oluşturma

Firebase Data Connect, otomatik TypeScript SDK generate eder.

### 3.1. SDK Generate
```bash
firebase dataconnect:sdk:generate
```

Bu komut şunları oluşturur:
```
src/__generated__/
├── hrai/
│   ├── index.ts
│   ├── mutations.ts
│   └── queries.ts
```

### 3.2. React'e Entegrasyon
SDK generate edildikten sonra, örnek kullanım:

```typescript
// src/services/dataconnect.ts
import { initializeApp } from 'firebase/app';
import { getDataConnect } from 'firebase/data-connect';

const firebaseConfig = {
  projectId: 'ganyanassist',
  // ... diğer config
};

const app = initializeApp(firebaseConfig);
export const dataConnect = getDataConnect(app, {
  connector: 'hrai',
  service: 'hrai-dataconnect',
  location: 'us-central1',
});
```

```typescript
// Hipodrom ekleme örneği
import { CreateHipodrom } from '@/__generated__/hrai/mutations';
import { dataConnect } from './dataconnect';

const result = await CreateHipodrom(dataConnect, {
  name: 'Veliefendi',
  code: 'VEL',
  city: 'İstanbul',
  country: 'Türkiye',
});
```

---

## 🧪 ADIM 4: Yerel Test (Emulator)

Firebase Emulator Suite ile yerel test:

### 4.1. Emulator Başlatma
```bash
firebase emulators:start --only dataconnect
```

### 4.2. GraphQL Playground
Emulator çalışırken:
```
http://localhost:9399
```
adresinden GraphQL playground'a erişebilirsiniz.

### 4.3. Test Query Örneği
```graphql
mutation {
  CreateHipodrom(
    name: "Test Hipodromu"
    code: "TEST"
    city: "İstanbul"
    country: "Türkiye"
  ) {
    id
    name
  }
}
```

---

## 📊 ADIM 5: Veritabanı Bağlantısı Doğrulama

### 5.1. Cloud SQL'e Doğrudan Erişim (Opsiyonel)
Google Cloud Console üzerinden:
```
https://console.cloud.google.com/sql/instances
```

### 5.2. pgAdmin veya DBeaver ile Bağlantı
- Host: Cloud SQL Proxy üzerinden
- Database: `hrai-db`
- Username: `postgres`
- Password: Firebase tarafından oluşturulur (Console'da görünür)

---

## 🔐 ADIM 6: Güvenlik Kuralları

Data Connect için auth kuralları `dataconnect/schema/schema.gql` içinde tanımlanabilir:

```graphql
type Hipodrom @table @auth(
  rules: [
    { allow: private, operations: [read] }
    { allow: private, provider: "firebase", operations: [create, update, delete] }
  ]
) {
  # ...
}
```

---

## ✅ Kontrol Listesi

Deploy sonrası kontrol edin:

- [ ] Firebase Console'da Data Connect servisi "Active" durumda mı?
- [ ] Cloud SQL instance çalışıyor mu?
- [ ] `firebase deploy --only dataconnect` başarılı oldu mu?
- [ ] SDK generate edildi mi? (`src/__generated__/` dizini var mı?)
- [ ] GraphQL playground'dan test query çalışıyor mu?
- [ ] React uygulamasından mutation/query tetiklenebiliyor mu?

---

## 🐛 Yaygın Sorunlar ve Çözümleri

### Hata: "Data Connect is not enabled"
**Çözüm:** Firebase Console'dan Data Connect'i manuel olarak aktifleştirin.

### Hata: "Cloud SQL instance not found"
**Çözüm:** Instance oluşturulmasını bekleyin (5-10 dk). Status: "Creating" → "Running"

### Hata: "Permission denied"
**Çözüm:** Firebase projesinin Blaze (ödeme) planında olduğundan emin olun.

### SDK Generate Edilmiyor
**Çözüm:**
```bash
npm install -D @firebase/data-connect
firebase dataconnect:sdk:generate --force
```

---

## 📚 Referanslar

- [Firebase Data Connect Dökümanları](https://firebase.google.com/docs/data-connect)
- [Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres)
- [GraphQL Schema Design](https://graphql.org/learn/schema/)

---

**Son Güncelleme:** 2026-01-05
**Şema Versiyonu:** v1.0.0
**Sorumlu:** Lead Architect
