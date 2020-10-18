/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

// BEGIN CAROUSEL
$(document).ready(function() {

  var owl = $("owl-demo");

  $("#owl-demo").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true

  });
  $(".next").click(function(){
    $("#owl-demo").trigger("owl.next");
  })
});

function closeCarousel() {
  document.getElementById("whole-car").style.display = "None";
}