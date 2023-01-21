// найти есть ли путь из одной точки графа в другую в  однонапраленном графе
const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

function breadSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const currentPoint = queue.shift();
    console.log({ currentPoint });
    if (!graph[currentPoint]) {
      graph[currentPoint] = [];
    }
    if (graph[currentPoint].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[currentPoint]];
    }
    return false;
  }
}

console.log(breadSearch(graph, "a", "c"));
