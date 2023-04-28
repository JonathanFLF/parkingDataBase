let position = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  position++;
  if (position > slides.length) {
    position = 1;
  }
  slides[position - 1].style.display = "block";
  setTimeout(showSlide, 2000); // cambia la imagen cada 3 segundos
}

showSlide();