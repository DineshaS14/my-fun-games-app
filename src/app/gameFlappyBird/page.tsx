"use client";

import React from "react";
import Game2048 from "../../../components/GameFlappyBird";

function GameFlappyBirdPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <h1>Game 2048</h1>
        <h3>Made by Dinesha for the LiL Bro TJW</h3>
      <Game2048 />
    </div>
  );
}

export default GameFlappyBirdPage;
