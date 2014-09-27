$(document).ready(function() {
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

    $.get("/groups/" + id + "/students_with_behaviors", function(data) {
      var behavior_list = $("#behaviors-list")
      behavior_list.empty();
      $.each(data, function(i, student) {
        if(student.carrot) {
          var action_color = "#43ac6a"; // foundation button success color
        } else {
          var action_color = "#f04124"; // foundation button alert color
        }

        behavior_list.append("<h4 class='large-6 columns' style='background:" + action_color + ";'>" + student.name + "</h4><br>" )
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
