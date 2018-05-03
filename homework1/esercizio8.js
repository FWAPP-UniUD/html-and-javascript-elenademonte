const immagine = document.getElementById("immagine")
immagine.addEventListener("mouseover", FunctionMouseOver);
immagine.addEventListener("mouseout", FunctionMouseOut);
immagine.addEventListener("click", FunctionClick);
immagine.addEventListener("contextmenu", FunctionContextMenu);

function FunctionMouseOver() {
    immagine.src = "https://findicons.com/files/icons/963/very_emotional_emoticons/128/128_15.png";
}

function FunctionMouseOut() {
    immagine.src = "https://findicons.com/files/icons/963/very_emotional_emoticons/128/128_16.png";
}

function FunctionClick() {
    immagine.src = "https://findicons.com/files/icons/963/very_emotional_emoticons/64/64_1.png";
}

function FunctionContextMenu() {
    immagine.src = "https://findicons.com/files/icons/963/very_emotional_emoticons/64/64_12.png";
}