$(document).ready( function() {
  //alert("ready");
  $("#groups-selector").on("change", "select", function() {
    var id = $(this).val();
    $.get("/groups/" + id + "/students", function(data) {
      $("#students-selector select").empty(); 
      $("#students-selector select").append( '<option value="" disabled selected>Select a student</option>');
      $.each(data, function(i, student) {
        $("#students-selector select").append( "<option value=" + student.id + ">" + student.name + "</option>" )
      });
    });
  });
  
  $(".tabs-content").on("click", ".button", function() {
//     $('#confirmationModal').foundation('reveal', 'open');
    behavior_report = {group_id: $("#groups-selector option:selected").val(), student_id: $("#students-selector option:selected").val(), action: $(this).text(), status: "open"};
    console.log(behavior_report);
    request = $.post( "/behaviors", behavior_report );
    request.done( function() {
      $('#confirmationModal').foundation('reveal', 'close');
    });
  });
  
//   $("#confirmationModal").on("click", "a", function() {
//     behavior_report = "";
//     request = $.post( "/behaviors", behavior_report );
//     request.done( function() {
//       $('#confirmationModal').foundation('reveal', 'close');
//     });
//   });
});