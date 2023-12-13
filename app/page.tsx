import Link from "next/link";
import { buttonVariants } from "../components/ui/button";

export default function Home() {
  return (
    <div className="bg-black flex flex-col text-center items-center mx-auto py-20 max-w-3x">
      <h1 className="animate-bounce text-4xl text-gray-200 font-bold sm:text-6xl">
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
      <div className="flex flex-col gap-4 mt-10">
        {/* shimmer button example */}
        {/* <div className="not-prose max-w-screen relative flex flex-col items-center justify-center rounded-xl border bg-background p-8 md:p-16"> */}
          <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#00000055_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] lab-bg [background-size:16px_16px]"></div>
          <button className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] shadow-2xl">
            <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
              <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
              </div>
            </div>
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Shimmer Button
            </span>
            <div className="insert-0 absolute h-full w-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
            <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
          </button>
        </div>
      </div>
    // </div>
  );
}
