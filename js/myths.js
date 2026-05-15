const myths = [
    {
        name: "Стиляги",
        statement: "Стиляги слушали музыку “на костях” - самодельные пластинки на рентгеновских снимках.",
        isTrue: true,
        truth: "Правда. Рентгеновские снимки использовали как материал для кустарной записи запрещенной или труднодоступной музыки."
    },
    {
        name: "Стиляги",
        statement: "Стиляги носили только оригинальные вещи из США.",
        isTrue: false,
        truth: "Миф. Большинство вещей шили сами или переделывали, имитируя западный стиль."
    },
    {
        name: "Хиппи",
        statement: "Хиппи были просто ленивыми бездельниками.",
        isTrue: false,
        truth: "Миф. Многие хиппи участвовали в антивоенных и экологических движениях; часть среды стояла у истоков Greenpeace и новой технологической культуры."
    },
    {
        name: "Хиппи",
        statement: "Антивоенная культура хиппи сильно повлияла на общественное давление против войны во Вьетнаме.",
        isTrue: true,
        truth: "Правда. Хиппи стали важной частью массового антивоенного движения и культуры протеста."
    },
    {
        name: "Байкеры",
        statement: "Все байкеры - бандиты.",
        isTrue: false,
        truth: "Миф. В культуре байкеров важны дорога, братство и мотоциклы; многие участники - обычные законопослушные люди самых разных профессий."
    },
    {
        name: "Байкеры",
        statement: "После Второй мировой часть мотокультуры выросла из среды ветеранов, которым не хватало риска и адреналина.",
        isTrue: true,
        truth: "Правда. В послевоенной Америке ветеранская среда заметно повлияла на ранние мотоклубы."
    },
    {
        name: "Мажоры",
        statement: "Мажоры в СССР были борцами с режимом.",
        isTrue: false,
        truth: "Миф. Они скорее пользовались благами советской системы и доступом к дефициту."
    },
    {
        name: "Мажоры",
        statement: "Мажоры имели доступ к дефициту: джинсам, жвачке и западной технике.",
        isTrue: true,
        truth: "Правда. Именно доступ к закрытым возможностям и редким вещам отличал эту среду."
    },
    {
        name: "Ньювейверы",
        statement: "New wave - это просто пустая музыка без идеи.",
        isTrue: false,
        truth: "Миф. Новая волна выросла из постпанка, авангардного искусства, футуристической эстетики и экспериментов с электронным звуком."
    },
    {
        name: "Ньювейверы",
        statement: "Ньювейверы сделали мужской макияж и андрогинный стиль частью массовой моды.",
        isTrue: true,
        truth: "Правда. Новая волна активно играла с гендерным образом, сценическим макияжем и театральной модой."
    },
    {
        name: "Панки",
        statement: "Панки - только агрессивные разрушители.",
        isTrue: false,
        truth: "Миф. В основе панка были DIY, самоорганизация, свои журналы, записи, концерты и право говорить своим голосом."
    },
    {
        name: "Панки",
        statement: "Главный принцип панка - DIY: “сделай сам”.",
        isTrue: true,
        truth: "Правда. Панк-среда сама издавала фэнзины, записывала музыку и собирала концерты."
    }
];

function renderMyths() {
    const board = document.getElementById("mythsBoard");
    if (!board) return;

    board.innerHTML = myths.map((item, index) => `
        <article class="myth-card">
            <div class="myth-card__name"><span>${item.name}</span></div>
            <div>
                <p class="myth-card__question">${item.statement}</p>
                <div class="myth-card__actions">
                    <button class="myth-choice" type="button" data-index="${index}" data-answer="true">Правда</button>
                    <button class="myth-choice" type="button" data-index="${index}" data-answer="false">Миф</button>
                </div>
                <div class="myth-card__answer" aria-live="polite">
                    <p class="myth-card__verdict"></p>
                    <p class="myth-card__text">${item.truth}</p>
                </div>
            </div>
        </article>
    `).join("");

    board.querySelectorAll(".myth-choice").forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".myth-card");
            const item = myths[Number(button.dataset.index)];
            const answer = button.dataset.answer === "true";
            const verdict = card.querySelector(".myth-card__verdict");

            card.classList.add("is-open");
            card.querySelectorAll(".myth-choice").forEach((choice) => choice.classList.remove("is-selected"));
            button.classList.add("is-selected");
            verdict.textContent = answer === item.isTrue ? "Верно" : "Мимо";
        });
    });
}

document.addEventListener("DOMContentLoaded", renderMyths);
