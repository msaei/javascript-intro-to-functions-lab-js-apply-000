function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(str){
  console.log(str.toUpperCase())
}

function logWhisper(str){
  console.log(str.toLowerCase())
}
function sayHiToGrandma(str){
  if (str.toLowerCase()=== str){
    return "I can't hear you!"
  }
  if (str.toUpperCase() === str){
    return "YES INDEED!"
  }
  if (str === "I love you, Grandma."){
    return "I love you, too."
  }
}