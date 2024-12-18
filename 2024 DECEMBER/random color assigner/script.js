Array.from(document.getElementsByClassName("box")).forEach(e => {
    const colors = ["red", "green", "blue", "pink"];

    // Randomly select a background color
    let random1 = Math.floor(Math.random() * colors.length);
    let backgroundColor = colors[random1];
    e.style.backgroundColor = backgroundColor;

    // Randomly select a text color, ensuring it's not the same as the background
    let random2;
    let textColor;
    do {
        random2 = Math.floor(Math.random() * colors.length);
        textColor = colors[random2];
    } while (textColor === backgroundColor);

    e.style.color = textColor;
});
