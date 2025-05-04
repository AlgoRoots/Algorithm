function solution(phone_book) {
  const sorted = phone_book.sort();
  const answer = sorted.every((phone, idx, arr) => {
    if (idx !== phone_book.length - 1) {
      const next = arr[idx + 1].slice(0, phone.length);
      return next !== phone;
    }
    return true;
  });
  return answer;
}
[
  [1, "a"],
  [2, "a"],
  [3, "a"],
  [4, "b"],
  [5, "b"],
  [6, "c"],
];
