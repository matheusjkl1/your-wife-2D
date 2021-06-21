const randomNumeric =  Math.floor(Math.random() * 5);

const waifuArray = [
  "Rias Gremory",
  "Yui Yuigahama",
  "Yukino Yukinoshita",
  "Saki Kawasaki",
  "Haruno Yukinoshita",
  "Shizuka Hiratsuka",
]

for (let index = 0; index < waifuArray.length; index++) {
    const element = waifuArray[randomNumeric];

    return console.log(`Sua é Waifu, ${element}! 🙃`);
}