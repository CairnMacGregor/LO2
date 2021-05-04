const myQuestions = [
    {
      question: "What is the square root of 9",
      answers: {
        A: "2",
        B: "3",
        C: "9"
      },
      correctAnswer: "B"
    },
    {
      question: "4 x ? = 100",
      answers: {
        A: "25",
        B: "26",
        C: "20"
      },
      correctAnswer: "A"
    },
    {
      question: "(( 3 x 3 ) + 9 ) / 2 = ?",
      answers: {
        A: "18",
        B: "9",
        C: "12",
        D: "3"
      },
      correctAnswer: "B"
    },
    {
      question: "Which of these is the prime number",
      answers: {
        A: "149",
        B: "160",
        C: "155",
        D: "312"
      },
      correctAnswer: "A"
    },
    {
      question: "Cairn MacGregor is ...",
      answers: {
        A: "22",
        B: "23",
        C: "24",
        D: "25"
      },
      correctAnswer: "C"
    }
  ];
    const buildQuiz = () =>{
      const output = [];

      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];

          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
   
    const showResults = () =>{
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'lightgreen';
        }else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    
      const output = document.getElementById("output")
      if(numCorrect >= 3){
          output.innerText = "You passed the Quiz!"
          cookievalue= "pass;";
        document.cookie=("ArithmeticQuiz=" + cookievalue)
      } else {
          output.innerText = "You didn't pass the Quiz, The pass mark is 3 or more!"
          cookievalue = "fail;";
          document.cookie=("ArithmeticQuiz=" + cookievalue)
      
        }
    }
  
    const showSlide = (n) => {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    const showNextSlide = () => {
      showSlide(currentSlide + 1);
    }
  
    const showPreviousSlide = () => {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
   
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  