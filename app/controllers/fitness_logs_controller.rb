class FitnessLogsController < ApplicationController

  def index
    fitnesslogs = FitnessLog.all
    render json: fitnesslogs
  end

  def
  end

end
