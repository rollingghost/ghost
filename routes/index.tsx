import { Head } from "$fresh/runtime.ts";
import { Cpu } from "../islands/Cpu.tsx";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ghost</title>
      </Head>
      <div class="flex flex-col items-center justify-center h-screen">
        <div>
          <h1 class="text-4xl font-bold">Welcome to Ghost</h1>
          <Cpu />
        </div>
      </div>
    </>
  );
}
