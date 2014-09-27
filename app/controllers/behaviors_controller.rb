class BehaviorsController < ApplicationController
  def new
    @groups = Group.all
    render "new"
  end

  def create
    Behavior.create(params)
    redirect_to :new_behavior
  end
end
