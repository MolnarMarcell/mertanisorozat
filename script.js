// végtelen mértani sorozat
let box = document.createElement("div");
box.style.margin = "20px";
document.body.appendChild(box);

function slider () {
    let kvociensslider = document.createElement("input");
    kvociensslider.type = "range";
    kvociensslider.id = "ratio";
    kvociensslider.step = "0.01";
    kvociensslider.min = "-0.99";
    kvociensslider.max = "0.99";
    kvociensslider.value = "0.50";
    box.appendChild(kvociensslider);
}

let kvocienlabel = document.createElement("label");
kvocienlabel.htmlFor = "ratio";
kvocienlabel.id = "ratiolabel";
kvocienlabel.innerText = "q értéke:";
document.addEventListener("input", function() {
    let q = parseFloat(document.getElementById("ratio").value);
    document.getElementById("ratiolabel").innerText = "q értéke: " + q.toFixed(2);
});
box.appendChild(kvocienlabel);

slider();

// Kezdes