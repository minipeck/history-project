const testQuestions = [
    {
        question: "Какой вечер тебе ближе?",
        answers: [
            { text: "Танцы, яркая одежда и пластинка с джазом", value: "stilyagi" },
            { text: "Закрытая компания, модные вещи и разговоры не для всех", value: "majors" },
            { text: "Шумный квартирник или подвальный концерт", value: "punk" },
            { text: "Гитара, разговоры о свободе и длинная прогулка", value: "hippie" },
            { text: "Дискотека, синтезаторы и необычный образ", value: "newwave" },
            { text: "Ночная дорога, мотоцикл и рок", value: "bikers" }
        ]
    },
    {
        question: "Что важнее в одежде?",
        answers: [
            { text: "Цвет, силуэт и демонстративная элегантность", value: "stilyagi" },
            { text: "Статус, качество и доступ к редким вещам", value: "majors" },
            { text: "Рваность, провокация и отказ от правил", value: "punk" },
            { text: "Свободные вещи, фенечки и естественность", value: "hippie" },
            { text: "Эклектика, макияж, постпанк и новая романтика", value: "newwave" },
            { text: "Косуха, джинса, нашивки и дорожная практичность", value: "bikers" }
        ]
    },
    {
        question: "Какой тип свободы тебе ближе?",
        answers: [
            { text: "Быть ярче серой нормы", value: "stilyagi" },
            { text: "Жить с привилегией доступа туда, куда другим нельзя", value: "majors" },
            { text: "Кричать громко и ломать шаблоны", value: "punk" },
            { text: "Жить мирно, общинно и вопреки контролю", value: "hippie" },
            { text: "Выбирать независимый вкус и новый звук", value: "newwave" },
            { text: "Ехать куда хочешь и отвечать только перед дорогой", value: "bikers" }
        ]
    },
    {
        question: "Какая музыка звучит в твоей комнате?",
        answers: [
            { text: "Рок-н-ролл, буги-вуги, джаз", value: "stilyagi" },
            { text: "То, что трудно достать и приятно поставить для своих", value: "majors" },
            { text: "Панк, хардкор, грязный звук", value: "punk" },
            { text: "Психоделический рок и песни под гитару", value: "hippie" },
            { text: "New wave, постпанк, электроника", value: "newwave" },
            { text: "Рок, тяжелый звук и музыка трассы", value: "bikers" }
        ]
    },
    {
        question: "Твой главный талант?",
        answers: [
            { text: "Производить впечатление", value: "stilyagi" },
            { text: "Оказываться в правильной компании", value: "majors" },
            { text: "Говорить неприятную правду резко", value: "punk" },
            { text: "Собирать людей вокруг идеи свободы", value: "hippie" },
            { text: "Чувствовать новую эстетику раньше других", value: "newwave" },
            { text: "Держать курс и не бояться скорости", value: "bikers" }
        ]
    },
    {
        question: "Где тебя искать?",
        answers: [
            { text: "На танцах и городском променаде", value: "stilyagi" },
            { text: "В столичной компании с особым входом", value: "majors" },
            { text: "В андеграундной музыкальной тусовке", value: "punk" },
            { text: "На вписке, квартирнике или в пути", value: "hippie" },
            { text: "В клубе, на дискотеке или рядом с новой сценой", value: "newwave" },
            { text: "В гараже, на сборе или ночном пробеге", value: "bikers" }
        ]
    }
];

const results = {
    stilyagi: {
        title: "Твой тип: Стиляга",
        description: "Тебе близки яркость, ирония, музыка и право выглядеть не как все.",
        link: "pages/stilyagi.html"
    },
    majors: {
        title: "Твой тип: Мажор",
        description: "Тебе ближе статус, закрытые компании, редкие вещи и жизнь с ощущением особого доступа.",
        link: "pages/majors.html"
    },
    punk: {
        title: "Твой тип: Панк",
        description: "Тебе важны эпатаж, громкое самовыражение и отказ от удобных шаблонов.",
        link: "pages/punk.html"
    },
    hippie: {
        title: "Твой тип: Хиппи",
        description: "Твой ориентир - свобода, пацифизм, общение и мягкий уход от контроля.",
        link: "pages/hippie.html"
    },
    newwave: {
        title: "Твой тип: Ньювейвер",
        description: "Ты выбираешь эстетический эксперимент, музыку и независимый городской вкус.",
        link: "pages/newwave.html"
    },
    bikers: {
        title: "Твой тип: Байкер",
        description: "Тебе близки дорога, скорость, братство и свобода как образ жизни.",
        link: "pages/bikers.html"
    }
};

function createTest() {
    const testForm = document.getElementById("test-form");
    if (!testForm) return;

    let html = "";
    testQuestions.forEach((question, index) => {
        html += `<fieldset class="question-block">
            <legend class="question-number">${index + 1}</legend>
            <p class="question-title">${question.question}</p>`;

        question.answers.forEach((answer, answerIndex) => {
            const id = `q-${index}-${answerIndex}`;
            html += `<label class="answer-option" for="${id}">
                <input type="radio" id="${id}" name="q-${index}" value="${answer.value}">
                <span>${answer.text}</span>
            </label>`;
        });

        html += `</fieldset>`;
    });

    html += `<button class="submit-btn" type="button" id="submit-test">Получить результат</button>`;
    testForm.innerHTML = html;
    document.getElementById("submit-test").addEventListener("click", submitTest);
}

function submitTest() {
    const scores = Object.fromEntries(Object.keys(results).map((key) => [key, 0]));

    for (let i = 0; i < testQuestions.length; i += 1) {
        const checked = document.querySelector(`input[name="q-${i}"]:checked`);
        if (!checked) {
            alert("Ответь на все вопросы, чтобы газета вынесла вердикт.");
            return;
        }
        scores[checked.value] += 1;
    }

    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    showResult(winner);
}

function showResult(key) {
    const result = results[key];
    document.getElementById("test-form").innerHTML = `<section class="result-section">
        <h2 class="section-title">${result.title}</h2>
        <p>${result.description}</p>
        <div class="result-actions">
            <a class="result-btn" href="${result.link}">Открыть вкладку</a>
            <button class="result-btn" type="button" onclick="location.reload()">Пройти еще раз</button>
            <a class="result-btn" href="index.html">На первую полосу</a>
        </div>
    </section>`;
}

document.addEventListener("DOMContentLoaded", createTest);