class GroupsController < ApplicationController
  def students
    group = Group.find params[:id]
    render json: group.students
  end

  def behaviors
    group = Group.find params[:id]
    return [].to_json unless group

    todays_behaviors = group.behaviors.where "created_at > ?", Date.today
    render json: todays_behaviors
  end
end
