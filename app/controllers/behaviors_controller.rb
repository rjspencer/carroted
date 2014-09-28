class BehaviorsController < ApplicationController
  def new
    @groups = Group.all
    render "new"
  end

  def create
    behavior = Behavior.create(group_id: params['group_id'], student_id: params['student_id'], action: params['behavioral_action'], status: params['status'])
    render json: behavior.id
  end

  def delete
    Behavior.find(params['id']).destroy
    render nothing: true
  end
  
  def status_update
    p params
    behavior = Behavior.find(params["id"])
    behavior.status = "resolved"
    behavior.save
    render nothing: true
  end

  def admin
    @behaviors = Behavior.where("status != 'resolved'").order("created_at desc")
    render "admin"
  end
end
