class FitnessLogsController < ApplicationController

  def index
    fitness_logs = FitnessLog.all
    render json: fitness_logs
  end

  def create
    fitness_log = FitnessLog.create(log_params)
    if fitness_log.valid?
      render json: fitness_log
    else
      render json: fitness_log.errors, status: 422
    end
  end

  def update
    fitness_log = FitnessLog.find(params[:id])
    fitness_log.update(log_params)
    render json:fitness_log
  end
  
  private
    def log_params
      params.require(:fitness_log).permit(:date, :workout_name, :workout_id, :happy, :sad, :energetic, :email, :lethargic, :entry, :user_id)
    end
end
