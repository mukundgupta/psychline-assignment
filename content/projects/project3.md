---
title: "Maze Runner"

description: "A maze solving game programmed in Python, with an algorithm that generates random mazes with difficulty levels along with player control and win states. This was made for my class 12 Computer Science final project."
image: "/images/maze.png"
carousel: ["/images/maze.png", "/images/maze2.png"]
tags: ["Python"]
---

# Technology Stack

The game was coded in Python using the PyGame library. It also has a retro CRT effect using shaders (OpenGL).

# About Project

This project was submitted as my 12th Computer Science final project. It includes a difficulty slider with easy, medium, hard, ultra hard, and near impossible(blind maze). In the blind maze, the maze is invisible ad the player has to navigate using trial and error to find the end. The game generates a matrix of 0s and 1s, with 1s being the walls and 0s being the path. It ensures that each maze is unique and solvable using a process called Recursive Backtracing. The maze is then rendered on the screen using the pygame library. There are several shaders and effects applied over the maze to give it a more retro feel.
