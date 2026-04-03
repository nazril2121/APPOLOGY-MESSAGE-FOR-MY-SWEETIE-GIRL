onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });
  
  const readBtn = document.getElementById("readBtn");
const fullLetter = document.getElementById("fullLetter");
const backBtn = document.getElementById("backBtn");

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    // munculin tombol baca
    setTimeout(() => {
        readBtn.style.display = "inline-block";
    }, 800);
});

closeBtn.addEventListener("click", () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    readBtn.style.display = "none";
});

readBtn.addEventListener("click", () => {
    fullLetter.style.display = "flex";
});

backBtn.addEventListener("click", () => {
    fullLetter.style.display = "none";
});