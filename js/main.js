// 5번의 기회를 다 쓰면 게임 끝 (더 이상 추측 불가, 버튼이 disable)
// 유저가 이미 입력한 숫자를 또 입력하면 ,알려준다 ,기회를 깎지 않는다

//랜덤번호 지정 o
let setNum = 0;
let playButton = document.getElementById("playButton");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("result");
let resetBtn = document.getElementById("resetBtn");
let chances = 8;
let gameOver = false;
let count = document.getElementById("count");

function pickNum() {
  setNum = Math.floor(Math.random() * 100) + 1;
  console.log(`정답 ${setNum}`);
}
pickNum();

//유저가 번호 입력 한 뒤 GO 버튼 누르기
playButton.addEventListener("click", play);
resetBtn.addEventListener("click", reset);

//유저가 1과 100 범위 밖에 숫자를 입력하면 ,알려준다, 기회를 깎지 않는다
//만약 입력된 번호가 맞으면 "성공!!" 메시지 출력
//유저번호 < 컨펌번호 Down!!
//유저번호 > 컨펌번호 Up!!
// 5번의 기회를 다 쓰면 게임 끝 (더 이상 추측 불가, 버튼이 disable)

function play() {
  let userValue = userInput.value;

  if (userValue > 100 || userValue <= 0) {
    resultArea.textContent = "1과 100사이의 숫자를 입력해 주세요 ";
    return play;
  }

  chances--;

  count.textContent = `남은 기회 : ${chances}`;

  if (userValue < setNum) {
    resultArea.textContent = "아쉽네요!! UP !! ";
  } else if (userValue > setNum) {
    resultArea.textContent = "아쉽네요!! Down !! ";
  } else {
    resultArea.textContent = "정답입니다!! ";
    count.textContent = "Congratulations";
    playButton.disabled = true;
  }

  if (chances < 1) {
    gameOver = true;
    resultArea.textContent = " 게임 오버 ㅠㅠ";
    count.textContent = "Game Over";
  }
}

//Reset 버튼 누르면 게임이 리셋
function reset() {
  playButton.disabled = false;

  chances = 8;
  //userIput창 정리
  userInput.value = "";
  //새로운 번호 생성
  pickNum();

  //결과창 문구 리셋
  resultArea.textContent = "게임 결과";
  count.textContent = `남은 기회 : ${chances}`;
}
