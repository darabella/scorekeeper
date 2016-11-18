$(document).ready(function() {
  // $(document).ready(function() {
  //
  //   var score = 0

  // When the button with increase-5 is clicked, the function to add 5 to the variable occurs.
  // $(document).on("click", "#increase-5", function() {
  //     score += 5;

  // When the button with decrease-5 is clicked, the function to decrease 5 to the variable occurs.
  // $("#decrease-5").on("click", function(){
  //     score = score - 5;

  // This changes the DOM to display the score and the text string points at the top of the page.
  // $("#score").html(score + " Points");

  // This shows if the score is working in the console (for QA)
  //       console.log(score);
  //
  //
  //     });
  //   });
  //
  // });


  // $("#increase-5").on("click", function(){
  //   score += 5;


  //Set initial score to 0 on page load
  var score = 0;

  //Increase score by 5
  $(document).on("click", "#increase-5", function() {
    console.log(score);
    score += 5;

    // Display the score in the larger box
    $("#score").html(score + " Points");
  });

  //Decrease score by 5
  $(document).on("click", "#decrease-5", function() {
    console.log(score);
    if (score - 5 >= 0) {
      score -= 5;

      $("#score").html(score + " Points");
    } else {
      score = 0;
    }
    // Display the score in the larger box
    $("#score").html(score + " Points");

  });

  //Submit custom score and make sure it's a number
  $(document).on("click", "#submit-custom-score", function() {

    // Converts number into an integer
    var customScore = parseInt($("#custom-score").val());

    if (customScore >= 0) {
      score = customScore;

      $("#score").html(score + " Points");
    }

// Resets score to a blank field when updated
    $("#custom-score").val("");
  });

});
