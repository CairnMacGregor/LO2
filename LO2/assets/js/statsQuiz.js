const myQuestions = [
    {
      question: "What is the probability of rolling 3 dice, and them all landing on a 6?",
      answers: {
        A: "1/36",
        B: "1/216",
        C: "1/2166"
      },
      correctAnswer: "B"
    },
    {
      question: "I have 18 blue marbles, 16 green marbles and 22 red marbles in a bag. What is the chance I will pick a green marble if I pick a marble out at random (simplify the answer)?",
      answers: {
        A: "15/56",
        B: "30/120",
        C: "16/40",
        D: "2/7"
      },
      correctAnswer: "D"
    },
    {
      question: "A spinner has 3 green sides, 2 yellow sides, 4 red sides, 1 blue side and 3 orange sides, is it probable that I would NOT spin a yellow or a red side if I spun it at random?",
      answers: {
        A: "Yes",
        B: "No",
        C: "Maybe",
        D: "Depends on the speed"
      },
      correctAnswer: "A"
    },
    {
      question: "I draw 1 card from a standard 52-card pack of cards. All the cards had an equal chance of being picked. What is the chance I did NOT pick a face card?",
      answers: {
        A: "15/52",
        B: "10/13",
        C: "40/55",
        D: "20/52"
      },
      correctAnswer: "B"
    },
    {
      question: "I have 3 cards. The mean of the cards is 6. The 1st card is a 3. The 2nd card is a 9. What is the 3rd card?",
      answers: {
        A: "3",
        B: "6",
        C: "9",
        D: "12"
      },
      correctAnswer: "B"
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
        document.cookie=("StatisticsQuiz=" + cookievalue)
      } else {
          output.innerText = "You didn't pass the Quiz, The pass mark is 3 or more!"
          cookievalue = "fail;";
          document.cookie=("StatisticsQuiz=" + cookievalue)
      
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
  