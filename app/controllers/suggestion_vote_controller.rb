class SuggestionVoteController < ApplicationController
  before_action :authorized, only: [:create, :destroy]
  before_action :find_suggestion, only: [:create, :destroy]

  def create
    suggestion_vote = SuggestionVote.new
    suggestion_vote.user = current_user
    suggestion_vote.suggestion = @suggestion
    @suggestion.suggestion_votes << suggestion_vote unless @suggestion.suggestion_votes.exists?({user_id: current_user.id})
    render :json => { :message => "created" }
  end

  def destroy
    @suggestion.suggestion_votes.find_by(user_id: current_user.id).destroy
    render :json => { :message => "destroyed" }
  end

  private
  def suggestion_params
    params.require(:suggestion_vote).permit(:suggestion_id)
  end

  def find_suggestion
    @suggestion = Suggestion.find(params[:suggestion_id])
  end
end
