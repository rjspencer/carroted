class StudentMailer < ActionMailer::Base
  default from: "classroomcarrot@gmail.com"

  def report_behavior(behavior_action)
    email_address = "6306678280@tmomail.net"
    #email_address = "abhi.pillai1@gmail.com"
    body = if Behavior::CARROTS.include?(behavior_action)
             "Good job! Keep up the good work!"
           else
             "Let's work on this"
           end
    mail(to: email_address,
         body: body,
         subject: "You got a Carrot for #{behavior_action}")
  end
end
