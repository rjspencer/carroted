$(document).ready( function() {
  $('.tabs').hide();
  $('.tabs-content').hide();
  if( $('.alert-box').text() == "")
    $('.alert-box').hide();
  
  $("#groups-selector").on("change", "select", function() {
    $('.tabs').hide();
    $('.tabs-content').hide();
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

  $("#students-selector").on("change", "select", function() {
    $('.tabs').show();
    $('.tabs-content').show();
  });
  
  $(".tabs-content").on("click", ".button", function() {
    behavior_report = {group_id: $("#groups-selector option:selected").val(), student_id: $("#students-selector option:selected").val(), behavioral_action: $(this).text(), status: "open"};
    request = $.post( "/behaviors", behavior_report );
    request.done( function(id) {
      $(".alert-box").show().html("<b>Submitted: </b>" + $("#students-selector option:selected").text() + " reported for " + behavior_report.behavioral_action + ".<a href='' id='" + id + "' class='close'>CANCEL</a>");
      setTimeout(function() {$(".alert-box").hide()}, 4000);                           
    });
  });
  
  $(".alert-box").on("click", "a.close", function() {
    $.ajax({
      url: "/behaviors",
      type: 'DELETE',
      data: {id: $(this).attr("id")},
      success: function(result) {
          $('.alert-box').hide();
      }
    });
  });

  $("#admin input").change(function() {
    if(this.checked) {
      $(this).parent().parent().parent().fadeOut("slow", function() { });
    }
  });
});
