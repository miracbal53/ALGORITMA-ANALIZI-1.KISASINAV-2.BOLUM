function hcs(points) {
    // Başlangıçta her nokta tek bir kümedir
    let clusters = points.map(p => [p]);
  
    while (clusters.length > 1) {
      // En yakın iki küme bulunur
      let minDist = Infinity;
      let minI = -1;
      let minJ = -1;
      for (let i = 0; i < clusters.length; i++) {
        for (let j = i+1; j < clusters.length; j++) {
          let dist = distance(clusters[i], clusters[j]);
          if (dist < minDist) {
            minDist = dist;
            minI = i;
            minJ = j;
          }
        }
      }
  
      // İki küme birleştirilir
      clusters[minI] = clusters[minI].concat(clusters[minJ]);
      clusters.splice(minJ, 1);
    }
  
    // Son kalan küme döndürülür
    return clusters[0];
  }
  
  function distance(a, b) {
    // İki kümenin merkez noktaları arasındaki mesafe döndürülür
    let ax = a.map(p => p[0]);
    let ay = a.map(p => p[1]);
    let bx = b.map(p => p[0]);
    let by = b.map(p => p[1]);
    let cx = (Math.max(...ax) + Math.min(...ax)) / 2;
    let cy = (Math.max(...ay) + Math.min(...ay)) / 2;
    let dx = (Math.max(...bx) + Math.min(...bx)) / 2;
    let dy = (Math.max(...by) + Math.min(...by)) / 2;
    return Math.sqrt((cx - dx)**2 + (cy - dy)**2);
  }
  
  /* Bu algoritmanın Big-O zaman karmaşıklığı O(n^3 log n) 'dir, çünkü iki kümenin mesafesi hesaplandığında her bir 
  kümenin orta noktasını hesaplamak için O(n) zaman gerekir ve tüm kümelerin mesafeleri hesaplanırken iki adet iç içe döngü kullanılır,
   bu nedenle O(n^2) zaman alır. Son olarak, tüm kümeler birleştirilirken bir döngü kullanılır ve bu da en kötü durumda O(n log n) zaman alır 
   (bu, splice fonksiyonunun zaman karmaşıklığından kaynaklanır). Dolayısıyla, toplam zaman karmaşıklığı O(n^3 log n)'dir. */