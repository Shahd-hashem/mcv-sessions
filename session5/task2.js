let strSen=["Smile, it's a beautiful day!",
      "You can do hard things.",
      "Dream big and dare to fail.",
      "You are stronger than you think.",
      "Positivity always wins.",
      "Your only limit is your mind.",
      "One kind word can change someone’s day.",
      "You’ve got this!"]
let btn=document.getElementById("btn")
let sent=document.getElementById("sentence")


let index=1
function sen(){
    let inn=strSen[index]
    sent.innerText=inn
    index++
}
btn.addEventListener("click",sen)
