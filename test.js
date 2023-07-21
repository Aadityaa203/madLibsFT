function createParagraph() {
  var firstWord = document.getElementById("word1").value;
  var secondWord = document.getElementById("word2").value;
  var thirdWord = document.getElementById("word3").value;
  var fourthWord = document.getElementById("word4").value;
  var fifthWord = document.getElementById("word5").value;
  var sixthWord = document.getElementById("word6").value;
  var seventhWord = document.getElementById("word7").value;
  var eighthWord = document.getElementById("word8").value;
  var ninethWord = document.getElementById("word9").value;
  var tenthWord = document.getElementById("word10").value;
  var eleventhWord = document.getElementById("word11").value;
  var twelvethWord = document.getElementById("word12").value;

  var paragraph = 
  "Once, a " +
    '<span class="highlight">' +
    thirdWord +
    "</span>" +
    " " +
    '<span class="highlight">' +
    firstWord +
    "</span>" +
    " named Whiskers traveled to a magical forest. Whiskers stumbled upon a group of mischievous " +
    '<span class="highlight">' +
    secondWord +
    "</span>" +
    " who had a crazy dance battle" +
    "." +
    " The squirrels spun, " +
    '<span class="highlight">' +
    fourthWord +
    "</span>" +
    "," +
    " and " +
    '<span class="highlight">' +
    twelvethWord +
    "</span>" +
    " uncontrollably. Whiskers couldn't " +
    '<span class="highlight">' +
    eighthWord +
    "</span>" +
    " joining in and showcased some impressive breakdancing moves." +
    " The " +
    '<span class="highlight">' +
    seventhWord +
    "</span>" +
    " animals cheered and laughed as " +
    '<span class="highlight">' +
    sixthWord +
    "</span>" +
    " outperformed the " +
    '<span class="highlight">' +
    ninethWord +
    "</span>" +
    "." +
    " The hilarious spectacle attracted a crowd of amazed " +
    '<span class="highlight">' +
    tenthWord +
    "</span>" +
    "," +
    " including a juggling elephant and a singing kangaroo. Together, they formed an unforgettable impromptu performance that left everyone in stitches. The uproarious laughter echoed through the forest, creating a moment of " +
    '<span class="highlight">' +
    eleventhWord +
    "</span>" +
    " joy. " +
    '<span class="highlight">' +
    fifthWord +
    "</span>" +
    " and their new friends continued to dance and entertain, making the magical forest a place of laughter and happiness" +
    "." +
    "<br>" +
    "I hope this funny short story brings a smile to your face!";

  document.getElementById("paragraph").innerHTML = paragraph;
}
