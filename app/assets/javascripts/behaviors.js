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
});