class FitnessLogsController < ApplicationController

  def index
    fitnesslogs = FitnessLog.all
    render json: fitnesslogs
  end

  def create
    fitnesslog = FitnessLog.create(log_params)
    if fitnesslog.valid?
      render json:fitnesslog
    else
      render json: fitnesslog.errors, status: 422
    end
  end

  private
    def log_params
      params.require(:fitnesslog).permit(:date, :workout_name, :happy, :sad, :energetic, :email, :lethargic, :entry)
    end
end
