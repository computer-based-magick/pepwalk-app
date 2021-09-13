class FitnessLogsController < ApplicationController

  def index
    fitnesslogs = FitnessLog.all
    render json: fitnesslogs
  end

end
