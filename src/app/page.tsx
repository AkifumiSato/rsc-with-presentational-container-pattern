import { Search } from "@/app/_components/Search";
import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center">
      <article className="format lg:format-lg max-w-5xl min-w-full p-5">
        <h1>Search with RSC.</h1>
        <Search />
      </article>
    </div>
  );
}
