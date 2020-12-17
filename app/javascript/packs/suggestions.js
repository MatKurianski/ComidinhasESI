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

function isJSON(str) {
    try {
        JSON.parse(str);
    } catch(e) {
        return false;
    }

    return true;
}

document.querySelectorAll(".vote").forEach(e => {
    e.addEventListener("ajax:success", event => {
        const [data, status, xhr] = event.detail;

        if(isJSON(xhr.responseText)){
            if(e.classList.contains("active-vote")) {
                e.classList.remove("active-vote");
                let votes = parseInt(e.parentNode.querySelector(".vote-count").innerHTML);
                e.parentNode.querySelector(".vote-count").innerHTML = (votes-1).toString();
                e.dataset.method = "post";
            }
            else {
                e.classList.add("active-vote");
                let votes = parseInt(e.parentNode.querySelector(".vote-count").innerHTML);
                e.parentNode.querySelector(".vote-count").innerHTML = (votes+1).toString();
                e.dataset.method = "delete";
            }
            let link = e.href;
            let alternateLink = e.dataset.alternateLink;

            e.href = alternateLink;
            e.dataset.alternateLink = link;
        }
    });
});