function time(s) {
  let hour = Math.floor(s / 3600);
  let min = Math.floor((s % 3600) / 60);
  let sec = s % 60;
  return [hour, min, sec];
}

console.log(time(3612));
