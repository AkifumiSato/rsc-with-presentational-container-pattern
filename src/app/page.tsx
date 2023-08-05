import { Search } from "@/app/_components/Search";
import React from "react";

export default function Home({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  return (
    <div className="flex justify-center">
      <article className="format lg:format-lg max-w-5xl min-w-full p-5">
        <h1>Search with RSC.</h1>
        <p>Server rendered: `q`: {searchParams.q ?? "undefined"}</p>
        <Search />
      </article>
    </div>
  );
}
