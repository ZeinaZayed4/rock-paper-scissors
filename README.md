# Rock Paper Scissors

The popular Rock Paper Scissors game coded in JavaScript, built as part of [The Odin Project's Foundations course](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

## Overview

- `app.js` includes four main functions:
  - `getComputerChoice` returns a random choice from the three options "rock, paper, scissors".
  - `getHumanChoice` gets the user's choice through `prompt` and returns it lowercased.
  - `playRound` declared inside `playGame` compares computer and human choices and return `tie` or `computer` or `human`.
  - `playGame` declares score variables and logs the final winner after 5 rounds, each round result is given from `playRound`.

## Scoring

- Win: +10 points.
- Loss and Tie: 0 points.

## Project Structure

```text
rock-paper-scissors/
├── index.html
├── app.js
└── README.md
```

## How to play

- **Live site:** [Rock Paper Scissors](https://zeinazayed4.github.io/rock-paper-scissors/)
  - Enter your choice from `rock, paper, scissors` 5 times with every prompt reload.
  - Open the dev tools "console".
  - The result will be there.
- **Locally:** clone this repo and open `index.html` in your web browser.
