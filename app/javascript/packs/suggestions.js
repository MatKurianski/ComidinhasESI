class Suggestions{
    constructor() {
        this.circle = document.getElementById("plus-circle");
        this.horizontal_cross = document.getElementById("plus-horizontal");
        this.vertical_cross = document.getElementById("plus-vertical");
        this.suggestion_text = document.getElementById("suggestion");
    }

    check_input() {
        if(this.suggestion_text.value !== "") {
            this.circle.classList.add("circle-animation");
            this.horizontal_cross.classList.add("cross-animation");
            this.vertical_cross.classList.add("cross-animation");
        }
        else {
            this.circle.classList.remove("circle-animation");
            this.horizontal_cross.classList.remove("cross-animation");
            this.vertical_cross.classList.remove("cross-animation");
        }
    }
}

const suggestions_class = new Suggestions();

document.getElementById("suggestion").addEventListener("input", function() {
    suggestions_class.check_input();
});