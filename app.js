const api_url="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
const question3=document.getElementById('ques');
let quesnumber=document.getElementById('qno');
var correct_answerr='xyz';
let askedCount=1;
let totalQuestions = 10;
let score=0;
async function getapidata(url){
    if (askedCount >= totalQuestions) {
        showresult();
      }
    const response=await fetch(url);
    const data= await response.json();
    showquestion(data.results[0]);
    
    
}
getapidata(api_url);

function showquestion(data){
  let fixedstring="/10";
  quesnumber.innerHTML=askedCount+fixedstring;
        correctanswer=data.correct_answer;
        correct_answerr=data.correct_answer;
        console.log(correct_answerr);
        let optionss=data.incorrect_answers;
        let optionsList = optionss;
        optionsList.splice(Math.floor(Math.random() * (optionss.length + 1)), 0, correctanswer);
        let _ques=document.getElementById('ques');
          
        _ques.innerHTML = `${data.question} `;
            for(let i=0;i<4;i++){
            let _options=document.getElementById('opt'+(i+1));
            
            _options.innerHTML=data.incorrect_answers[i];
    
        }
    
       
        
 }
    




document.addEventListener('DOMContentLoaded', () => {
    const nextbutton = document.getElementById('next');
    nextbutton.addEventListener('click', () => {
      getapidata(api_url);
    });
  });
  
function optionselected(value){
  
    if (askedCount >= totalQuestions) {
        showresult();
      }
   
    if(value==correct_answerr){
        console.log("correct answer");
        score++;
        
        
    }
    else{
        console.log("incorrect");
        
       
        
    }
    askedCount++;
    
    getapidata(api_url);
 
}

function showresult(){
    hideElements();}

function hideElements() {
    
        const mainDiv = document.querySelector('.main');
        mainDiv.style.display = 'none';
        showScore();

      }
      function showScore() {
        const scoreElement = document.createElement('h3');
        
        scoreElement.style.color="white";
        scoreElement.style.textAlign="center";
        scoreElement.style.marginTop="150px";
        scoreElement.style.fontSize="3rem";
        scoreElement.textContent = `Your score: ${score}/${totalQuestions}`;
        
        document.body.appendChild(scoreElement);
        const restart = document.createElement('button');
        
        restart.style.backgroundColor="transparent";
        restart.style.textAlign="center";
     
        restart.style.marginTop="30px";
        restart.style.marginLeft="35%";
        restart.style.fontSize="3rem";
        restart.textContent = `↻`;
        restart.addEventListener('click',()=>{
          location.reload();
        })
        
        document.body.appendChild(restart);


      }