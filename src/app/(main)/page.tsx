"use client";

import { useSearchParams } from "next/navigation";
import { getData } from "../../../services/queries";
import { useEffect, useState } from "react";
import { Document } from "mongodb";

interface Props {
  searchParams: {
    sortBy: "number" | "latest";
  };
}

export default function Home() {
  const sortBy = useSearchParams().get("sortBy");
  const sortByParam = sortBy ? sortBy : "latest";
  const [data, setData] = useState<Document[]>([]);

  useEffect(() => {
    (async () => {
      if (sortByParam === "latest" || sortByParam === "number") {
        const documentData = await getData(sortByParam);
        if (documentData) {
          setData(documentData);
        }
      } else {
        const documentData = await getData("latest");
        if (documentData) {
          setData(documentData);
        }
      }
    })();
  }, [sortByParam]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
