const myQuestions = [
    {
      question: "Only four elements are magnetic at room temperature, Iron, NIckel, Gadolium and ?",
      answers: {
        A: "Cobalt",
        B: "Helium",
        C: "Xenon"
      },
      correctAnswer: "A"
    },
    {
      question: "Which metal as the highest melting point?",
      answers: {
        A: "Steel",
        B: "Tungsten",
        C: "A rare alloy made from Steel, Platinum and Carbon"
      },
      correctAnswer: "B"
    },
    {
      question: "Brass is a metal alloy made up of which two elements?",
      answers: {
        A: "Iron and zinc",
        B: "Steel and zinc",
        C: "Copper and zinc",
        D: "Copper and Iron"
      },
      correctAnswer: "C"
    },
    {
      question: "What is the only letter not appearing on the Periodic Table?",
      answers: {
        A: "J",
        B: "C",
        C: "T",
        D: "F"
      },
      correctAnswer: "A"
    },
    {
      question: "Boyle's law is a gas law which states how the pressure of a gas increases as what property decreases?",
      answers: {
        A: "Cost",
        B: "Temperature",
        C: "Volume",
        D: "Time"
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
        document.cookie=("ChemistryQuiz=" + cookievalue)
      } else {
          output.innerText = "You didn't pass the Quiz, The pass mark is 3 or more!"
          cookievalue = "fail;";
          document.cookie=("ChemistryQuiz=" + cookievalue)
      
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
  