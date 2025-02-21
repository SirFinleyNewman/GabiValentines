const alternatives = [
  {text:"Why are you back here Gabi! Ad Astra!", images:"images/Excited Happy.gif"},
  {text:"There is no what if, I know you'll be able to", images:"images/Encouragement.gif"},
  {text:"Yeah, but...", images:"images/Believe in You.gif"},
  {text:"You won't have to do this alone, you know", images:"images/Im rooting for you.gif"},
  {text:"Everyone will always be here supporting you, no matter what!", images:"images/Believe in You.gif"},
  {text:"We wont forget you, how lucky are all of us?", images:"images/Goodbye"},
  {text:"Don't turn back now Gabi, I know you can do this", images:"images/Im so proud.gif"},
]
const ohyes = {text:"Don't worry about me Gabi. I'll be okay, you're my friend till the end. I'll be here rooting for you wherever and whenever", images:"images/Friends Forever.jpg"}
const cat = document.querySelector('.cat')
const kuki = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "❤️"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'But what if..?'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})
