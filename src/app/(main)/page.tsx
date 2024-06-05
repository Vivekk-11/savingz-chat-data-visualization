interface Props {
  searchParams: {
    sortBy: string;
  };
}

export default function Home({ searchParams: { sortBy } }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
