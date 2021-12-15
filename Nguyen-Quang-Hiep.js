for (let i = 30; i <= 300; i++) {
  if (i % 7 == 0 && i % 13 == 0) {
    let string = "";
    for (let j = 97; j <= 122; j++) {
      string += String.fromCharCode(j);
    }
    console.log(i, string);
  } else if (i % 7 == 0) console.log(i, "abc");
  else if (i % 13 == 0) console.log(i, "xyz");
  else console.log(i);
}
