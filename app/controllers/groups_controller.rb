class GroupsController < ApplicationController
  def students
    group = Group.find params[:id]
    return [].to_json unless group
    render json: group.students
  end

  def students_with_behaviors
    group = Group.find params[:id]
    return [].to_json unless group

    todays_behaviors = group.behaviors.where "created_at > ?", Date.today

    students_with_behaviors = todays_behaviors.map do |behavior|
      {
        name: behavior.student.name,
        action: behavior.action,
        carrot: behavior.is_carrot?,
        created_at: behavior.created_at
      }
    end

    render json: students_with_behaviors
  end
end
