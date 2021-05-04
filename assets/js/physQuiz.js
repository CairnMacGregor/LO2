const myQuestions = [
    {
      question: "Does light travel fastest in air, water or a vacuum?",
      answers: {
        A: "Air",
        B: "Water",
        C: "Vacuum"
      },
      correctAnswer: "C"
    },
    {
      question: "Which branch of physics is concerned with heat and temperature and their relation to energy and work?",
      answers: {
        A: "Astrophysics",
        B: "Thermodynamics",
        C: "Thermohydrolics"
      },
      correctAnswer: "B"
    },
    {
      question: "Do you weigh less, the same, or more at the equator?",
      answers: {
        A: "Less",
        B: "The Same",
        C: "More",
        D: "Depends on the time of year"
      },
      correctAnswer: "A"
    },
    {
      question: "Knighted in 1866 by Queen Victoria, by what name do we better know physicist Sir William Thomson?",
      answers: {
        A: "Alexander Graham Bell",
        B: "Henri Becquerel",
        C: "Lord Kelvin"
      },
      correctAnswer: "C"
    },
    {
      question: "The Dark Side of the Moon' album cover by Pink Floyd features which object refracting light?",
      answers: {
        A: "A refraction cube",
        B: "A light splitting CD",
        C: "A magic triangle",
        D: "A prism"
      },
      correctAnswer: "D"
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
        document.cookie=("PhysicsQuiz=" + cookievalue)
      } else {
          output.innerText = "You didn't pass the Quiz, The pass mark is 3 or more!"
          cookievalue = "fail;";
          document.cookie=("PhysicsQuiz=" + cookievalue)
      
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
  