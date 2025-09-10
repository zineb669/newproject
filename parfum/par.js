 const stars = document.querySelectorAll('input[name="rating"]');
  stars.forEach(star => {
    star.addEventListener("change", () => {
      alert("You gave " + star.value + " stars!");
    });
  });
  setTimeout(function() {
    document.getElementById("lu").style.display = "block";
  }, 2000);
      document.getElementById("we").onclick = function () {
    document.getElementById("per").scrollIntoView({ behavior: "smooth" });
  };  
    