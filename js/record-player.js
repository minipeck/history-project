document.addEventListener("DOMContentLoaded", () => {
    const players = document.querySelectorAll(".record-button");
    let activeAudio = null;
    let activeButton = null;

    players.forEach((button) => {
        const audio = button.parentElement.querySelector("audio");
        const caption = button.parentElement.querySelector(".record-caption");
        if (!audio) return;

        button.addEventListener("click", async () => {
            if (activeAudio && activeAudio !== audio) {
                activeAudio.pause();
                activeAudio.currentTime = 0;
                activeButton?.classList.remove("is-playing");
                activeButton?.classList.remove("is-loading");
                activeButton?.setAttribute("aria-label", "Включить пластинку");
            }

            if (audio.paused) {
                button.classList.add("is-loading");
                button.classList.add("is-playing");
                if (caption) caption.textContent = "Загружается";
                try {
                    await audio.play();
                    button.classList.remove("is-loading");
                    button.classList.add("is-playing");
                    button.setAttribute("aria-label", "Поставить пластинку на паузу");
                    if (caption) caption.textContent = "Играет";
                    activeAudio = audio;
                    activeButton = button;
                } catch {
                    button.classList.remove("is-loading");
                    button.classList.remove("is-playing");
                    if (caption) caption.textContent = "Браузер не дал включить звук";
                }
            } else {
                audio.pause();
                button.classList.remove("is-loading");
                button.classList.remove("is-playing");
                button.setAttribute("aria-label", "Включить пластинку");
                if (caption) caption.textContent = "Нажми на пластинку";
            }
        });

        audio.addEventListener("playing", () => {
            button.classList.remove("is-loading");
            button.classList.add("is-playing");
            if (caption) caption.textContent = "Играет";
        });

        audio.addEventListener("waiting", () => {
            if (!audio.paused) {
                button.classList.remove("is-playing");
                button.classList.add("is-loading");
                if (caption) caption.textContent = "Подгружается";
            }
        });

        audio.addEventListener("pause", () => {
            button.classList.remove("is-loading");
            button.classList.remove("is-playing");
        });

        audio.addEventListener("ended", () => {
            button.classList.remove("is-loading");
            button.classList.remove("is-playing");
            button.setAttribute("aria-label", "Включить пластинку");
            if (caption) caption.textContent = "Нажми на пластинку";
        });
    });
});
