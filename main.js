//Scroll smooth to section with quizes
const nav = document.querySelector('nav ul li a');

const sectionTop = document.querySelector('section.sport');
const sectionHeight = sectionTop.offsetTop;

nav.addEventListener('click', () => {
    window.scroll({
        top: sectionHeight,
        left: 0,
        behavior: 'smooth'
    });
})

//Array for sport quiz with questions and answers

const sportQuestions = [{
    question: 'Jak nazywa się najlepszy polski zawodnik grający w Bayernie Monachium?',
    firstOption: 'Akradiusz Milik',
    secondOption: 'Robert Lewandowski',
    thirdOption: 'Zbigniew Boniek'
},

{
    question: 'Kto wygrał Mistrzostwa Świata w piłce nożnej w 2010 roku?',
    firstOption: 'Anglia',
    secondOption: 'Francja',
    thirdOption: 'Hiszpania'
},

{
    question: 'Jedyny Polak w Formule 1 to:',
    firstOption: 'Robert Kubica',
    secondOption: 'Krzysztof Hołowczyc',
    thirdOption: 'Adam Małysz'
},

{
    question: 'Następca Adama Małysza to:',
    firstOption: 'Dawid Kubacki',
    secondOption: 'Kamil Stoch',
    thirdOption: 'Piotr Żyła'
},

{
    question: 'Jeden z najlepszych byłych koszykarzy to: ',
    firstOption: 'Marcin Skoczylas',
    secondOption: 'Michael Jordan',
    thirdOption: 'Marcin Gortat'
},

{
    question: 'Justyna Kowalczyk to słynna polska: ',
    firstOption: 'pływaczka',
    secondOption: 'piłkarka',
    thirdOption: 'narciarka'
},

{
    question: 'Jeden z najlepszych polskich atakujących siatkarzy: ',
    firstOption: 'Marcin Możdżonek',
    secondOption: 'Mateusz Bieniek',
    thirdOption: 'Bartosz Kurek'
},

{
    question: 'Jeden z najlepszych polskich atakujących siatkarzy: ',
    firstOption: 'Marcin Możdżonek',
    secondOption: 'Mateusz Bieniek',
    thirdOption: 'Bartosz Kurek'
},

{
    question: 'Rekordzista w biegu na 100m. : ',
    firstOption: 'Usain Bolt',
    secondOption: 'Bogdan Wenta',
    thirdOption: 'Jerzy Janowicz'
},

{
    question: 'Mike Tyson był: ',
    firstOption: 'skoczkiem',
    secondOption: 'bokserem',
    thirdOption: 'piłkarzem'
}
]

const welcomeSport = 'Witaj w świecie sportu! Mam nadzieję że uda Ci się rozwiązać wszystkie zagadki postawione przed Tobą. Quiz składa się z 10 pytań. Wyświetlą się trzy odpowiedzi. Tylko jedna jest poprawna. Powodzenia!';

const btnStartSportQuiz = document.querySelector('.sport .wrapSport .description .sportStart');

const sportQuizFn = () => {
    //create section sport quiz
    const sportQuizSection = document.createElement('section');
    sportQuizSection.className = 'sportQuiz';
    document.body.appendChild(sportQuizSection);

    //add div witch will welcome and include startQuiz button
    const divWelcome = document.createElement('div');
    divWelcome.className = 'welcome';
    sportQuizSection.appendChild(divWelcome);

    //create p with text to welcome on quiz

    const welcomeText = document.createElement('p');
    welcomeText.className = 'welcomeText';
    welcomeText.textContent = welcomeSport;
    divWelcome.appendChild(welcomeText);

    //create button to start quiz

    const btnStartSportQuiz = document.createElement('button');
    btnStartSportQuiz.className = 'startSportQuiz';
    btnStartSportQuiz.textContent = 'Start!';
    divWelcome.appendChild(btnStartSportQuiz);


    const quizFn = () => {

        //remove div Welcome
        while (sportQuizSection.firstChild) sportQuizSection.removeChild(sportQuizSection.firstChild)

        //function to remove and close window with sport quiz
        const closeBtn = document.createElement('i');
        closeBtn.className = 'fas fa-times';
        sportQuizSection.appendChild(closeBtn);
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(sportQuizSection);
        })

        //array to move wrap which content questions
        const divWrapsArray = [];
        let answerNumber = 1;
        //create divs with questions and anserws

        for (let i = 0; i < sportQuestions.length; i++) {

            //create div 
            const divWrap = document.createElement('div');
            divWrap.className = 'wrap';
            sportQuizSection.appendChild(divWrap);

            //create questions
            const questionP = document.createElement('p');
            questionP.className = 'question';
            questionP.textContent = sportQuestions[i].question;

            divWrap.appendChild(questionP);

            //create label with input - answers
            //first answer
            const labelAnswerFirst = document.createElement('label');
            const inputAnswerFirst = document.createElement('input');
            inputAnswerFirst.type = 'radio';
            inputAnswerFirst.name = 'answer' + answerNumber;

            labelAnswerFirst.textContent = sportQuestions[i].firstOption;
            labelAnswerFirst.appendChild(inputAnswerFirst);

            //second answer
            const labelAnswerSecond = document.createElement('label');
            const inputAnswerSecond = document.createElement('input');
            inputAnswerSecond.type = 'radio';
            inputAnswerSecond.name = 'answer' + answerNumber;

            labelAnswerSecond.textContent = sportQuestions[i].secondOption;
            labelAnswerSecond.appendChild(inputAnswerSecond);

            //third answer
            const labelAnswerThird = document.createElement('label');
            const inputAnswerThird = document.createElement('input');
            inputAnswerThird.type = 'radio';
            inputAnswerThird.name = 'answer' + answerNumber;

            labelAnswerThird.textContent = sportQuestions[i].thirdOption;
            labelAnswerThird.appendChild(inputAnswerThird);

            //add answer to div
            divWrap.appendChild(labelAnswerFirst);
            divWrap.appendChild(labelAnswerSecond);
            divWrap.appendChild(labelAnswerThird);

            // divWrap.style.left = 200 + '%';
            answerNumber++;
            divWrapsArray.push(divWrap);
        }


        const inputs = [...document.querySelectorAll('section.sportQuiz div.wrap label input')];

        inputs.forEach(input => {

            input.addEventListener('change', () => {

                inputs.forEach(inp => {
                    inp.parentElement.style.border = "2px solid black";
                })


                if (input.checked) {
                    inputs.forEach(inp => {
                        if (inp.checked) {
                            inp.parentElement.style.border = "2px solid green";
                        }
                    })
                }

            })
        })


        divWrapsArray[0].classList.add('active'); //first element attribute

        let questionNumber = 0;

        // create crosses to switch quenstions
        const crossLeft = document.createElement('i');
        crossLeft.className = 'fas fa-chevron-left';

        const crossRight = document.createElement('i');
        crossRight.className = 'fas fa-chevron-right';

        sportQuizSection.appendChild(crossLeft);
        sportQuizSection.appendChild(crossRight);

        //initial conditional for left cross

        if (questionNumber == 0) {
            crossLeft.style.pointerEvents = 'none';
        }




        //function to change question to right
        const moveRight = () => {
            divWrapsArray[questionNumber].classList.remove('active');
            questionNumber++;
            divWrapsArray[questionNumber].classList.add('active');

            if (questionNumber > 0) {
                crossLeft.style.pointerEvents = 'auto';
            }
            if (questionNumber == 9) {
                crossRight.style.pointerEvents = 'none';
            }

        }

        //function to change question to left

        const moveLeft = () => {
            divWrapsArray[questionNumber].classList.remove('active');
            questionNumber--;
            divWrapsArray[questionNumber].classList.add('active');

            if (questionNumber < 9) {
                crossRight.style.pointerEvents = 'auto';
            }

            if (questionNumber == 0) {
                crossLeft.style.pointerEvents = 'none';
            }
        }

        //---------------------------cross events --------------

        crossRight.addEventListener('click', moveRight);
        crossLeft.addEventListener('click', moveLeft);

        //create finish button

        let finishPoints = 0;

        const finishBtn = document.createElement('button');
        finishBtn.className = 'finish';
        finishBtn.textContent = 'Zakończ';





        //add finish to last div
        divWrapsArray[divWrapsArray.length - 1].appendChild(finishBtn);

        const finishFn = () => {
            for (let i = 0; i < divWrapsArray.length; i++) {
                const ansLabel = [...divWrapsArray[i].querySelectorAll('label')];
                const ans = [...divWrapsArray[i].querySelectorAll('label input')];

                switch (i) {
                    case 0:
                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Robert Lewandowski') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 1:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Hiszpania') {
                                finishPoints++;
                            }
                        }
                        break;

                    case 2:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Robert Kubica') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 3:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Kamil Stoch') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 4:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Michael Jordan') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 5:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'narciarka') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 6:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Bartosz Kurek') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 7:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Bartosz Kurek') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 8:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Usain Bolt') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 9:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'bokserem') {
                                finishPoints++;
                            }
                        }

                        break;

                }
            }

            while (sportQuizSection.firstChild) sportQuizSection.removeChild(sportQuizSection.firstChild);

            const result = document.createElement('div');
            result.className = 'result';

            const pResult = document.createElement('p');
            pResult.textContent = `Twój końcowy wynik to: ${finishPoints}. Gratulacje :)`;

            const buttonEnd = document.createElement('button');
            buttonEnd.className = 'endQuiz';
            buttonEnd.textContent = 'Zakończ';




            sportQuizSection.appendChild(result);
            result.appendChild(pResult);
            result.appendChild(buttonEnd);

            buttonEnd.addEventListener('click', () => {
                document.body.removeChild(sportQuizSection);
            })
        }



        finishBtn.addEventListener('click', finishFn);





    }

    btnStartSportQuiz.addEventListener('click', quizFn)

    //function to remove and close window with sport quiz
    const closeBtn = document.createElement('i');
    closeBtn.className = 'fas fa-times';
    sportQuizSection.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        document.body.removeChild(sportQuizSection);
    })
}

//start sport quiz

btnStartSportQuiz.addEventListener('click', sportQuizFn);

//--------------------------------Music quiz---------------------

const musicQuestions = [{
    question: 'Biały ciałem, czarny duszą to: ',
    firstOption: 'O.S.T.R.',
    secondOption: 'Eminem',
    thirdOption: 'Adi Nowak'
},

{
    question: 'Skład, w którym rapował magik to: ',
    firstOption: 'Paktofonika',
    secondOption: 'WWO',
    thirdOption: 'Flexxip'
},

{
    question: 'Zbigniew Wodecki grał na:',
    firstOption: 'perkusji',
    secondOption: 'harfie',
    thirdOption: 'trąbce'
},

{
    question: 'Jedna z najbardziej rozpoznawalnych piosenek Czesława Niemena to:',
    firstOption: 'Nie dokazuj',
    secondOption: 'Lubiła tańczyć',
    thirdOption: 'Dziwny jest ten świat'
},

{
    question: 'Piosenkę perfect Ed Sheeran wykoał wraz z: ',
    firstOption: 'Eminemem',
    secondOption: 'Andreą Bocellim',
    thirdOption: 'Arianą Grandę'
},

{
    question: 'Piosenka "No roots" jest wykonywana przez: ',
    firstOption: 'Alice Merton',
    secondOption: 'Bellie Elish',
    thirdOption: 'Perfect'
},

{
    question: 'Saksofon jest instrumentem: ',
    firstOption: 'perkusyjnym',
    secondOption: 'dętym',
    thirdOption: 'smyczkowym'
},

{
    question: 'Najbardziej znany producent skrzypiec to: ',
    firstOption: 'Stradivarius',
    secondOption: 'Yamaha',
    thirdOption: 'Sony'
},

{
    question: 'Zespół, w którym spiewa Kazik to: ',
    firstOption: 'Rotary',
    secondOption: 'Budka Suflera',
    thirdOption: 'Kult'
},

{
    question: 'Najbardziej znanym polskim wykonawcą disco polo jest: ',
    firstOption: 'Sylwia Grzeszczak',
    secondOption: 'Power Play',
    thirdOption: 'Zenek Martyniuk'
}
]

const btnStartMusicQuiz = document.querySelector('.music .wrapMusic .description .musicStart');

const welcomeMusic = 'Witaj w świecie muzyki! Znasz się trochę na muzyce? Chcesz sprawdzić ile daje Ci słuchanie muzyki? Zobacz ile punktów zdobędziesz! Quiz składa się z 10 pytań. Wyświetlą się trzy odpowiedzi. Tylko jedna jest poprawna. Powodzenia!';

const musicQuizFn = () => {
    //create section music quiz
    const musicQuizSection = document.createElement('section');
    musicQuizSection.className = 'musicQuiz';
    document.body.appendChild(musicQuizSection);

    //add div witch will welcome and include startQuiz button
    const divWelcome = document.createElement('div');
    divWelcome.className = 'welcome';
    musicQuizSection.appendChild(divWelcome);

    //create p with text to welcome on quiz

    const welcomeText = document.createElement('p');
    welcomeText.className = 'welcomeText';
    welcomeText.textContent = welcomeMusic;
    divWelcome.appendChild(welcomeText);

    //create button to start quiz

    const btnStartMusicQuiz = document.createElement('button');
    btnStartMusicQuiz.className = 'startMusicQuiz';
    btnStartMusicQuiz.textContent = 'Start!';
    divWelcome.appendChild(btnStartMusicQuiz);


    const quizFn = () => {

        //remove div Welcome
        while (musicQuizSection.firstChild) musicQuizSection.removeChild(musicQuizSection.firstChild)

        //function to remove and close window with music quiz

        const closeBtn = document.createElement('i');
        closeBtn.className = 'fas fa-times';
        musicQuizSection.appendChild(closeBtn);
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(musicQuizSection);
        })

        //array to move wrap which content questions
        const divWrapsArray = [];
        let answerNumber = 1;
        //create divs with questions and anserws

        for (let i = 0; i < musicQuestions.length; i++) {

            //create div 
            const divWrap = document.createElement('div');
            divWrap.className = 'wrap';
            musicQuizSection.appendChild(divWrap);

            //create questions
            const questionP = document.createElement('p');
            questionP.className = 'question';
            questionP.textContent = musicQuestions[i].question;

            divWrap.appendChild(questionP);

            //create label with input - answers
            //first answer
            const labelAnswerFirst = document.createElement('label');
            const inputAnswerFirst = document.createElement('input');
            inputAnswerFirst.type = 'radio';
            inputAnswerFirst.name = 'answer' + answerNumber;

            labelAnswerFirst.textContent = musicQuestions[i].firstOption;
            labelAnswerFirst.appendChild(inputAnswerFirst);

            //second answer
            const labelAnswerSecond = document.createElement('label');
            const inputAnswerSecond = document.createElement('input');
            inputAnswerSecond.type = 'radio';
            inputAnswerSecond.name = 'answer' + answerNumber;

            labelAnswerSecond.textContent = musicQuestions[i].secondOption;
            labelAnswerSecond.appendChild(inputAnswerSecond);

            //third answer
            const labelAnswerThird = document.createElement('label');
            const inputAnswerThird = document.createElement('input');
            inputAnswerThird.type = 'radio';
            inputAnswerThird.name = 'answer' + answerNumber;

            labelAnswerThird.textContent = musicQuestions[i].thirdOption;
            labelAnswerThird.appendChild(inputAnswerThird);

            //add answer to div
            divWrap.appendChild(labelAnswerFirst);
            divWrap.appendChild(labelAnswerSecond);
            divWrap.appendChild(labelAnswerThird);

            answerNumber++;
            divWrapsArray.push(divWrap);
        }

        const inputs = [...document.querySelectorAll('section.musicQuiz div.wrap label input')];

        inputs.forEach(input => {

            input.addEventListener('change', () => {

                inputs.forEach(inp => {
                    inp.parentElement.style.border = "2px solid black";
                })


                if (input.checked) {
                    inputs.forEach(inp => {
                        if (inp.checked) {
                            inp.parentElement.style.border = "2px solid green";
                        }
                    })
                }

            })
        })

        divWrapsArray[0].classList.add('active'); //first element attribute

        let questionNumber = 0;

        // create crosses to switch quenstions
        const crossLeft = document.createElement('i');
        crossLeft.className = 'fas fa-chevron-left';

        const crossRight = document.createElement('i');
        crossRight.className = 'fas fa-chevron-right';

        musicQuizSection.appendChild(crossLeft);
        musicQuizSection.appendChild(crossRight);

        //initial conditional for left cross

        if (questionNumber == 0) {
            crossLeft.style.pointerEvents = 'none';
        }


        //function to change question to right
        const moveRight = () => {
            divWrapsArray[questionNumber].classList.remove('active');
            questionNumber++;
            divWrapsArray[questionNumber].classList.add('active');

            if (questionNumber > 0) {
                crossLeft.style.pointerEvents = 'auto';
            }
            if (questionNumber == 9) {
                crossRight.style.pointerEvents = 'none';
            }

        }

        //function to change question to left
        const moveLeft = () => {
            divWrapsArray[questionNumber].classList.remove('active');
            questionNumber--;
            divWrapsArray[questionNumber].classList.add('active');


            if (questionNumber < 9) {
                crossRight.style.pointerEvents = 'auto';
            }

            if (questionNumber == 0) {
                crossLeft.style.pointerEvents = 'none';
            }
        }

        //---------------------------cross events --------------

        crossRight.addEventListener('click', moveRight);
        crossLeft.addEventListener('click', moveLeft);

        //create finish button

        let finishPoints = 0;

        const finishBtn = document.createElement('button');
        finishBtn.className = 'finish';
        finishBtn.textContent = 'Zakończ';




        //add finish to last div
        divWrapsArray[divWrapsArray.length - 1].appendChild(finishBtn);

        const finishFn = () => {
            for (let i = 0; i < divWrapsArray.length; i++) {
                const ansLabel = [...divWrapsArray[i].querySelectorAll('label')];
                const ans = [...divWrapsArray[i].querySelectorAll('label input')];

                switch (i) {
                    case 0:
                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Eminem') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 1:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Paktofonika') {
                                finishPoints++;
                            }
                        }
                        break;

                    case 2:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'trąbce') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 3:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Dziwny jest ten świat') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 4:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Andreą Bocellim') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 5:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Alice Merton') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 6:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'dętym') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 7:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Stradivarius') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 8:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Kult') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 9:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Zenek Martyniuk') {
                                finishPoints++;
                            }
                        }

                        break;

                }
            }

            while (musicQuizSection.firstChild) musicQuizSection.removeChild(musicQuizSection.firstChild);

            const result = document.createElement('div');
            result.className = 'result';

            const pResult = document.createElement('p');
            pResult.textContent = `Twój końcowy wynik to: ${finishPoints}. Gratulacje :)`;

            const buttonEnd = document.createElement('button');
            buttonEnd.className = 'endQuiz';
            buttonEnd.textContent = 'Zakończ';




            musicQuizSection.appendChild(result);
            result.appendChild(pResult);
            result.appendChild(buttonEnd);

            buttonEnd.addEventListener('click', () => {
                document.body.removeChild(musicQuizSection);
            })
        }

        finishBtn.addEventListener('click', finishFn);

    }

    btnStartMusicQuiz.addEventListener('click', quizFn)

    //function to remove and close window with music quiz
    const closeBtn = document.createElement('i');
    closeBtn.className = 'fas fa-times';
    musicQuizSection.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        document.body.removeChild(musicQuizSection);
    })
}

btnStartMusicQuiz.addEventListener('click', musicQuizFn);


//-----------------HISTORY QUIZ--------------------------

const historyQuestions = [{
    question: 'Pierwszy król Polski to: ',
    firstOption: 'Kazimierz Wielki',
    secondOption: 'Bolesław Chrobry',
    thirdOption: 'Andrzej Duda'
},

{
    question: 'Pierwsza stolica Polski to: ',
    firstOption: 'Gniezno',
    secondOption: 'Łomża',
    thirdOption: 'Warszawa'
},

{
    question: 'W którym roku odbyła się bitwa pod Grunwaldem:',
    firstOption: '1410',
    secondOption: '1521',
    thirdOption: '1411'
},

{
    question: 'Pogromca Turków spod Wiednia to:',
    firstOption: 'Adam Małysz',
    secondOption: 'Kazimierz Jagiellończyk',
    thirdOption: 'Jan Sobieski'
},

{
    question: 'Chrzest Polski odbył się w roku: ',
    firstOption: '969',
    secondOption: '1210',
    thirdOption: '966'
},

{
    question: 'Zastał Polskę drewnianą, zostawił murowaną: ',
    firstOption: 'Mieszko I',
    secondOption: 'Kazimierz Wielki',
    thirdOption: 'Stanisław August'
},

{
    question: 'Utworzył Księstwo Warszawskie: ',
    firstOption: 'Stanisław Żółkiewski',
    secondOption: 'Napoleon Bonaparte',
    thirdOption: 'Józef Piłsudski'
},

{
    question: 'Zaborcy Polski to Prusy, Rosja i: ',
    firstOption: 'Austria',
    secondOption: 'Francja',
    thirdOption: 'Turcja'
},

{
    question: 'Bitwa w czasie II wojny światowej, o której śpiewa zespół Sabaton odbyła się pod: ',
    firstOption: 'Wizną',
    secondOption: 'Ostrołęką',
    thirdOption: 'Lublinem'
},

{
    question: 'Polska odzyskała niepodległość w roku: ',
    firstOption: '1900',
    secondOption: '1918',
    thirdOption: '1920'
}
]

const btnStartHistoryQuiz = document.querySelector('.history .wrapHistory .description .historyStart');

const welcomeHistory = 'Pamiętasz naszą historię? Chcesz wiedzieć ile pamiętasz ze szkoły? Sprawdź ile pamiętasz z podstawowej wiedzy o Polsce! Zobacz ile punktów zdobędziesz! Quiz składa się z 10 pytań. Wyświetlą się trzy odpowiedzi. Tylko jedna jest poprawna. Powodzenia!';


const historyQuizFn = () => {
    //create section history quiz
    const historyQuizSection = document.createElement('section');
    historyQuizSection.className = 'historyQuiz';
    document.body.appendChild(historyQuizSection);

    //add div witch will welcome and include startQuiz button
    const divWelcome = document.createElement('div');
    divWelcome.className = 'welcome';
    historyQuizSection.appendChild(divWelcome);

    //create p with text to welcome on quiz
    const welcomeText = document.createElement('p');
    welcomeText.className = 'welcomeText';
    welcomeText.textContent = welcomeHistory;
    divWelcome.appendChild(welcomeText);

    //create button to start quiz
    const btnStartHistoryQuiz = document.createElement('button');
    btnStartHistoryQuiz.className = 'startHistoryQuiz';
    btnStartHistoryQuiz.textContent = 'Start!';
    divWelcome.appendChild(btnStartHistoryQuiz);


    const quizFn = () => {

        //remove div Welcome
        while (historyQuizSection.firstChild) historyQuizSection.removeChild(historyQuizSection.firstChild)

        //function to remove and close window with history quiz

        const closeBtn = document.createElement('i');
        closeBtn.className = 'fas fa-times';
        historyQuizSection.appendChild(closeBtn);
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(historyQuizSection);
        })

        //array to move wrap which content questions
        const divWrapsArray = [];
        let answerNumber = 1;
        //create divs with questions and anserws

        for (let i = 0; i < historyQuestions.length; i++) {

            //create div 
            const divWrap = document.createElement('div');
            divWrap.className = 'wrap';
            historyQuizSection.appendChild(divWrap);

            //create questions
            const questionP = document.createElement('p');
            questionP.className = 'question';
            questionP.textContent = historyQuestions[i].question;

            divWrap.appendChild(questionP);

            //create label with input - answers
            //first answer
            const labelAnswerFirst = document.createElement('label');
            const inputAnswerFirst = document.createElement('input');
            inputAnswerFirst.type = 'radio';
            inputAnswerFirst.name = 'answer' + answerNumber;

            labelAnswerFirst.textContent = historyQuestions[i].firstOption;
            labelAnswerFirst.appendChild(inputAnswerFirst);

            //second answer
            const labelAnswerSecond = document.createElement('label');
            const inputAnswerSecond = document.createElement('input');
            inputAnswerSecond.type = 'radio';
            inputAnswerSecond.name = 'answer' + answerNumber;

            labelAnswerSecond.textContent = historyQuestions[i].secondOption;
            labelAnswerSecond.appendChild(inputAnswerSecond);

            //third answer
            const labelAnswerThird = document.createElement('label');
            const inputAnswerThird = document.createElement('input');
            inputAnswerThird.type = 'radio';
            inputAnswerThird.name = 'answer' + answerNumber;

            labelAnswerThird.textContent = historyQuestions[i].thirdOption;
            labelAnswerThird.appendChild(inputAnswerThird);

            //add answer to div
            divWrap.appendChild(labelAnswerFirst);
            divWrap.appendChild(labelAnswerSecond);
            divWrap.appendChild(labelAnswerThird);

            answerNumber++;
            divWrapsArray.push(divWrap);
        }

        const inputs = [...document.querySelectorAll('section.historyQuiz div.wrap label input')];

        inputs.forEach(input => {

            input.addEventListener('change', () => {

                inputs.forEach(inp => {
                    inp.parentElement.style.border = "2px solid black";
                })


                if (input.checked) {
                    inputs.forEach(inp => {
                        if (inp.checked) {
                            inp.parentElement.style.border = "2px solid green";
                        }
                    })
                }

            })
        })

        divWrapsArray[0].classList.add('active'); //first element attribute

        let questionNumber = 0;

        // create crosses to switch quenstions
        const crossLeft = document.createElement('i');
        crossLeft.className = 'fas fa-chevron-left';

        const crossRight = document.createElement('i');
        crossRight.className = 'fas fa-chevron-right';

        historyQuizSection.appendChild(crossLeft);
        historyQuizSection.appendChild(crossRight);

        //initial conditional for left cross

        if (questionNumber == 0) {
            crossLeft.style.pointerEvents = 'none';
        }


        //function to change question to right
        const moveRight = () => {
            divWrapsArray[questionNumber].classList.remove('active');
            questionNumber++;
            divWrapsArray[questionNumber].classList.add('active');

            if (questionNumber > 0) {
                crossLeft.style.pointerEvents = 'auto';
            }
            if (questionNumber == 9) {
                crossRight.style.pointerEvents = 'none';
            }

        }

        //function to change question to left

        const moveLeft = () => {
            divWrapsArray[questionNumber].classList.remove('active');
            questionNumber--;
            divWrapsArray[questionNumber].classList.add('active');

            if (questionNumber < 9) {
                crossRight.style.pointerEvents = 'auto';
            }

            if (questionNumber == 0) {
                crossLeft.style.pointerEvents = 'none';
            }
        }

        //---------------------------cross events --------------

        crossRight.addEventListener('click', moveRight);
        crossLeft.addEventListener('click', moveLeft);

        //create finish button

        let finishPoints = 0;

        const finishBtn = document.createElement('button');
        finishBtn.className = 'finish';
        finishBtn.textContent = 'Zakończ';




        //add finish to last div
        divWrapsArray[divWrapsArray.length - 1].appendChild(finishBtn);

        const finishFn = () => {
            for (let i = 0; i < divWrapsArray.length; i++) {
                const ansLabel = [...divWrapsArray[i].querySelectorAll('label')];
                const ans = [...divWrapsArray[i].querySelectorAll('label input')];

                switch (i) {
                    case 0:
                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Bolesław Chrobry') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 1:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Gniezno') {
                                finishPoints++;
                            }
                        }
                        break;

                    case 2:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == '1410') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 3:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Jan Sobieski') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 4:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == '966') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 5:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Kazimierz Wielki') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 6:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Napoleon Bonaparte') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 7:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Austria') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 8:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == 'Wizną') {
                                finishPoints++;
                            }
                        }

                        break;

                    case 9:

                        for (let i = 0; i < ans.length; i++) {
                            if (ans[i].checked && ansLabel[i].textContent == '1918') {
                                finishPoints++;
                            }
                        }

                        break;

                }
            }

            while (historyQuizSection.firstChild) historyQuizSection.removeChild(historyQuizSection.firstChild);

            const result = document.createElement('div');
            result.className = 'result';

            const pResult = document.createElement('p');
            pResult.textContent = `Twój końcowy wynik to: ${finishPoints}. Gratulacje :)`;

            const buttonEnd = document.createElement('button');
            buttonEnd.className = 'endQuiz';
            buttonEnd.textContent = 'Zakończ';




            historyQuizSection.appendChild(result);
            result.appendChild(pResult);
            result.appendChild(buttonEnd);

            buttonEnd.addEventListener('click', () => {
                document.body.removeChild(historyQuizSection);
            })
        }

        finishBtn.addEventListener('click', finishFn);

    }

    btnStartHistoryQuiz.addEventListener('click', quizFn)

    //function to remove and close window with music quiz
    const closeBtn = document.createElement('i');
    closeBtn.className = 'fas fa-times';
    historyQuizSection.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        document.body.removeChild(historyQuizSection);
    })
}

btnStartHistoryQuiz.addEventListener('click', historyQuizFn);