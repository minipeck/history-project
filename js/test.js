const testQuestions = [
    {
        question: "РљР°РєРѕР№ РІРµС‡РµСЂ С‚РµР±Рµ Р±Р»РёР¶Рµ?",
        answers: [
            { text: "РўР°РЅС†С‹, СЏСЂРєР°СЏ РѕРґРµР¶РґР° Рё РїР»Р°СЃС‚РёРЅРєР° СЃ РґР¶Р°Р·РѕРј", value: "stilyagi" },
            { text: "Р—Р°РєСЂС‹С‚Р°СЏ РєРѕРјРїР°РЅРёСЏ, РјРѕРґРЅС‹Рµ РІРµС‰Рё Рё СЂР°Р·РіРѕРІРѕСЂС‹ РЅРµ РґР»СЏ РІСЃРµС…", value: "majors" },
            { text: "РЁСѓРјРЅС‹Р№ РєРІР°СЂС‚РёСЂРЅРёРє РёР»Рё РїРѕРґРІР°Р»СЊРЅС‹Р№ РєРѕРЅС†РµСЂС‚", value: "punk" },
            { text: "Р“РёС‚Р°СЂР°, СЂР°Р·РіРѕРІРѕСЂС‹ Рѕ СЃРІРѕР±РѕРґРµ Рё РґР»РёРЅРЅР°СЏ РїСЂРѕРіСѓР»РєР°", value: "hippie" },
            { text: "Р”РёСЃРєРѕС‚РµРєР°, СЃРёРЅС‚РµР·Р°С‚РѕСЂС‹ Рё РЅРµРѕР±С‹С‡РЅС‹Р№ РѕР±СЂР°Р·", value: "newwave" },
            { text: "РќРѕС‡РЅР°СЏ РґРѕСЂРѕРіР°, РјРѕС‚РѕС†РёРєР» Рё СЂРѕРє", value: "bikers" }
        ]
    },
    {
        question: "Р§С‚Рѕ РІР°Р¶РЅРµРµ РІ РѕРґРµР¶РґРµ?",
        answers: [
            { text: "Р¦РІРµС‚, СЃРёР»СѓСЌС‚ Рё РґРµРјРѕРЅСЃС‚СЂР°С‚РёРІРЅР°СЏ СЌР»РµРіР°РЅС‚РЅРѕСЃС‚СЊ", value: "stilyagi" },
            { text: "РЎС‚Р°С‚СѓСЃ, РєР°С‡РµСЃС‚РІРѕ Рё РґРѕСЃС‚СѓРї Рє СЂРµРґРєРёРј РІРµС‰Р°Рј", value: "majors" },
            { text: "Р РІР°РЅРѕСЃС‚СЊ, РїСЂРѕРІРѕРєР°С†РёСЏ Рё РѕС‚РєР°Р· РѕС‚ РїСЂР°РІРёР»", value: "punk" },
            { text: "РЎРІРѕР±РѕРґРЅС‹Рµ РІРµС‰Рё, С„РµРЅРµС‡РєРё Рё РµСЃС‚РµСЃС‚РІРµРЅРЅРѕСЃС‚СЊ", value: "hippie" },
            { text: "Р­РєР»РµРєС‚РёРєР°, РјР°РєРёСЏР¶, РїРѕСЃС‚РїР°РЅРє Рё РЅРѕРІР°СЏ СЂРѕРјР°РЅС‚РёРєР°", value: "newwave" },
            { text: "РљРѕСЃСѓС…Р°, РґР¶РёРЅСЃР°, РЅР°С€РёРІРєРё Рё РґРѕСЂРѕР¶РЅР°СЏ РїСЂР°РєС‚РёС‡РЅРѕСЃС‚СЊ", value: "bikers" }
        ]
    },
    {
        question: "РљР°РєРѕР№ С‚РёРї СЃРІРѕР±РѕРґС‹ С‚РµР±Рµ Р±Р»РёР¶Рµ?",
        answers: [
            { text: "Р‘С‹С‚СЊ СЏСЂС‡Рµ СЃРµСЂРѕР№ РЅРѕСЂРјС‹", value: "stilyagi" },
            { text: "Р–РёС‚СЊ СЃ РїСЂРёРІРёР»РµРіРёРµР№ РґРѕСЃС‚СѓРїР° С‚СѓРґР°, РєСѓРґР° РґСЂСѓРіРёРј РЅРµР»СЊР·СЏ", value: "majors" },
            { text: "РљСЂРёС‡Р°С‚СЊ РіСЂРѕРјРєРѕ Рё Р»РѕРјР°С‚СЊ С€Р°Р±Р»РѕРЅС‹", value: "punk" },
            { text: "Р–РёС‚СЊ РјРёСЂРЅРѕ, РѕР±С‰РёРЅРЅРѕ Рё РІРѕРїСЂРµРєРё РєРѕРЅС‚СЂРѕР»СЋ", value: "hippie" },
            { text: "Р’С‹Р±РёСЂР°С‚СЊ РЅРµР·Р°РІРёСЃРёРјС‹Р№ РІРєСѓСЃ Рё РЅРѕРІС‹Р№ Р·РІСѓРє", value: "newwave" },
            { text: "Р•С…Р°С‚СЊ РєСѓРґР° С…РѕС‡РµС€СЊ Рё РѕС‚РІРµС‡Р°С‚СЊ С‚РѕР»СЊРєРѕ РїРµСЂРµРґ РґРѕСЂРѕРіРѕР№", value: "bikers" }
        ]
    },
    {
        question: "РљР°РєР°СЏ РјСѓР·С‹РєР° Р·РІСѓС‡РёС‚ РІ С‚РІРѕРµР№ РєРѕРјРЅР°С‚Рµ?",
        answers: [
            { text: "Р РѕРє-РЅ-СЂРѕР»Р», Р±СѓРіРё-РІСѓРіРё, РґР¶Р°Р·", value: "stilyagi" },
            { text: "РўРѕ, С‡С‚Рѕ С‚СЂСѓРґРЅРѕ РґРѕСЃС‚Р°С‚СЊ Рё РїСЂРёСЏС‚РЅРѕ РїРѕСЃС‚Р°РІРёС‚СЊ РґР»СЏ СЃРІРѕРёС…", value: "majors" },
            { text: "РџР°РЅРє, С…Р°СЂРґРєРѕСЂ, РіСЂСЏР·РЅС‹Р№ Р·РІСѓРє", value: "punk" },
            { text: "РџСЃРёС…РѕРґРµР»РёС‡РµСЃРєРёР№ СЂРѕРє Рё РїРµСЃРЅРё РїРѕРґ РіРёС‚Р°СЂСѓ", value: "hippie" },
            { text: "New wave, РїРѕСЃС‚РїР°РЅРє, СЌР»РµРєС‚СЂРѕРЅРёРєР°", value: "newwave" },
            { text: "Р РѕРє, С‚СЏР¶РµР»С‹Р№ Р·РІСѓРє Рё РјСѓР·С‹РєР° С‚СЂР°СЃСЃС‹", value: "bikers" }
        ]
    },
    {
        question: "РўРІРѕР№ РіР»Р°РІРЅС‹Р№ С‚Р°Р»Р°РЅС‚?",
        answers: [
            { text: "РџСЂРѕРёР·РІРѕРґРёС‚СЊ РІРїРµС‡Р°С‚Р»РµРЅРёРµ", value: "stilyagi" },
            { text: "РћРєР°Р·С‹РІР°С‚СЊСЃСЏ РІ РїСЂР°РІРёР»СЊРЅРѕР№ РєРѕРјРїР°РЅРёРё", value: "majors" },
            { text: "Р“РѕРІРѕСЂРёС‚СЊ РЅРµРїСЂРёСЏС‚РЅСѓСЋ РїСЂР°РІРґСѓ СЂРµР·РєРѕ", value: "punk" },
            { text: "РЎРѕР±РёСЂР°С‚СЊ Р»СЋРґРµР№ РІРѕРєСЂСѓРі РёРґРµРё СЃРІРѕР±РѕРґС‹", value: "hippie" },
            { text: "Р§СѓРІСЃС‚РІРѕРІР°С‚СЊ РЅРѕРІСѓСЋ СЌСЃС‚РµС‚РёРєСѓ СЂР°РЅСЊС€Рµ РґСЂСѓРіРёС…", value: "newwave" },
            { text: "Р”РµСЂР¶Р°С‚СЊ РєСѓСЂСЃ Рё РЅРµ Р±РѕСЏС‚СЊСЃСЏ СЃРєРѕСЂРѕСЃС‚Рё", value: "bikers" }
        ]
    },
    {
        question: "Р“РґРµ С‚РµР±СЏ РёСЃРєР°С‚СЊ?",
        answers: [
            { text: "РќР° С‚Р°РЅС†Р°С… Рё РіРѕСЂРѕРґСЃРєРѕРј РїСЂРѕРјРµРЅР°РґРµ", value: "stilyagi" },
            { text: "Р’ СЃС‚РѕР»РёС‡РЅРѕР№ РєРѕРјРїР°РЅРёРё СЃ РѕСЃРѕР±С‹Рј РІС…РѕРґРѕРј", value: "majors" },
            { text: "Р’ Р°РЅРґРµРіСЂР°СѓРЅРґРЅРѕР№ РјСѓР·С‹РєР°Р»СЊРЅРѕР№ С‚СѓСЃРѕРІРєРµ", value: "punk" },
            { text: "РќР° РІРїРёСЃРєРµ, РєРІР°СЂС‚РёСЂРЅРёРєРµ РёР»Рё РІ РїСѓС‚Рё", value: "hippie" },
            { text: "Р’ РєР»СѓР±Рµ, РЅР° РґРёСЃРєРѕС‚РµРєРµ РёР»Рё СЂСЏРґРѕРј СЃ РЅРѕРІРѕР№ СЃС†РµРЅРѕР№", value: "newwave" },
            { text: "Р’ РіР°СЂР°Р¶Рµ, РЅР° СЃР±РѕСЂРµ РёР»Рё РЅРѕС‡РЅРѕРј РїСЂРѕР±РµРіРµ", value: "bikers" }
        ]
    }
];

const results = {
    stilyagi: {
        title: "РўРІРѕР№ С‚РёРї: РЎС‚РёР»СЏРіР°",
        description: "РўРµР±Рµ Р±Р»РёР·РєРё СЏСЂРєРѕСЃС‚СЊ, РёСЂРѕРЅРёСЏ, РјСѓР·С‹РєР° Рё РїСЂР°РІРѕ РІС‹РіР»СЏРґРµС‚СЊ РЅРµ РєР°Рє РІСЃРµ.",
        link: "pages/stilyagi.html"
    },
    majors: {
        title: "РўРІРѕР№ С‚РёРї: РњР°Р¶РѕСЂ",
        description: "РўРµР±Рµ Р±Р»РёР¶Рµ СЃС‚Р°С‚СѓСЃ, Р·Р°РєСЂС‹С‚С‹Рµ РєРѕРјРїР°РЅРёРё, СЂРµРґРєРёРµ РІРµС‰Рё Рё Р¶РёР·РЅСЊ СЃ РѕС‰СѓС‰РµРЅРёРµРј РѕСЃРѕР±РѕРіРѕ РґРѕСЃС‚СѓРїР°.",
        link: "pages/majors.html"
    },
    punk: {
        title: "РўРІРѕР№ С‚РёРї: РџР°РЅРє",
        description: "РўРµР±Рµ РІР°Р¶РЅС‹ СЌРїР°С‚Р°Р¶, РіСЂРѕРјРєРѕРµ СЃР°РјРѕРІС‹СЂР°Р¶РµРЅРёРµ Рё РѕС‚РєР°Р· РѕС‚ СѓРґРѕР±РЅС‹С… С€Р°Р±Р»РѕРЅРѕРІ.",
        link: "pages/punk.html"
    },
    hippie: {
        title: "РўРІРѕР№ С‚РёРї: РҐРёРїРїРё",
        description: "РўРІРѕР№ РѕСЂРёРµРЅС‚РёСЂ - СЃРІРѕР±РѕРґР°, РїР°С†РёС„РёР·Рј, РѕР±С‰РµРЅРёРµ Рё РјСЏРіРєРёР№ СѓС…РѕРґ РѕС‚ РєРѕРЅС‚СЂРѕР»СЏ.",
        link: "pages/hippie.html"
    },
    newwave: {
        title: "РўРІРѕР№ С‚РёРї: РќСЊСЋРІРµР№РІРµСЂ",
        description: "РўС‹ РІС‹Р±РёСЂР°РµС€СЊ СЌСЃС‚РµС‚РёС‡РµСЃРєРёР№ СЌРєСЃРїРµСЂРёРјРµРЅС‚, РјСѓР·С‹РєСѓ Рё РЅРµР·Р°РІРёСЃРёРјС‹Р№ РіРѕСЂРѕРґСЃРєРѕР№ РІРєСѓСЃ.",
        link: "pages/newwave.html"
    },
    bikers: {
        title: "РўРІРѕР№ С‚РёРї: Р‘Р°Р№РєРµСЂ",
        description: "РўРµР±Рµ Р±Р»РёР·РєРё РґРѕСЂРѕРіР°, СЃРєРѕСЂРѕСЃС‚СЊ, Р±СЂР°С‚СЃС‚РІРѕ Рё СЃРІРѕР±РѕРґР° РєР°Рє РѕР±СЂР°Р· Р¶РёР·РЅРё.",
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

    html += `<button class="submit-btn" type="button" id="submit-test">РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚</button>`;
    testForm.innerHTML = html;
    document.getElementById("submit-test").addEventListener("click", submitTest);
}

function submitTest() {
    const scores = Object.fromEntries(Object.keys(results).map((key) => [key, 0]));

    for (let i = 0; i < testQuestions.length; i += 1) {
        const checked = document.querySelector(`input[name="q-${i}"]:checked`);
        if (!checked) {
            alert("РћС‚РІРµС‚СЊ РЅР° РІСЃРµ РІРѕРїСЂРѕСЃС‹, С‡С‚РѕР±С‹ РіР°Р·РµС‚Р° РІС‹РЅРµСЃР»Р° РІРµСЂРґРёРєС‚.");
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
            <a class="result-btn" href="${result.link}">РћС‚РєСЂС‹С‚СЊ РІРєР»Р°РґРєСѓ</a>
            <button class="result-btn" type="button" onclick="location.reload()">РџСЂРѕР№С‚Рё РµС‰Рµ СЂР°Р·</button>
            <a class="result-btn" href="index.html">РќР° РїРµСЂРІСѓСЋ РїРѕР»РѕСЃСѓ</a>
        </div>
    </section>`;
}

document.addEventListener("DOMContentLoaded", createTest);
