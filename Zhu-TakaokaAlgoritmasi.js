const fs = require('fs');

// Zhu-Takaoka algoritması ile en kısa yolu bulur
function zhuTakaoka(startNode, endNode, graph) {
  const queue = [startNode];
  const visited = new Set(queue);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode === endNode) {
      // en kısa yolun uzunluğunu döndürür
      return currentNode.distance;
    }

    for (let neighbor of graph[currentNode.word]) {
      if (!visited.has(neighbor)) {
        neighbor.distance = currentNode.distance + 1;
        neighbor.parent = currentNode;
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  // hiçbir yol bulunamazsa -1 döndürür
  return -1;
}

// dosyayı okur ve kelimeleri düğümlere ayırır
function createGraph(alice_in_wonderland) {
  const data = fs.readFileSync(alice_in_wonderland, 'utf8');
  const words = data.match(/[a-zA-Z]+/g);
  const graph = {};

  for (let word of words) {
    const node = { word, neighbors: [], distance: null, parent: null };
    graph[word] = [];

    for (let otherWord of words) {
      if (word !== otherWord && word.length === otherWord.length) {
        let differences = 0;

        for (let i = 0; i < word.length; i++) {
          if (word[i] !== otherWord[i]) {
            differences++;

            if (differences > 1) {
              break;
            }
          }
        }

        if (differences === 1) {
          graph[word].push(node);
        }
      }
    }
  }

  return graph;
}

// aranan kelimeyi dosyada arar
function searchWord(word, graph) {
  if (graph[word]) {
    console.log(`Kelime "${word}" dosyada bulundu. Düğümler ve en kısa yol:`);

    for (let neighbor of graph[word]) {
      const distance = zhuTakaoka(neighbor, graph[word][0], graph);
      let path = `${neighbor.word} -> ${word}`;

      while (neighbor.parent) {
        path = `${neighbor.parent.word} -> ${path}`;
        neighbor = neighbor.parent;
      }

      console.log(`Düğümler: ${path}`);
      console.log(`En kısa yol uzunluğu: ${distance}`);
    }
  } else {
    console.log(`Kelime "${word}" dosyada bulunamadı.`);
  }
}

// dosyayı okur ve grafı oluşturur
const graph = createGraph('alice_in_wonderland.txt');

// kelimeleri arar
searchWord('upon', graph);
searchWord('sigh', graph);
searchWord('Dormouse', graph);
searchWord('jury-box', graph);
searchWord('swim', graph);
