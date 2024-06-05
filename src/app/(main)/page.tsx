import { getData } from "../../../services/queries";

interface Props {
  searchParams: {
    sortBy: "number" | "latest";
  };
}

export default async function Home({ searchParams: { sortBy } }: Props) {
  const sortByParam = sortBy ? sortBy : "latest";
  await getData(sortByParam);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
