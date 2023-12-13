
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center items-start">
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <div className="mt-10 flex items-center justify-center gap-x-6">
      <h1>Setup!</h1>
          <Link
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}