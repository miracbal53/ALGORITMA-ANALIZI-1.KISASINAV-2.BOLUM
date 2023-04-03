# ALGORITMA-ANALIZI-1.KISASINAV-2.BOLUM
1. Konu : HCS kumeleme algoritması - 2. Konu : Zhu-Takaoka algoritmasi

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
