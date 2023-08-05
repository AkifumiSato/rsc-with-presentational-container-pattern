"use client";

import { useDebounce } from "ahooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Search() {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, { wait: 1000 });
  const router = useRouter();

  useEffect(() => {
    if (debouncedValue) {
      router.replace(`/?q=${debouncedValue}`);
    }
  }, [router, debouncedValue]);

  return (
    <div className="flex gap-3 items-center">
      <input type="search" onChange={(e) => setSearchText(e.target.value)} />
      debouncedValue: {debouncedValue}
    </div>
  );
}
