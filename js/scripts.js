//business logic
$(document).ready(function(){
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    $("#stress-test").show();
    $("input:checkbox[name=stress-symptoms]:checked").each(function(){
      const stressResponses = $(this).val();
      $('#stress-responses').append(stressResponses + "<br>");
    });
    console.log($("input:checkbox[name=stress-symptoms]:checked"))
  });
});