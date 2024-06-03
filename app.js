const topicCodes = {
    "Mastering CLI": "CLI123",
    "Git & GitHub": "GIT456",
    HTML: "HTML789",
    "CSS Basics": "CSS101",
    "Intermediate CSS": "CSS202",
    "JavaScript Basics": "LOG303",
    "DOM Manipulation": "DOM404",
  };

  const buttons = document.querySelectorAll(".quiz-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const topic = this.getAttribute("data-topic");
      const enteredCode = prompt(
        `Enter the code to access the ${topic} quiz:`
      );
      const correctCode = topicCodes[topic];
      if (enteredCode === correctCode) {
        window.location.href = `dashboard.html?topic=${encodeURIComponent(
          topic
        )}`;
      } else {
        alert("Incorrect code. Please try again.");
      }
    });
  });

  function retrieveScore() {
    const topics = [
      "Mastering CLI",
      "Git & GitHub",
      "HTML",
      "CSS Basics",
      "Intermediate CSS",
      "JavaScript Basics",
      "DOM Manipulation",
    ];

    const topicIds = {
      "Mastering CLI": "CLI",
      "Git & GitHub": "GIT",
      HTML: "HTML",
      "CSS Basics": "CSS1",
      "Intermediate CSS": "CSS2",
      "JavaScript Basics": "JS",
      "DOM Manipulation": "DOM",
    };

    topics.forEach((topic) => {
      let score = localStorage.getItem(topic) || 0; // Retrieving score from localStorage, defaulting to 0 if null
      const id = topicIds[topic];

      const scoreInfo = document.getElementById(id);
      if (scoreInfo) {
        scoreInfo.innerHTML = `
            <span class="strong">COMPLETION RATE: ${
              score === 0 ? "0%" : "100%"
            }</span>
            <span class="strong">SCORE: ${score}/10</span>
        `;
      }
    });
  }

  retrieveScore();

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (
      e.keyCode == 123 ||
      (e.ctrlKey && e.shiftKey && e.keyCode == 73) ||
      (e.ctrlKey && e.keyCode == 85)
    ) {
      e.preventDefault();
    }
  });