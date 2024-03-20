import { db } from "@/db";

const Home = async () => {
  const items = await db.query.testing.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {items.map(({ name }) => {
        return <div key={name}>{name}</div>;
      })}
    </main>
  );
};

export default Home;
