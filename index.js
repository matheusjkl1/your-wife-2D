const readline = require('readline-sync');

const randomNumeric =  Math.floor(Math.random() * 5);

const waifuArray = [
  "Rias Gremory",
  "Yui Yuigahama",
  "Yukino Yukinoshita",
  "Saki Kawasaki",
  "Haruno Yukinoshita",
  "Shizuka Hiratsuka",
]

const husbandArray = [
  "Levi Arckeman",
  "Shoyo Hinata",
  "Tobio Kageyama",
  "Osamu Dazai",
  "Chūya Nakahara",
  "Atsushi Nakajima"
]

function question() {
  const questionResponse = readline.question('Husband or Waifu?');
  return validationResponse(questionResponse);
}

function validationResponse(questionResponse) {
  if (questionResponse === "Husband" || questionResponse === "Waifu") {
    waifuOrHusbandVerify(questionResponse);
  } else {
    console.log('Errado!');
    question();
  }
}

function waifuOrHusbandVerify(questionResponse) {
  if (questionResponse === "Husband") {
    husbandArray.forEach((item, index) => { if(index === randomNumeric) console.log(`Seu Husband é, ${item}! 🙃`)});
  } else {
    waifuArray.forEach((item, index) => { if(index === randomNumeric) console.log(`Sua Waifu é, ${item}! 🙃`)});
  }
}

question();