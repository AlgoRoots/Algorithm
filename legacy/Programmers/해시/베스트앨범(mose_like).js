function solution(genres, plays) {
  //let obj = {};
  let obj = genres.reduce(
    (obj, track, i) => (
      (obj[track] = obj[track] ? obj[track] + plays[i] : plays[i]), obj
    ),
    {}
  );
  console.log(obj);

  //  filter할 때 한 장르 안에서 3개 이상의 t(track)이 나오면
  // 상위 2개를 제외한 그 뒤의 track를 false해서 filtering하기 위함입니다
  let dubObj = {};

  return genres
    .map((track, i) => ({
      genre: track,
      count: plays[i],
      index: i,
    }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return obj[b.genre] - obj[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    .filter((song) => {
      if (dubObj[song.genre] >= 2) return false;
      dubObj[song.genre] = dubObj[song.genre] ? dubObj[song.genre] + 1 : 1;
      console.log("ㅇ", dubObj);
      return true;
    })

    .map((song) => song.index);
}

const genres = ["classic", "pop", "classic", "classic", "pop", "classic"];
const genres2 = ["classic", "pop", "pop"];
const plays = [500, 600, 150, 800, 2500, 800];
const plays2 = [500, 600, 150];
console.log(solution(genres, plays));
//console.log(solution(genres2, plays2));
