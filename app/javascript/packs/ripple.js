const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {
    card.onclick = function(e) {
        e.preventDefault();
        let x = e.clientX - e.target.parentNode.parentNode.offsetLeft;
        let y = e.clientY - e.target.parentNode.parentNode.offsetTop + window.pageYOffset;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
            window.location.href = e.target.href;
        }, 400);
    }
});