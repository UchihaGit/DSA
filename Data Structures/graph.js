class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(key) {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = [];
    }
  }
  addEdge(V1, V2) {
    this.adjacencyList[V1].push(V2);
    this.adjacencyList[V2].push(V1);
    return this.adjacencyList;
  }
  removeEdge(V1, V2) {
    this.adjacencyList[V1] = this.adjacencyList[V1].filter(
      (vertex) => vertex !== V2
    );
    this.adjacencyList[V2] = this.adjacencyList[V2].filter(
      (vertex) => vertex !== V1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }
  DFS(v) {
    let visited = {},
      result = [],
      adjacencyList = this.adjacencyList;
    function traverse(v) {
      visited[v] = true;
      result.push(v);
      adjacencyList[v].forEach((element) => {
        if (!visited[element]) traverse(element);
      });
    }
    traverse(v);
    return result;
  }
  BFS(v) {
    let queue = [v],
      result = [],
      visited = {},
      vertex;
    visited[v] = true;

    while (queue.length) {
      vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

// {
//   Dallas: [ 'Tokyo', 'Aspen', 'Hong Kong' ],
//   Tokyo: [ 'Dallas', 'Hong Kong' ],
//   Aspen: [ 'Dallas', 'Los Angeles' ],
//   'Los Angeles': [ 'Hong Kong', 'Aspen' ],
//   'Hong Kong': [ 'Tokyo', 'Dallas', 'Los Angeles' ]
// }

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
console.log(g.addEdge("Los Angeles", "Aspen"));
//console.log(g.removeVertex("Hong Kong"));
console.log(g.DFS("Tokyo")); //[ 'Tokyo', 'Dallas', 'Aspen', 'Los Angeles', 'Hong Kong' ]
console.log(g.BFS("Dallas")); //[ 'Dallas', 'Tokyo', 'Aspen', 'Hong Kong', 'Los Angeles' ]
