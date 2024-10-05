let currentDate = new Date();

document.getElementById("demo").innerHTML = currentDate;

/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );