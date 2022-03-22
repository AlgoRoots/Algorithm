function solution(genres, plays) {
  const chart = genres.reduce((obj, genre, i) => {
    if (!obj[genre]) {
      obj[genre] = { playCount: plays[i], list: [] };
    } else {
      obj[genre].playCount += plays[i];
    }

    obj[genre].list.push([i, plays[i]]);

    return obj;
  }, {});
  console.log("chart: ", chart);
  console.log("list: ", chart.classic.list);
  console.log("list: ", chart.pop.list);

  // 객체 정렬
  const sorted = Object.values(chart).sort((a, b) => {
    // 내림차순 정렬
    return b.playCount - a.playCount;
  });
  console.log("sorted :", sorted);
  console.log("list: ", sorted.list);
  console.log("list: ", sorted.list);

  // 정렬한 chart 사용한다.
  const answer = sorted.reduce((acc, genre) => {
    genre.list.sort((a, b) => {
      return b[1] - a[1];
    });
    acc.push(genre.list[0][0]);

    if (genre.list.length > 1) {
      acc.push(genre.list[1][0]);
    }
    console.log("genre: ", genre);
    return acc;
  }, []);

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop", "classic"];
const genres2 = ["classic", "pop", "pop"];
const plays = [500, 600, 150, 800, 2500, 800];
const plays2 = [500, 600, 150];
console.log(solution(genres, plays));
//console.log(solution(genres2, plays2));
