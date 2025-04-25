const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

btn.onclick = () => {
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

function openModal(url) {
    document.getElementById('modal-iframe').src = url;
    document.getElementById('modal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-iframe').src = '';
  }
