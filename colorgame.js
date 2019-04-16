
var gameOver = false;
var newElement = [];
var easyBtn = document.querySelector(".easy-btn");
var hardBtn = document.querySelector(".hard-btn");
var new_colorsBtn = document.querySelector(".new-colors-btn");
var rgb_color = document.querySelector(".rgb");
var header_box = document.querySelector(".main-box");
var correct_word = document.querySelector(".word-correct");
var colors_space = document.querySelector(".box-colors");


innit();

function innit(){
    generationColors(6);
    checkColors(); 
    new_colorsBtnClicked()
    easyBtnClicked();
    hardBtnClicked(); 
}

function new_colorsBtnClicked(){
    new_colorsBtn.addEventListener("click", function () {
        clickNewColors();
        if(newElements.length == 3){
            generationColors(3); 
        }else{
            generationColors(6);
        }
        checkColors();  
    });
}

function easyBtnClicked(){
    easyBtn.addEventListener("click", function () {
        easyBtn.classList.add("chosen");
        hardBtn.classList.remove("chosen");
        clickNewColors();
        generationColors(3);
        checkColors();
    });
}

function hardBtnClicked(){
    hardBtn.addEventListener("click", function () {
        hardBtn.classList.add("chosen");
        easyBtn.classList.remove("chosen");
        clickNewColors();
        generationColors(6);
        checkColors();
    });
}

function generationColors(number) {
    newElements = [];
    colors_space.innerHTML = "";
    for (var i = 0; i < number; i++) {
        creating_color = document.createElement("span");
        creating_color.classList.add("color-square");
        colors_space.appendChild(creating_color);
        color = "rgb(" + (Math.floor(Math.random() * 255)) + ", " + (Math.floor(Math.random() * 255)) + ", " + (Math.floor(Math.random() * 255)) + ")";
        creating_color.style.background = color;
        newElements.push(creating_color);
    }
    var randomNumber = Math.floor(Math.random() * newElements.length);
    rgb_color.textContent = newElements[randomNumber].style.background;
}


function checkColors() {
    for (var i = 0; i < newElements.length; i++) {
        newElements[i].addEventListener("click", function () {
            if (!gameOver) {
                if (this.style.background == rgb_color.textContent) {
                    for (var i = 0; i < newElements.length; i++) {
                        newElements[i].classList.remove("hide-box");
                        newElements[i].style.background = rgb_color.textContent;
                        header_box.style.background = rgb_color.textContent;
                        gameOver = true;
                    }
                    new_colorsBtn.textContent = "Play again?";
                    correct_word.textContent = "Correct!";
                } 
                else {
                    this.classList.add("hide-box");
                    correct_word.textContent = "Try again!";
                }
            }
        });
    }
}


    function clickNewColors() {
        new_colorsBtn.textContent = "New colors";
        correct_word.textContent = "";
        gameOver = false;
        header_box.style.background = "blue";
    }

