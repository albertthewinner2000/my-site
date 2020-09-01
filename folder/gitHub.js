var LIST = [3, 7, 5, 44, 200, 48, 2, 9, 1, 13, 43, 33, 47, 24, 11];
//Graph
const GRAPH = {
  you: {
    isSeller: false,
    friends: ["alice", "bob", "clarie"],
  },
  alice: {
    isSeller: false,
    friends: ["peggy"],
  },
  bob: {
    isSeller: false,
    friends: ["anuj", "peggy"],
  },
  clarie: {
    isSeller: false,
    friends: ["jonny", "thom"],
  },
  anuj: {
    isSeller: false,
    friends: ["bob"],
  },
  peggy: {
    isSeller: false,
    friends: ["peggy"],
  },
  thom: {
    isSeller: true,
    friends: [],
  },
  jonny: {
    isSeller: false,
    friends: ["clarie"],
  },
};

const createSortedArray = (length) => {
  let arr = [];
  for (
    let i = 0, value = 1;
    i < length - 1;
    i++, value += Math.floor(Math.random() * 2 + 1)
  ) {
    arr.push(value);
  }
  return arr;
};

//bianry searching
const binarySearch = (list, item) => {
  for (
    let high = list.length - 1,
      low = 0,
      mid = Math.ceil((list.length - 1) / 2),
      i = 0; //iterations counter
    high >= low;
    mid = Math.ceil((high + low) / 2)
  ) {
    if (i++ === 100000000) throw new Error("More then 10**8 iterations"); //throw error
    if (list[mid] === item) {
      return mid;
    } else if (list[mid] > item) {
      high = mid - 1;
    } else if (list[mid] < item) {
      low = mid + 1;
    }
  }
  return null;
};

//selection sort
const selectionSort = (array) => {
  let newArray = [];
  let i = (minIndex = 0);
  while (array.length > 0) {
    minIndex = 0;
    i = 0;
    while (i < array.length) {
      if (array[i] < array[minIndex]) {
        minIndex = i;
      }
      i++;
    }
    newArray.push(array[minIndex]);
    array[minIndex] = array[0];
    array.shift();
  }
  return newArray;
};

// const BOX = [
//   [
//     //fisrt box
//     [null],
//     [null],
//   ],
//   [
//     //second box
//     [null],
//     [[null], [null]],
//     [null],
//   ],
//   [null], //third box
//   [
//     //forth box
//     [null],
//     [[null], [null]],
//     [[null], [["key"], [null]], [null]],
//   ],
// ];

// const searchKey = (box) => {
//   let trial = [];
//   while (box.length > 0) {
//     if (box[trial]) {
//     }
//   }
//   return trial;
// };
//countdown recursion
function countdown(i) {
  console.log(i);
  if (i <= 0) {
    return i;
  } else {
    countdown(i - 1);
  }
}

//sum with recursion
function sum(array) {
  if (array.length == 0) {
    return 0;
  } else {
    let number = array[0];
    array.shift();
    sum = sum(array) + number;
  }
  return sum;
}

//list length with recursion
function listLength(list) {
  if (list.length === 1) {
    return 1;
  } else {
    list.pop();
    length = listLength(list) + 1;
  }
  return length;
}

//max value of list with recursion
function maxValue(list) {
  if (list.length === 2) {
    if (list[0] > list[1]) {
      list[1] = list[0];
    }
    return list;
  } else {
    if (list[0] > list[1]) {
      list[1] = list[0];
    }
    list.shift();
    list = maxValue(list);
  }
  return list[0];
}

function quickSort(list) {
  //base case (start)
  if (list.length < 2) {
    console.log(`base case return: ${list}`);
    return list;
  }
  //base case end
  {
    const pivotPosition = Math.floor(Math.random() * list.length),
      //or pivotPosition = Math.ceil((list.length - 1) / 2);
      //or pivotPosition = 0;
      pivot = list[pivotPosition],
      lower = list.filter((x) => x < pivot),
      greater = list.filter((x) => x > pivot);
    console.log(
      `list: ${list}, lower: ${lower}, pivot: ${pivot},  greater: ${greater}`
    );
    list = [...quickSort(lower), pivot, ...quickSort(greater)]; //?
  }
  return list;
}

//search seller
function searchSeller(graph) {
  let searchQueue = graph["you"]["friends"];
  let searched = {};
  while (searchQueue.length > 0) {
    //queue if not empty and first person is not searched;
    console.log(searchQueue, searched);
    if (!(searchQueue[0] in searched)) {
      searched[searchQueue[0]] = true;
      if (graph[searchQueue[0]]["isSeller"]) {
        console.log(`${searchQueue[0]} is a mango seller`);
        return true;
      } else {
        searchQueue.push(...graph[searchQueue[0]]["friends"]);
        searchQueue.shift();
      }
    } else searchQueue.shift();
  }
  console.log("there's no mango sellers");
  return false;
}

// searchSeller(GRAPH);

const GRAPH2 = {
  start: {
    a: 3,
    b: 1,
    c: 2,
  },
  a: {
    d: 7,
  },
  b: {
    a: 1,
    f: 8,
  },
  c: {
    d: 1,
    e: 13,
  },
  d: {
    h: 3,
    f: 9,
  },
  e: {
    f: 1,
  },
  f: {
    g: 3,
    k: 4,
  },
  g: {
    k: 13,
    finish: 2,
  },
  h: {
    k: 2,
  },
  k: {
    finish: 5,
  },
  finish: {},
};
//findLowestConstNode
const findLowestCostNode = (graph) => {
  let nonProcessed = {},
    parents = { start: null },
    i = 0,
    processed = ["start"],
    costs = {
      start: 0,
    };
  node = "start";
  while (node !== "finish") {
    //change costs start
    for (let neighbour of Object.keys(graph[node])) {
      if (!(neighbour in costs)) {
        //if (!(neigthbour in graph[node]))
        costs[neighbour] = costs[node] + graph[node][neighbour];
        parents[neighbour] = node; //?
      } else {
        if (costs[node] + graph[node][neighbour] < costs[neighbour]) {
          costs[neighbour] = costs[node] + graph[node][neighbour];
          parents[neighbour] = node; //?
        }
      }
    }
    //costs change end
    //search node start
    nonProcessed = {};
    for (let element of Object.keys(costs)) {
      if (processed.indexOf(element) === -1) {
        //?
        nonProcessed[element] = costs[element];
      }
    }
    //console.log("nonProcessed:   ", nonProcessed);
    min = Math.min(...Object.values(nonProcessed));
    //console.log("min:   ", min);
    searchMinInNonProcessed: for (let element of Object.keys(nonProcessed)) {
      if (nonProcessed[element] === min) {
        node = element;
        break searchMinInNonProcessed;
      }
    }
    processed.push(node);
    //search node end
    console.log(
      `step ${i++}`,
      "       nonProcessed: ",
      nonProcessed,
      "    node: ",
      node,
      "    costs: ",
      "       processed: ",
      processed
    );
  }
  //last stage(return path and total result)
  let element = node;
  let trail = [];
  while (element !== null) {
    trail.unshift(element);
    element = parents[element];
  }
  console.log(parents, costs);
  return [trail, costs["finish"]];
};

const STATESNEDDED = ["mt", "wa", "or", "id", "nv", "ut", "са", "az"];

const stations = {};
stations["kone"] = ["id", "nv", "ut"];
stations["ktwo"] = ["wa", "id", "mt"];
stations["kthree"] = ["or", "nv", "са"];
stations["kfour"] = ["nv", "ut"];
stations["kfive"] = ["ca", "az"];




