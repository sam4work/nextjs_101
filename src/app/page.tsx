import Image from "next/image";
import { db } from "../../lib/db";

export default async function Home() {

  const result = await db.execute('SELECT NOW();');

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      <p>
        Database result: {JSON.stringify(result.rows)}
      
      </p>


      </main>
    </div>
  );
}
