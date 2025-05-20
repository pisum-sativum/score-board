let scoreH = document.getElementById("scoreh");
let scoreG = document.getElementById("scoreg");
function incrementh1() {
  let count = scoreH.textContent;
  count++;
  scoreH.textContent = count;
}
function incrementg1() {
  let count = scoreG.textContent;
  count++;
  scoreG.textContent = count;
}
function incrementh2() {
  incrementh1();
  incrementh1();
}
function incrementg2() {
  incrementg1();
  incrementg1();
}
function incrementh3() {
  incrementh1();
  incrementh1();
  incrementh1();
}
function incrementg3() {
  incrementg1();
  incrementg1();
  incrementg1();
}
