"use client";

import { useSearchParams } from "next/navigation";
import { getData } from "../../../services/queries";
import { Suspense, useEffect, useState } from "react";
import { Document } from "mongodb";
import { DataTable } from "./_components/data-table";

function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataTable data={data} />
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
