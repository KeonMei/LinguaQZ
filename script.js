let typingTimer;
const TYPING_DELAY = 800; 


async function translateAI(text) {
    const output = document.getElementById("resultText");
    const status = document.getElementById("statusText");

    status.innerText = "AI аударылып жатыр...";

    try {
        const response = await fetch("https://pulpless-nonhedonically-numbers.ngrok-free.dev/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        output.value = data.translation;
        status.innerText = "AI аударма дайын";

    } catch (error) {
        console.error(error);
        status.innerText = "Сервермен байланыс жоқ";
        output.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputText");

    input.addEventListener("input", () => {
        clearTimeout(typingTimer);

        const text = input.value.trim();
        if (!text) {
            document.getElementById("resultText").value = "";
            document.getElementById("statusText").innerText = "Мәтін енгізіңіз";
            return;
        }

        typingTimer = setTimeout(() => {
            translateAI(text);
        }, TYPING_DELAY);
    });
});
