"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const router = useRouter();

  const createGame = () => {
    const inviteCode = uuidv4();
    router.push(`/game/${inviteCode}`);
  };

  const joinGame = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const inviteCode = formData.get("inviteCode") as string;
    if (!inviteCode)
      return toast.error("Error", { description: "Invite code is required" });
    router.push(`/game/${inviteCode}`);
  };

  return (
    <main className="w-full mx-auto max-w-5xl p-5">
      <h1 className="font-bold text-4xl mt-10">Typing Battle</h1>
      <p className="mt-5 text-gray-400 text-lg">
        Practice with your colleagues! Create a typing challenge and see who's
        the office keyboard king/queen.
      </p>
      <Card className="p-5 mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 flex flex-col justify-between">
          <div>
            <h2 className="font-medium text-2xl">Create Game</h2>
            <p className="text-gray-400 mt-5">
              Create a game and invite your friends to a thrilling typing
              showdown!
            </p>
          </div>
          <div>
            <Button className="mt-5 w-full" onClick={() => createGame()}>
              Create Game
            </Button>
          </div>
        </div>

        <div className="p-5 flex flex-col justify-between">
          <div>
            <h2 className="font-medium text-2xl">Join Game</h2>
            <p className="text-gray-400">
              Got the invite code? Dive into an existing typing battle and show
              off your skills!
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={(event) => joinGame(event)}>
              <Input type="text" placeholder="Invite Code" name="inviteCode" />
              <Button className="mt-3 w-full" type="submit">
                Join Game
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </main>
  );
}
