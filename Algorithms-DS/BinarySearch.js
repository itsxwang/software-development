// array should be in ordered for binary search
// complexity is O(log n)

function bin(n, e) {
  if (n.length === 0) {
    return "not found";
  }

  if (n.length === 1) {
      return n[0] === e ? 1 : "not found";
}

  let iter = 0;
  let sorted = n.sort((a, b) => a - b);
  let el = sorted[Math.floor(sorted.length / 2)];
  iter++;

  while (el != e) {
    iter++;
    if (sorted.length === 1) {
      return "not found";
    }
    if (e > el) {
        sorted = sorted.slice(Math.floor(sorted.length / 2) + 1, sorted.length);
        console.log(sorted);
    } else if (e < el) {
      sorted = sorted.slice(0, Math.floor(sorted.length / 2));
    }

    el = sorted[Math.floor(sorted.length / 2)];

  }

  return iter;
}

console.log(bin([7,3,7,1], 3));