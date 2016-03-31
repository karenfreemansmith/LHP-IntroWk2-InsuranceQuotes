$(document).ready(function() {
  //alert("jQuery on the job");
  $("#insurance").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var quote=(100-age) * 3;

    $("#rate").empty().append(quote);
    $("#quote").show();

    event.preventDefault();
  });
});
