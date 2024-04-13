# game-theory-ai

# Design

## Conops

- UI for running game theory simulations
- Dashboard showing all tournaments you've created
- Start a new tournament
- Choose a ruleset for the new tournament
- Browse strategies available for that ruleset
- Each strategy should be assigned metadata ratings on categories like optimism, forgiveness, provokability, and trustworthiness
- Define player population to include a certain number of players for each strategy. Can be a composition of sub-populations.
- Define the structure of the tournament. What determines who plays who? Round robin, divisions, single elimination, double elimination, etc.
- Define the number of game iterations per head-to-head match...or the average number of iterations + randomness factor...or play until convergence is reached
- Simulate the tournament
- Display the tournament leaderboard and scores
- View tournament performance by category. E.g. How well did forgiveness correlate with success?

## Technical Requirements

- UI written in javascript
- Strategies implemented in python
- Strategies should include asking GPT-4 / Claude Opus / Gemini Ultra via their APIs

## TODO

- Configure the per-round params
- PlayerChooser (like TournamentChooser)
    - Count of players chosen vs players needed
    - Display chosen strategies in alphabetical order in a table with strat and player count
    - Add new strategy
        - choose strategy from list of strats not yet added
        - default to one player for new strategy
    - In table, edit player count for this strategy by typing or using + and - buttons
    - Add all strategies
    - Delete strategy buttons
    - Delete strategy confirmation modal
    - Strategies (input: game history, output: next action):
        - Tit for Tat
        - Always defect
        - Always cooperate
        - Tit for 2 Tats
        - Others (see https://github.com/Axelrod-Python/Axelrod)
        - GPT-4
        - Claude 3
- Round robin
    - Verify strategies are chosen correctly
    - Run the sim
        - For each combination of players:
            - Create a game object
            - For each turn:
                - Ask first player for action, based on history of current game
                - Ask second player for action, based on history of current game
            - Generate game results
    - Display results:
        - Standings: rank, optimistic?, forgiving?, provokable?, clear?, points, win percentage, loss percentage
        - Sort by column
        - Charts (TBD which)
- Survival round robin
    - Run the sim
        - Multiple rounds
        - Elimination logic
    - Display results:
        - Standings: rank (rounds survived, points in last round), rounds survived, points (per round and overall), win percentage (per round and overall), loss percentage (per round and overall)
        - Sort by column
        - Charts (TBD which)
- Group round robin
    - PlayerChooser for each group
    - Run the sim, taking into account group dynamics when matching players
- Survival group round robin
    - PlayerChooser for each group in the first round
    - Choose number of groups and/or number of players per group for each round
- Display all the per-game results somehow