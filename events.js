function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn = document.querySelector("#btn");

btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  
  