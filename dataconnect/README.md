# Firebase Data Connect Setup

Bu dizin HRAI projesinin Firebase Data Connect (PostgreSQL) şema ve yapılandırma dosyalarını içerir.

## Dizin Yapısı

```
dataconnect/
├── dataconnect.yaml        # Ana yapılandırma dosyası
├── schema/
│   ├── schema.gql          # Veritabanı şeması (Tables)
│   ├── mutations.gql       # INSERT/UPDATE/DELETE işlemleri
│   └── queries.gql         # SELECT işlemleri
└── README.md               # Bu dosya
```

## Şema Özeti

### Tablolar
1. **Hipodrom** - Yarış mekanları (Veliefendi, İzmir vb.)
2. **RaceDay** - Yarış günleri (tarih + hipodrom)
3. **Race** - Tekil koşular (bir yarış gününde birden fazla olabilir)
4. **Horse** - Koşuya katılan atlar
5. **OddsSnapshot** - Belirli andaki oran fotoğrafları
6. **OddsEntry** - Snapshot içindeki tekil at oranları

### İlişkiler
- Hipodrom → RaceDay (1:N)
- RaceDay → Race (1:N)
- Race → Horse (1:N)
- Race → OddsSnapshot (1:N)
- OddsSnapshot → OddsEntry (1:N)
- Horse → OddsEntry (1:N)

## Firebase Data Connect Kurulumu

### 1. Firebase CLI Kurulumu
```bash
npm install -g firebase-tools
firebase login
```

### 2. Proje Seçimi
```bash
firebase use ganyanassist
```

### 3. Data Connect Başlatma
```bash
firebase dataconnect:sql:connect
```

### 4. Şemayı Deploy Etme
```bash
firebase deploy --only dataconnect
```

### 5. Emulator'da Test (Opsiyonel)
```bash
firebase emulators:start --only dataconnect
```

## Kullanım Örnekleri

### Mutation Örneği (Hipodrom Ekleme)
```graphql
mutation {
  CreateHipodrom(
    name: "Veliefendi"
    code: "VEL"
    city: "İstanbul"
    country: "Türkiye"
  ) {
    id
    name
  }
}
```

### Query Örneği (Tüm Hipodromları Getir)
```graphql
query {
  GetAllHipodroms {
    id
    name
    code
    city
  }
}
```

## Önemli Notlar

1. **PostgreSQL Bağlantısı:** Firebase Data Connect, arka planda Cloud SQL (PostgreSQL) kullanır.
2. **Şema Değişiklikleri:** `schema.gql` dosyasında yapılan değişiklikler, deploy sonrası otomatik migration yapar.
3. **Foreign Key Bütünlüğü:** İlişkisel yapı korunur, CASCADE delete işlemleri tanımlanabilir.
4. **OCR Entegrasyonu:** `imageUrl` alanları, Firebase Storage ile entegre edilecek.

## Next Steps (FAZ 1 Devam)

- [ ] Firebase Data Connect projesini oluştur
- [ ] Cloud SQL (PostgreSQL) instance başlat
- [ ] Şemayı deploy et
- [ ] React frontend'den mutation/query bağlantısı kur
- [ ] TypeScript SDK generate et (Firebase CLI ile otomatik)

---

**Şema Versiyonu:** v1.0.0
**Son Güncelleme:** 2026-01-05
