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

function querryResponse() {
  const questionResponse = readline.question('Husband or Waifu?');
  if (questionResponse === "Husband") {
    husbandArray.forEach((item, index) => { if(index === randomNumeric) console.log(`Sua é Waifu, ${item}! 🙃`)})
  } else {
    waifuArray.forEach((item, index) => { if(index === randomNumeric) console.log(`Sua é Waifu, ${item}! 🙃`)})
  }
}

const questionResponse = readline.question('Husband or Waifu?');
if (!questionResponse || questionResponse != "Husband" || questionResponse != "Waifu") {
  console.log('Errado!');
  querryResponse()
} else {
  if (questionResponse === "Husband") {
    husbandArray.forEach((item, index) => { if(index === randomNumeric) console.log(`Sua é Waifu, ${item}! 🙃`)})
  } else {
    waifuArray.forEach((item, index) => { if(index === randomNumeric) console.log(`Sua é Waifu, ${item}! 🙃`)})
  }
}


