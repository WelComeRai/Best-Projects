const question =[
  {
    question:"Which Is Leargest Animal In The World ?",
    answer:[
      { text :"Shark" , correct: false},
      { text :"Blue Whale" , correct: true},
      { text :"Elephent" , correct: false},
      { text :"Giraffi" , correct: false},
    ]
  },
  {
    question:"How To Learn JS?",
    answer:[
      { text :"Shark" , correct: false},
      { text :"Blue Whale" , correct: true},
      { text :"Elephent" , correct: false},
      { text :"Giraffi" , correct: false},
    ]
  },
  {
    question:"Which Is Leargest Animal In The World ?",
    answer:[
      { text :"Shark" , correct: false},
      { text :"Blue Whale" , correct: true},
      { text :"Elephent" , correct: false},
      { text :"Giraffi" , correct: false},
    ]
  },
  {
    question:"Which Is Leargest Animal In The World ?",
    answer:[
      { text :"Shark" , correct: false},
      { text :"Blue Whale" , correct: true},
      { text :"Elephent" , correct: false},
      { text :"Giraffi" , correct: false},
    ]
  },
]
const  questionElement =document.querySelector("#question");
const  answerBtn =document.querySelector("#answerBtn");
const  nextBtn =document.querySelector("#nextBtn");
 
// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//   currentQuestionIndex = 0;
//   score = 0;
//   nextBtn.innerHTML= "Next";
//   showQuestion();
// }

//  function showQuestion(){
//   restState();
//   let currentQuestion = question[currentQuestionIndex];
//   let questionNo = currentQuestionIndex +1;
//   questionElement.innerHTML= questionNo +". "+ currentQuestion.question;
//   currentQuestion.answer.forEach((answer)=>{
//  const button = document.createElement("button");
//  button.innerHTML=answer.text;
//  button.classList.add("btn");
//  answerBtn.appendChild(button);
//  if(answer.correct){
//  button.dataset.correct = answer.correct;
//  };
//  button.addEventListener("click" , selectAnswer);
//   });
//  };
// function restState(){
//   nextBtn.style.display= "none";
//   while(answerBtn.firstChild){
//   answerBtn.removeChild(answerBtn.firstChild);
//   }
//  };
//  function selectAnswer(e){
//    const  selectBtn = e.target;
//    const isCorrect = selectBtn.dataset.correct === "true";
//    if(isCorrect){
//    selectBtn.classList.add("correct");
//    }else{
//    selectBtn.classList.add("incorrect");
// };
//  };
//  startQuiz();

let questionIn= 0;
let questionScore = 0;

function quizStart(){
  questionIn=0;
  questionScore=0;
  nextBtn.innerHTML = "Next";
  ansAndQuestShow();
};
  
function ansAndQuestShow(){
  resetStatuse();
 const currentIndex = question[questionIn];
 const NumberOfCurrent = questionIn +1;
 questionElement.innerHTML = NumberOfCurrent +". " + currentIndex.question;
 currentIndex.answer.forEach(answer=>{
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerBtn.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  };

  button.addEventListener("click" , ansSelection)
})

}


function resetStatuse(){
  nextBtn.style.display = "none";
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild);
  } 
}
 
function ansSelection(e){
  const targetBtn = e.target;
  const answerShow = targetBtn.dataset.correct === "true";
  if(answerShow){
    targetBtn.classList.add("correct");
  }else{
    targetBtn.classList.add("incorrect")
  }
  Array.from(answerBtn.children).forEach(button =>{
 if(button.dataset.correct === "true"){
  button.classList.add('correct');
 }
  button.disabled = "true"
  })
  nextBtn.style.display = "block";
}


quizStart();