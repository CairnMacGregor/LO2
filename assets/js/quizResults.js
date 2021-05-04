// ARITHMETIC

const arithmeticresult = document.getElementById("arithemticPass");
      const cookieString = document.cookie;
      if (cookieString.includes("ArithmeticQuiz=fail")) {
        arithmeticresult.innerText = "Quiz Failed, Try again?";
        arithmeticresult.style.color = "red";
      } else if (cookieString.includes("ArithmeticQuiz=pass")) {
        arithmeticresult.innerText = "Quiz Passed";
        arithmeticresult.style.color = "green";
      } else {
        arithmeticresult.innerText = "Quiz Not Yet Attempted";
        arithmeticresult.style.color = "grey";
      }
// HISTORY
      const historyresult = document.getElementById("historyPass");
      if (cookieString.includes("HistoryQuiz=fail")) {
        historyresult.innerText = "Quiz Failed, Try again?";
        historyresult.style.color = "red";
      } else if (cookieString.includes("HistoryQuiz=pass")) {
        historyresult.innerText = "Quiz Passed";
        historyresult.style.color = "green";
      } else {
        historyresult.innerText = "Quiz Not Yet Attempted";
        historyresult.style.color = "grey";
      }
      // GEOGRAPHY
      const georesult = document.getElementById("geoPass");
      if (cookieString.includes("GeographyQuiz=fail")) {
        georesult.innerText = "Quiz Failed, Try again?";
        georesult.style.color = "red";
      } else if (cookieString.includes("GeographyQuiz=pass")) {
        georesult.innerText = "Quiz Passed";
        georesult.style.color = "green";
      } else {
        georesult.innerText = "Quiz Not Yet Attempted";
        georesult.style.color = "grey";
      }
      // PHYSICS
      const physicsresult = document.getElementById("physicsPass");
      if (cookieString.includes("PhysicsQuiz=fail")) {
        physicsresult.innerText = "Quiz Failed, Try again?";
        physicsresult.style.color = "red";
      } else if (cookieString.includes("PhysicsQuiz=pass")) {
        physicsresult.innerText = "Quiz Passed";
        physicsresult.style.color = "green";
      } else {
        physicsresult.innerText = "Quiz Not Yet Attempted";
        physicsresult.style.color = "grey";
      }
      // CHEMISTRY
      const chemresult = document.getElementById("chemPass");
      if (cookieString.includes("ChemistryQuiz=fail")) {
        chemresult.innerText = "Quiz Failed, Try again?";
        chemresult.style.color = "red";
      } else if (cookieString.includes("ChemistryQuiz=pass")) {
        chemresult.innerText = "Quiz Passed";
        chemresult.style.color = "green";
      } else {
        chemresult.innerText = "Quiz Not Yet Attempted";
        chemresult.style.color = "grey";
      }
      // STATISTICS
      const statsresult = document.getElementById("statsPass");
      if (cookieString.includes("StatisticsQuiz=fail")) {
        statsresult .innerText = "Quiz Failed, Try again?";
        statsresult .style.color = "red";
      } else if (cookieString.includes("StatisticsQuiz=pass")) {
        statsresult .innerText = "Quiz Passed";
        statsresult .style.color = "green";
      } else {
        statsresult .innerText = "Quiz Not Yet Attempted";
        statsresult .style.color = "grey";
      }
