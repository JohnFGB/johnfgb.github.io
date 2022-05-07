let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};
window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

//EMAIL JS

function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" && email.value == "" && msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_cquocm7", "template_c4cnekn", {
    to_name: email,
    from_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Sorry!!",
    text: "Fields Cannot be empty!",
    icon: "error",
    button: "Try again!",
  });
}

function success() {
  swal({
    title: "Message sent sucessfully!",
    text: "We try to reply 2x24 Hours",
    icon: "success",
    button: "success!",
  });
}

//header bg berubah ketika ngescroll

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// scroll

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
});
