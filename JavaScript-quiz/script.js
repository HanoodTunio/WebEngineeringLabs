let userScore = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const startBtn = document.querySelector('.start-btn');
    const popupInfo = document.querySelector('.popup-info');
    const exitBtn = document.querySelector('.exit-btn');
    const main = document.querySelector('.main');
    const continueBtn = document.querySelector('.continue-btn');
    const quizSection = document.querySelector('.quiz-section');
    const nextBtn = document.querySelector('.next-btn');
    const resultBox = document.querySelector('.result-box');

    if (nextBtn) {
        nextBtn.disabled = true;
    }

    let questionCount = 0;
    let questionNumber = 1;
  

    if(startBtn) {
        startBtn.onclick = () => {
            popupInfo.classList.add('active');
            main.classList.add('active');
        }
    }

    if(exitBtn) {
        exitBtn.onclick = () => {
            popupInfo.classList.remove('active');
            main.classList.remove('active');
        }
    }

    if(window.location.pathname.endsWith('quiz-section.html')) {
        showQuestion(0);
        questionCounter(1);
        headerscore();
    }

    if(continueBtn) {
        continueBtn.onclick = () => {
            window.location.href = "quiz-section.html";
        }
    }

    if(nextBtn){
        nextBtn.onclick = () => {
            questionCount++;

            questionNumber++;
            questionCounter(questionNumber);

            nextBtn.classList.remove('active');
            nextBtn.disabled = true;

            if(questionCount == questions.length){
                setTimeout(function() {
                    window.location.href = "result.html";
                }, 500); // 2000 milliseconds = 2 seconds
                showResult();
            }
            if(questionCount < questions.length){
                showQuestion(questionCount);
            } else {
                console.log('Questions completed');
            }
            
        }
    }

    // getting the question from the questions.js file
    function showQuestion(index){

        const optionList = document.querySelector('.option-list');
        const questionText = document.querySelector('.question-text');
        questionText.textContent =`${questions[index].number}. ${questions[index].question}`;

        let optionTag = `
            
                <div class="option"><span>${questions[index].option[0]}</span></div>
                <div class="option"><span>${questions[index].option[1]}</span></div>
                <div class="option"><span>${questions[index].option[2]}</span></div>
                <div class="option"><span>${questions[index].option[3]}</span></div>
        `;

        try {
            optionList.innerHTML = optionTag;
            const options = optionList.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function(){
                    optionSelected(this);
                    nextBtn.disabled = false;

            });
        });

        } catch (error) {
            console.error('Error setting optionList.innerHTML:', error);
        }

    }

    function optionSelected(answer){
        let optionList = document.querySelector('.option-list');
        let userAnswer = answer.textContent;
        let correctAnswer = questions[questionCount].answer;
        let allOptions = optionList.children.length;
     

        if(userAnswer == correctAnswer){
            answer.classList.add('correct');
            userScore++;
            headerscore();
        } else {
            answer.classList.add('incorrect');

            // if answer incorrect then automatically select the correct answer

            for(let i = 0; i < allOptions; i++){
                if(optionList.children[i].textContent == correctAnswer){
                    optionList.children[i].setAttribute('class', 'option correct');
                }
            }
        }

        // if user selected an option then disable all options
        for(let i = 0; i < allOptions; i++){
            optionList.children[i].classList.add('disabled');
        }

        nextBtn.classList.add('active');
    }

    function questionCounter(index){
        const questionTotal = document.querySelector('.question-total');
        questionTotal.textContent = `${index} of ${questions.length} Questions`;
    }

    function headerscore(){
        const headerScoreTest = document.querySelector('.header-score');    
        headerScoreTest.textContent = `Score: ${userScore} / ${questions.length}`;
    }

    function showResult(){
        const scoreText = document.querySelector('.score-text');
        let scoreTag = `
            <h1>Score: ${userScore} / ${questions.length}</h1>
        `;

        scoreText.innerHTML = scoreTag; 
    
    }

    showQuestion(questionCount);
    
    
});