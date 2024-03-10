"use client";

import CopyToClipboard from "@/components/copy-to-clipboard";
import Game from "@/components/game";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const MainGamePage = ({
  searchParams,
  params,
}: {
  searchParams: { name?: string };
  params: { id: string };
}) => {
  const [copied, setCopied] = useState(false);

  const appendName = async (formData: FormData) => {
    const name = formData.get("name") as string;

    if (!name) return;

    redirect(`/game/${params.id}?name=${name}`);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    inviteCode: string
  ) => {
    event?.preventDefault();
    if (!inviteCode) return;

    navigator.clipboard.writeText(inviteCode);
    setCopied(() => true);
  };

  if (!searchParams.name)
    return (
      <main className="mx-auto max-w-5xl w-full mt-10 p-5">
        <Card className="w-full flex flex-col p-10">
          <h2 className="font-bold text-4xl md:text-5xl">Enter your name</h2>
          <p className="text-gray-400 mt-5 text-lg">
            Join the typing battle! Enter your name and challenge your friends.
          </p>

          <form action={appendName} className="mt-10">
            <div className="flex gap-3 flex-col md:flex-row">
              <Input
                type="text"
                placeholder="Name"
                name="name"
                className="text-xl px-5 py-7"
              />

              <Input
                type="text"
                placeholder="Invite Code"
                name="inviteCode"
                className="text-xl px-5 py-7"
                value={params?.id ?? ""}
                disabled
              />
              <CopyToClipboard
                onClick={(event: any) => handleClick(event, params?.id ?? "")}
                copied={copied}
              />
            </div>
            <Button type="submit" className="text-xl w-full mt-5 px-5 py-7">
              Join Game
            </Button>
          </form>
        </Card>
      </main>
    );

  return <Game gameId={params?.id} name={searchParams?.name} />;
};

export default MainGamePage;
