function solution(dirs) {
  const move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let now = [0, 0];
  let check = new Set();

  for (let i = 0; i < dirs.length; i++) {
    let nx = now[0] + move[dirs[i]][0];
    let ny = now[1] + move[dirs[i]][1];

    if (nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;

    check.add("" + now[0] + now[1] + nx + ny);
    check.add("" + nx + ny + now[0] + now[1]);

    now = [nx, ny];

    console.log(now);
    console.log(check);
  }
  console.log("now", now);
  return check.size / 2;
}

console.log(solution("LULLLLLLU"));
