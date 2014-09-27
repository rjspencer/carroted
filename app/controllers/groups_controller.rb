class GroupsController < ApplicationController
  def students
    group = Group.find params[:id]
    render json: group.students
  end

  def behaviors
    group = Group.find params[:id]
    render json: group.behaviors
  end
end
