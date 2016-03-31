$(document).ready(function() {
  //alert("jQuery on the job");
  $("#insurance").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    if(age) {
      var quote=(100-age) * 3;
      if(gender==="male" || age < 26) {
        quote += 50;
      }

      $("#rate").empty().append(quote);
      $("#quote").show();
    } else {
      alert("please enter your age.");
    }


    event.preventDefault();
  });
});
