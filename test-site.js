const modal = docment.getElementById("modal");
const openBtn = docment.getElementById("openModal");
const closeBtn = docment.querySelecter(".close");

openBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    };


