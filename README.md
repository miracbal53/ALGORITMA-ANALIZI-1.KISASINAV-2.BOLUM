# ALGORITMA-ANALIZI-1.KISASINAV-2.BOLUM
1. Konu : HCS kumeleme algoritması - 2. Konu : Zhu-Takaoka algoritmasi


        HCS KÜMELE ALGORİTMASI 

///// TANIMI 

HCS kümeleme algoritması yani (Hierarchical Clustering Scheme), bir veri setindeki benzer verileri gruplandırmak için kullanılan bir kümeleme yöntemidir. Bu algoritma, verileri bir hiyerarşik yapıda gruplandırır, yani kümeleme işlemi, alt kümeleme adımlarına ayrılabilir.

////// AMACI 

HCS kümeleme algoritmasının amacı, veri setindeki benzer verileri gruplandırmaktır. Bu gruplama işlemi, veri setindeki yapıyı anlamak, veri setindeki örüntüleri ortaya çıkarmak ve veri setindeki karmaşıklığı azaltmak için kullanılır. Bu kümeleme işlemi, benzer verileri aynı grupta birleştirerek daha iyi bir veri analizi yapmayı sağlar.

///////// KULLANIM ŞEKLİ 

HCS (Hierarchical Clustering Scheme) kümeleme algoritması, veri setindeki benzer verileri gruplandırmak için bir hiyerarşik yapı kullanır. Bu algoritma, iki farklı yönteme dayanır: aglomeratif ve bölücü (divisive).

Aglomeratif yöntem, her veri noktasını ayrı bir küme olarak başlatır ve sonrasında bu kümeleme işlemini birleştirerek devam ettirir. İlk adımda, her veri noktası bir küme olarak başlar. Daha sonra, benzerlik matrisi kullanılarak, en yakın iki küme birleştirilir. Bu işlem, tüm veri noktaları bir küme oluşana kadar devam eder.

Bölücü yöntem ise, tüm veri setini tek bir küme olarak başlatır ve sonrasında alt kümelere ayırarak devam ettirir. İlk adımda, tüm veri noktaları tek bir küme olarak başlar. Daha sonra, benzerlik matrisi kullanılarak, küme ikiye ayrılır. Bu işlem, alt kümelere kadar devam eder.

HCS algoritması, kümeleme işlemini gerçekleştirirken, veri noktalarının birbirine olan uzaklıklarının bir ölçüsü olarak kullanılan bir benzerlik matrisi oluşturur. Bu matris, her veri noktasının diğer veri noktalarıyla olan benzerliğini gösterir. Benzerlik matrisi oluşturulduktan sonra, veriler birbirine olan benzerlikleri ve uzaklıkları göz önünde bulundurularak gruplara ayrılır.

Bu yöntem, birbirine yakın verilerin aynı grupta toplanmasını sağlar. HCS algoritması, bu gruplama işlemini, alt kümeleme adımlarına ayrılarak, bir hiyerarşik yapı oluşturur. Bu hiyerarşik yapı, veri setindeki küçük grupların daha büyük gruplara nasıl bağlandığını gösterir. Bu sayede, veri setindeki alt gruplar arasındaki bağlantıları ve ilişkileri daha iyi anlamak mümkün olur.

////// KULLANIM ALANLARI

HCS algoritması, özellikle biyoinformatik, coğrafi bilgi sistemleri, ekonomi, sosyoloji ve pazarlama gibi alanlarda kullanılır.

////// ÇALIŞMA ZAMANI

En iyi durumda, HCS algoritması O(n log n) zamanda çalışır. Bu durum, veri seti çok homojen olduğunda ve kümeleme işlemi için daha az hesaplama yapılması gerektiğinde gerçekleşir.

En kötü durumda, HCS algoritması O(n^3) zamanda çalışır. Bu durum, veri seti çok heterojen olduğunda ve her bir veri noktası için diğer tüm veri noktaları ile benzerlik ölçüsü hesaplanması gerektiğinde gerçekleşir.

Ortalama durumda, HCS algoritması O(n^2 log n) zamanda çalışır. Bu durum, veri setinin homojenlik ve heterojenlik oranına bağlı olarak değişebilir.

Benzerlik Ölçüsü Hesaplama: Veri setindeki her bir veri noktası için diğer tüm veri noktaları ile benzerlik ölçüsü hesaplanması, O(n^2) zaman gerektirir, burada n veri noktalarının sayısıdır.

Benzerlik Matrisi Oluşturma: Tüm veri noktalarının birbirleri ile olan benzerlik ölçüsü hesaplandıktan sonra, bu benzerlik ölçüleri bir benzerlik matrisinde saklanır. Bu işlem, O(n^2) zaman gerektirir.

Kümeleme İşlemi: Kümeleme işlemi, O(n^3 log n) zaman gerektirir. İlk olarak, her bir veri noktası tek başına bir küme olarak kabul edilir. Daha sonra, benzerlik matrisi kullanılarak, en yakın iki küme birleştirilir ve birbirine en yakın iki veri noktası belirlenir. Bu işlem, birleştirme hiyerarşisi olarak adlandırılan bir yapıda devam eder ve her adımda, birleştirme işlemi yapılan iki küme bir üst seviyedeki bir kümenin alt kümesi olarak ele alınır.

toplam çalışma zamanı O(n^3 log n + n^2) olarak söylenebilir.

        ZHU-TAKAOKA ALGORİTMASI
        
///// TANIMI

Zhu-Takaoka algoritması, grafiklerin en kısa yol (shortest path) problemi üzerinde çalışır ve dinamik programlama yaklaşımına dayanır. Bu algoritma, bir grafikteki tüm çiftler arasındaki en kısa yolu hesaplamak için kullanılır.

////// AMACI VE KULLANIM ALANLARI

Algoritmanın amacı, verilen bir grafikteki her bir çift düğüm arasındaki en kısa yolu hesaplamaktır. En kısa yollar, bir düğümden diğerine en az sayıda kenar kullanarak ulaşılabilen yolları ifade eder. Bu tür yollar, birçok uygulamada önemlidir, örneğin ağ yönlendirmesi, sosyal ağ analizi, trafik akışı modellemesi ve işlem optimizasyonu gibi alanlarda kullanılır.

Zhu-Takaoka algoritması, farklı türde grafiklerde (ağırlıksız ve ağırlıklı, yönlendirilmiş ve yönsüz) kullanılabilir. Ayrıca, grafikteki en kısa yolu hesaplama işlemini daha hızlı hale getiren bazı optimizasyon teknikleri de içerir.

Zhu-Takaoka algoritması, en kısa yolu hesaplaması gerektiren çeşitli uygulamalarda kullanılabilir. Örneğin, bir şehirdeki en kısa rota veya bir ağ üzerindeki en hızlı veri aktarımı gibi sorunlar bu algoritmayla çözülebilir. Ayrıca, genellikle yapay zeka ve robotik alanlarında da kullanılır.

///// ÇALIŞMA ZAMANI 

En iyi durumda: Algoritmanın en iyi durumunda, tüm çiftler arasındaki en kısa yolların zaten hesaplanmış olduğu varsayılır. Bu durumda, hesaplama zamanı O(1) dir. Yani, zaman sabit ve grafiğin boyutu ile ilgisi yoktur.

En kötü durumda: Algoritmanın en kötü durumunda, tüm düğümler arasındaki en kısa yolların hesaplanması için tüm düğümler arasında 3 adımlık bir döngü kullanılır. Bu durumda, hesaplama zamanı O(V^3) dir. Yani, grafiğin düğüm sayısı küp şeklinde arttıkça hesaplama zamanı büyür.

Ortalama durumda: Algoritmanın ortalama durumu tam olarak hesaplanamaz, ancak genellikle grafiğin boyutuna bağlı olarak artar. Algoritmanın çalışma zamanı, V ve E sayılarına göre farklılık gösterir.

     HANGİLERİ ARAMA ALGORİTMASIDIR ?
     
Jury-box: Bu kelime arama algoritmaları ile ilgili bir terim değil, ancak "Jury selection algorithm" olarak bilinen bir algoritma vardır. Bu algoritma, özellikle mahkeme jürilerinin seçiminde kullanılır.

Swim: Bu kelime, bir arama algoritması ile doğrudan ilişkili değildir. Ancak, "Swim algorithm" olarak adlandırılan bir çeşit evrimsel algoritma vardır. Bu algoritma, birçok popülasyondan oluşan bir arama uzayında örnekler alır ve bu örneklerin en iyilerini bulmaya çalışır.
