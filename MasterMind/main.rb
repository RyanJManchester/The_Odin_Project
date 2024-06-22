# A program that lets you play mastermind
require 'pry-byebug'

# class mastermind
class MasterMind
  def initialize(_picked = nil)
    @colours = %w[red green blue yellow
                  brown orange black white]
    @picked = @colours.sample(4)
  end

  # an introduction method
  def intro
    puts 'Welcome to MasterMind!'
  end
  # a play function that starts the process
  def play; end
  # an input + recursive function that takes a guess
  # and slots
  def guess; end
  # returning it to a private function that:
  def return_hints; end
  # returns the new hints, updates the row.
  # + combined functions that return a computer guess
  def comp_guess; end
  def
     choose_slot; end
end

game = MasterMind.new
game.play
