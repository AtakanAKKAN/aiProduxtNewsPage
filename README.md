Gerçek Zamanlı Haber Takip Uygulaması / Atakan AKKAN

## Proje Amacı

Adaydan, Next.js kullanarak bir haber API'si (örneğin, NewsAPI) ile entegre olan bir web
uygulaması geliştirmesi istenmektedir. Uygulama, kullanıcının takip etmek istediği haber
kaynaklarını veya konularını seçmesine olanak tanıyacak ve bu kaynaklardan gelen en son
haberleri gerçek zamanlı (veya gerçeğe yakın) olarak çekecektir. Her yeni haber için push
bildirimleri gönderilecek ve haberlerin yayınlanma saatlerini görsel bir grafikte göstererek,
takip edilen kaynakların hangi saatlerde aktif olduğunun kolayca anlaşılmasını sağlayacaktır.

- Projenin nasıl çalıştırılacağına dair adımlar:
  1.Adım: Projenin bulunduğu GitHub kaynak deposunu bilgisayarınıza klonlayın: git clone <depo-linki />
  2.Adım: Klonlama tamamlandıktan sonra proje dizinine geçiş yapın: cd <Mulakat>
  3.Adım: Proje için gerekli bağımlılıkları yüklemek üzere aşağıdaki komutu çalıştırın: npm install
  4.Adım: Projeyi başlatmak için şu komutu çalıştırın: npm run dev
  Not: <Kimseyle Paylaşmayın. Lütfen> => .env dosyasında olması gereken şifreler
  NEXT_PUBLIC_API_KEY = 646c19d1c0e24eacb5925568e8ca9ac9
  NEXT_PUBLIC_API_URL = https://newsapi.org/v2/top-headlines

- Kullanılan teknolojiler ve neden seçildikleri:
  1.Teknoloji Next.js: Projeyi oluşturmak ve geliştirmek için istenen teknoloji
  2.Teknoloji React-icons: Kullanıcıya sunulan görsel geri bildirimi iyileştirmek ve kullanımı kolaylaştırmak.
  3.Teknoloki Axios: API isteklerini optimize etmek, veri çekme işlemlerini kolaylaştırmak ve olası hataları yönetmek. //// Kullanmaktan vazgeçtim.
  4.Teknoloji Chart.js: Haberlerin yayınlandığı saatleri görsel olarak kullanıcıya sunmak. /// Api kısıtlamaları ve hiç tecrübem olmadığı için yapılmadı.
  5.Teknoloki ChatGBT: Kod optimizasyonu ve hataları gidermek için kullanıldı. /// useFormatteDate.js chatgbt den üretilen hazır bir koddur. Tarihleri görsel olarak iyileştirmek için kullanıldı.(örnek çıktı: 18 Kasım 2024 20.00) Geri kalan kodlar benim tarafımdan yazıldı

- Mimari ve tasarım kararlarının açıklaması.
  Mimari: Birçok haber sitesinin mimarisini inceledim ve beğendiğim kısımları tek bir çatı altında topladım. Kullanıcıların sitedeki fonksiyonları daha rahat keşfedebilmesi için ikonlar ile destekledim. Tüm ekran boyutları için gerekli tasarım yapıldı.
  Tasarım: Tasarımı olabildiğince sade ve anlaşışır tutmaya çalıştım. Renkleri ve fontları temaya uygun bir şekilde seçtim.

- Yapılan varsayımlar ve bilinen kısıtlamalar.
  Kısıtlama 1: Api veri çekim limiti günlük 100 veri ile kısıtlıdır. Veri çekim limitinin aşılması durumunda kullanıcıya görsel olarak geri bildirim sağlandı. Chart.js kullanılarak yapılması istenen grafik, yapılmadı.
  Kısıtlama 2: Tailwind.css kullanamamak.

- Projede istenilen fakat yapılamayan kısımlar.
  Chart.js ile grafikleştirme.
  Mobil uygulama.
  Yeni haberler için push bildirimleri göndermek.

- Çıkarılan dersler ve Kendime not.
  Çıkarılan Dersler: Backend konusu üzerinde daha çok durmam gerektiği. Api yönetimi ve fetch kısmı üzerinde dökümantasyonları okumam gerekli. Tailwind.css yanında Vanilla Css i de projelerime dahil etmem gerekli.
  Kendime not: Zaman yönetimi ile bir projenin düzenli ve istikrarlı bir şekilde yapılabilir olduğunu bir kez daha gördüm. Daha önce almadığım hatalar aldım ve çözüme ulaştım. Haneme bir Next.js projesi daha yazıldı ve başta ne kadar zor gözükse de küçük küçük görevlere bölerek, projenin daha kolay bir şekilde yapılabilir olduğunu keşfettim. Önce yapabildiğim kısımları bitirdim daha sonra araştırmam gereken kısımlara daha çok vaktim kaldı.
