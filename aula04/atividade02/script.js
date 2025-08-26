document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btncontagem");

    btn.addEventListener("click", () => {
        let msg = "Contagem: \n";

        for(let i = 10; i >= 1; i--) {
            msg += i + "\n";
        }

        alert(msg);
    });
});