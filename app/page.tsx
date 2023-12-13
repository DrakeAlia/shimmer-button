import Link from "next/link";
import { buttonVariants } from "../components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center mx-auto py-20 max-w-3x rounded-full">
      <h1 className="animate-bounce text-4xl text-gray-900 font-bold sm:text-6xl">
        Buttons!
      </h1>
      {/* < className="flex flex-col sm:flex-row gap-4 mt-10 bg-yellow-400"> */}
      <div className="flex flex-col gap-4 mt-40">
        <Link
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Button Style 1
        </Link>
        <Link
          href="#"
          className="rounded-md animate-pulse bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Button Style 2
        </Link>
        <Link
          href="#"
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-gradient-to-b from-blue-200 to-pink-300 dark:from-gray-800"
        >
          Button Style 3
        </Link>
        <Link href="#" className={buttonVariants()}>
          Button Style Shadcn
        </Link>
      </div>
    </div>
  );
}
