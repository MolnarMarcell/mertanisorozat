const slider = document.getElementById("qSlider");
const qValue = document.getElementById("qValue");
const finiteSumEl = document.getElementById("finiteSum");
const infiniteSumEl = document.getElementById("infiniteSum");
const termsDiv = document.getElementById("terms");
const warningEl = document.getElementById("warning");

const N = 10;

function update() {
    const q = parseFloat(slider.value);
    qValue.innerText = q.toFixed(2);

    termsDiv.innerHTML = "";
    warningEl.innerText = "";

    let finiteSum = 0;

    for (let i = 0; i < N; i++) {
        let term = Math.pow(q, i);
        finiteSum += term;

        let bar = document.createElement("div");
        bar.className = "term";
        
        if (term < 0) {
            bar.style.backgroundColor = "#e53935"
            bar.style.border = "4px solid rgb(148, 23, 23)"
        } else {
            bar.style.backgroundColor = "#4CAF50"
            bar.style.border = "4px solid rgb(25, 105, 18)"
        }

        let width = Math.abs(term) * 100;
        bar.style.width = Math.max(width, 2) + "%";

        bar.innerText = `q^${i} = ${term.toFixed(4)}`;

        termsDiv.appendChild(bar);
    }

    finiteSumEl.innerText = finiteSum.toFixed(4);

    if (Math.abs(q) < 1) {
        let infiniteSum = 1 / (1 - q);
        infiniteSumEl.innerText = infiniteSum.toFixed(4);
    } else {
        infiniteSumEl.innerText = "nem létezik";
        warningEl.innerText = "|q| ≥ 1 esetén a végtelen összeg nem értelmezhető!";
    }
}

slider.addEventListener("input", update);

update();
