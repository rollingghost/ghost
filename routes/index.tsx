import { Head } from "$fresh/runtime.ts";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ghost</title>
      </Head>
      <div class="flex flex-col items-center justify-center h-screen">
        <div>
          <p>
            <span class="text-red-600 w-64">
              [error: {new Date().toDateString()}]:
            </span>{" "}
            <span>Cause by something</span>
          </p>
          <p class="mt">
            <span class="text-green-600">
              [info: {new Date().toDateString()}]:
            </span>{" "}
            <span>Something happened</span>
          </p>
          <p class="mt">
            <span class="text-yellow-600">
              [warn: {new Date().toDateString()}]:
            </span>{" "}
            <span>Something might happen</span>
          </p>
        </div>
      </div>
    </>
  );
}
