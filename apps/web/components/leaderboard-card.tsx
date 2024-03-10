"use client";

import { Player } from "@/types/types";
import type { FC } from "react";
import { Card } from "./ui/card";

type LeaderBoardCardProps = {
  player: Player;
  rank: number;
};

const LeaderBoardCard: FC<LeaderBoardCardProps> = ({ player, rank }) => (
  <Card className="w-full flex p-5 gap-5">
    <div className="text-xl"># {rank}</div>
    <div className="text-xl">{player.name}</div>
    <div className="ml-auto text-xl">{player.score}</div>
  </Card>
);

export default LeaderBoardCard;
