# ContestApp - Yarışma Takip Uygulaması

Yarışma soruları ve takım puanlarını takip eden, **çevrimdışı çalışan** modern web uygulaması.

## Özellikler

✨ **Temel Özellikler:**
- 📊 2, 3 veya 4 takım için puan takibi
- ⏱️ Entegre kronometre (15-30 saniye ayarlanabilir)
- 🎯 Doğru/Yanlış cevap takibi
- 🔢 Otomatik puan hesaplama ve bonus çarpanları (x1-x4)
- 📝 Manuel puan ayarlaması
- 🗑️ Soru silme ve düzenleme
- 📊 Canlı istatistikler gösterimi

🔧 **Teknik Özellikler:**
- 🌍 Çevrimdışı (Offline) Çalışan PWA
- 💾 LocalStorage ile veri kalıcılığı
- 📱 Mobil ve masaüstü uyumlu
- ⚡ Hızlı yükleme
- 🎨 Modern, kullanıcı dostu arayüz

## Kurulum

### GitHub Pages ile (En Basit)

1. Bu repository'yi fork edin
2. GitHub ayarlarından **Pages** > **Branch** seçin ve `main` seçin
3. Açılacak bağlantıda uygulamaya erişin: `https://username.github.io/contestapp`

### Yerel Bilgisayarda

1. Repository'yi klonlayın:
```bash
git clone https://github.com/username/contestapp.git
cd contestapp
```

2. Python ile lokal sunucu başlatın:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

3. Tarayıcıda açın: `http://localhost:8000`

## Kullanım

### Başlangıç
1. Uygulamayı açın
2. Takım sayısını seçin (2, 3 veya 4)
3. "+" butonuna tıklayarak yeni soru ekleyin

### Soru Ekleme
- **Kronometre**: 15, 20, 25 veya 30 saniyelik süreler
- **Cevaplar**: Her takım için Doğru/Yanlış seçin
- **Bonus**: x1 ile x4 arası çarpan uygulayın
- **Puanlar**: Otomatik hesaplanır veya manuel olarak ayarlayabilirsiniz

### Tablo Yönetimi
- Soru satırına tıkla: Detayları görüntüle veya düzenle
- "Tabloyu Düzenle" buton: Silme modu aktif et
- "Tümünü Sil": Tüm verileri baştan başla

## Veri Kaydı

Tüm veriler tarayıcınızın **localStorage** özelliğinde saklanır:
- Tarayıcıyı kapatıp açsanız da veriler kalır
- Cache temizlenmedikçe uygulamaya çevrimdışı erişebilirsiniz
- Verileri silmek için "Tümünü Sil" butonunu kullanın

## Tarayıcı Desteği

- ✅ Chrome/Edge 70+
- ✅ Firefox 67+
- ✅ Safari 12+
- ✅ Opera 57+

## Sistem Gereksinimleri

- Modern tarayıcı (2019+)
- Internet bağlantısı (ilk kurulum için, sonrasında çevrimdışı çalışır)

## Geliştirme

Dosya yapısı:
```
contestapp/
├── index.html          # Ana sayfa
├── manifest.json       # PWA konfigürasyonu
├── service-worker.js   # Offline desteği
└── README.md          # Bu dosya
```

## Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasını inceleyin

## İlişki ve Destek

Sorunlar veya öneriler için [Issues](../../issues) bölümünü kullanın.

---

**ContestApp** ile yarışmaların puan takibini kolaylaştırın! 🎉
