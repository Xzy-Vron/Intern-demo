import React from "react";
import { Card } from "./ui/card";

export default function NameCard({name, code}) {
  return (
    <div>
      <Card className={"scroll-m-20  font-extrabold tracking-tight text-balance h-40 flex justify-center items-start p-5"} >
        <h1 className="scroll-m-20 text-start text-4xl font-extrabold tracking-tight text-balance ">
          Welcome, {name}
        </h1>
        <p>Referral code: {code}</p>
      </Card>
    </div>
  );
}
