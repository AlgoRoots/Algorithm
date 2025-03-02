const getDueDate = (date, month) => {
  const [y, m, d] = date.split(".").map(Number);
  const sumM = m + month;
  let tD = d - 1;
  let tM = sumM > 12 ? sumM % 12 : sumM;
  let restY = Math.floor(sumM / 12);
  if (tM === 0) {
    tM = 12;
    restY -= 1;
  }

  let tY = sumM > 12 ? y + restY : y;
  if (tD === 0) {
    tD = 28;
    tM -= 1;
    if (tM === 1) {
      tY -= 1;
    }
  }

  return [tY, tM, tD];
};

// "2022.05.19"	["A 6", "B 12", "C 3"]	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]

const isDayBefore = (today, date) => {
  console.log("today", today, date);
  const [tY, tM, tD] = today;
  const [y, m, d] = date;
  if (tY < y) return false;
  if (tY === y && tM < m) return false;
  if (tY === y && tM === m && tD <= d) return false;
  return true;
};

function solution(today, terms, privacies) {
  const termsMap = new Map(terms.map((t) => t.split(" ")));
  const day = today.split(".").map(Number);

  let answer = [];

  privacies.forEach((d, i) => {
    const [date, type] = d.split(" ");
    const dueDate = getDueDate(date, +termsMap.get(type));
    if (isDayBefore(day, dueDate)) {
      answer.push(i + 1);
    }
  });
  console.log("answer", answer);
  return answer;
}

// solution(
//   "2022.05.19",
//   ["A 6", "B 12", "C 3"],
//   ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
// );

solution("2009.12.28", ["A 13"], ["2008.11.03 A"]); // 1
// 2008 11+13 24 03
// 2009 12 03

/**
 * timestamp처럼 적용하는 방법 알기
 */

// function solution(today, terms, privacies) {
//   var answer = [];
//   var [year, month, date] = today.split(".").map(Number);
//   var todates = year * 12 * 28 + month * 28 + date;
//   var t = {};
//   terms.forEach((e) => {
//     let [a, b] = e.split(" ");
//     t[a] = Number(b);
//   });
//   privacies.forEach((e, i) => {
//     var [day, term] = e.split(" ");
//     day = day.split(".").map(Number);
//     var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
//     if (dates <= todates) answer.push(i + 1);
//   });
//   return answer;
// }

/**
 * new Date 28일 조건때문에 안썼는데 어차피 대소비교라 괜찮았네ㅜ
 * function solution(today, terms, privacies) {
    let result = [];
    let obj1 = {};
    for(let e of terms){
        const [type, month] = e.split(" ");
        obj1[type] = month;
    }
    for(let i = 0; i < privacies.length; i++){
        const[start, type] = privacies[i].split(" ");
        let now = new Date(start);
        let date = new Date(today);
        now.setMonth(now.getMonth() + Number(obj1[type]));
        if(date >= now) result.push(i+1);
    }
    return result;
}
 */
