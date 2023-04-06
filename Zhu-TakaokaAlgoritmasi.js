function zhuTakaoka(graph, start) {
    const dist = {};
    const visited = {};
    const q = [];
  
    for (let v in graph) {
      dist[v] = Infinity;
    }
  
    dist[start] = 0;
    q.push([start, dist[start]]);
  
    while (q.length > 0) {
      let [u, d] = q.shift();
  
      if (visited[u]) {
        continue;
      }
  
      visited[u] = true;
  
      for (let [v, w] of Object.entries(graph[u])) {
        let newDist = d + w;
  
        if (newDist < dist[v]) {
          dist[v] = newDist;
          q.push([v, dist[v]]);
        }
      }
  
      q.sort((a, b) => a[1] - b[1]);
    }
  
    return dist;
  }

/* Bu kod, bir grafı ve bir başlangıç düğümünü alır ve tüm diğer düğümlere olan en kısa yolları hesaplar. 
dist nesnesi, her düğümün başlangıç düğümüne olan mesafesini tutar. visited nesnesi, her düğümün ziyaret edilip edilmediğini takip eder. 
q kuyruğu, henüz işlem görmemiş düğümleri tutar.

Algoritma, q kuyruğundan en kısa mesafeye sahip düğümü çıkarır ve bu düğümü ziyaret edildi olarak işaretler. 
Ardından, düğüme bağlı tüm diğer düğümleri gezerek, daha kısa bir yol bulunursa mesafelerini günceller ve kuyruğa ekler. 
Son olarak, kuyruğu mesafelere göre yeniden sıralar ve bu işlem, kuyruk boşalana kadar devam eder.

Zhu-Takaoka algoritmasının Big-O zaman karmaşıklığı O(n^3) olduğundan, bu algoritma büyük grafikler için uygun değildir. 
Ancak, küçük ölçekli grafikler için oldukça etkilidir. */