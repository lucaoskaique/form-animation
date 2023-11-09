const passwordField = document.getElementById("password");

const handleMouseMove = (event) => {
  if (
    !document.querySelector("#password:is(:focus)") &&
    !document.querySelector("#password:is(:user-invalid)")
  ) {
    const eyes = document.getElementsByClassName("eye");

    for (let eye of eyes) {
      const x = eye.getBoundingClientRect().left;
      const y = eye.getBoundingClientRect().top;

      const rad = Math.atan2(event.pageX - x, event.pageY - y);
      const rot = rad * (180 / Math.PI) * -1 + 180;

      eye.style.transform = `rotate(${rot}deg)`;
    }
  }
};

const handleFocusInPassword = (event) => {
  document.getElementById("face").style.transform = "translateX(30px)";
  const eyes = document.getElementsByClassName("eye");
  console.log(eyes);
  for (let eye of eyes) {
    eye.style.transform = "rotate(100deg)";
  }
};

const handleFocusOutPassword = (event) => {
  document.getElementById("face").style.transform = "translateX(0)";

  if (event.target.checkValidity()) {
    document.getElementById("ball").classList.toggle("sad");
  } else {
    document.getElementById("ball").classList.toggle("sad");
    const eyes = document.getElementsByClassName("eye");
    for (let eye of eyes) {
      eye.style.transform = "rotate(215deg)";
    }
  }
};

document.addEventListener("mousemove", (event) => {
  handleMouseMove(event);
});

passwordField.addEventListener("focus", (event) => {
  handleFocusInPassword(event);
});

passwordField.addEventListener("focusout", (event) => {
  handleFocusOutPassword(event);
});

document.getElementById("submit").addEventListener("mouseover", (event) => {
  document.getElementById("ball").classList.toggle("look_at");
});

document.getElementById("submit").addEventListener("mouseout", (event) => {
  document.getElementById("ball").classList.toggle("look_at");
});
