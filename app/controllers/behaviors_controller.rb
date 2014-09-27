class BehaviorsController < ApplicationController
  def new
    @groups = Group.all
    render "new"
  end

  def create
    p params
    Behavior.create(params)
    return [].to_json
  end
end
