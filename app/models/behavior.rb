class Behavior < ActiveRecord::Base
  CARROTS = %w(respectful responsible safe genius)
  STICKS = %w(talking fighting vandalism smartass)

  belongs_to :group
  belongs_to :student

  def is_carrot?
    CARROTS.include? action.downcase
  end
end
