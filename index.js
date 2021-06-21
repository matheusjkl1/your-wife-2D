const randomNumeric =  Math.floor(Math.random() * 5);

const waifuArray = [
  "Rias Gremory",
  "Yui Yuigahama",
  "Yukino Yukinoshita",
  "Saki Kawasaki",
  "Haruno Yukinoshita",
  "Shizuka Hiratsuka",
]

waifuArray.forEach((item, index) => { if(index === randomNumeric) console.log(`Sua é Waifu, ${item}! 🙃`)})

// for (let index = 0; index < waifuArray.length; index++) {
//     const element = waifuArray[randomNumeric];

//     return console.log(`Sua é Waifu, ${element}! 🙃`);
// }