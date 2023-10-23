var sideMenu = document.getElementById("sideMenu");
var jumptotop = document.getElementById("jumptotop");
// var submit = document.getElementById("submit");

// Jump to top
function jumpToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    jumptotop.style.display = "block";
  } else {
    jumptotop.style.display = "none";
  }
}

window.onscroll = function () {
  jumpToTop();
};

// Open Side Menu
function openMenu() {
  sideMenu.style.right = "0";
}
// Open Side Menu
function closeMenu() {
  sideMenu.style.right = "-250px";
}

function showLoader(){
submit.document.innerHTML='Please wait...'
}

////////// Form //////////
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwD4N80CV_r41vb_2a5hscpCfqfyKBinFVDBqFn-Zlihyuul4Ez90LC4mmd9gEy-NJq/exec";
const form = document.forms["submit-to-google-sheet"];
// const submit = document.getElementById("submit");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      msg.innerHTML = "Message sent! 🤝";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "Sorry!, Something went wrong!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    });
});

//////////////////////////////////

const name= document.getElementById('name');
const email= document.getElementById('email');
const subject= document.getElementById('subject');
const message= document.getElementById('message');

