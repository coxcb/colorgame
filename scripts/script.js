function myFunction() {
    var matchingColor = "#ffdf00";
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    
    if (randomColor == matchingColor) {
        var winnerDiv = document.getElementById("winner");
        winnerDiv.style.display = "block";
    }
    
}

function getRandomColor() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
