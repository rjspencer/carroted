class ParentMailer < ActionMailer::Base
  default from: "classroomcarrot@gmail.com"

  def report_behavior(student_name, behavior_action)
    #email_address = "6306678280@tmomail.net"
    email_address = "abhi.pillai1@gmail.com"
    body = if Behavior::CARROTS.include?(behavior_action)
             "#{student_name} got a Carrot for #{behavior_action}. Very proud of her!"
           else
             "#{student_name} got a Carrot for #{behavior_action}. Let's keep an eye on this!"
           end
    mail(to: email_address,
         body: body,
         subject: "#{student_name} got a Carrot!")
  end
end
