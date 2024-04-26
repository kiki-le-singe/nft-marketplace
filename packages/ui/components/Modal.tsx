// How to handle modals with routing in Next.js:
// https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals
// https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals
// Example: https://github.com/vercel/nextgram/tree/main/app

"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <dialog
      ref={dialogRef}
      className="w-full h-full max-w-full max-h-full m-0 bg-black bg-opacity-60"
    >
      <div className="w-full h-full">
        <div className="absolute inset-0 xxs:m-5 xs:m-8 sm:m-14 lg:m-[8vw] xl:m-[16vw] 2xl:m-[16vw] flex justify-center items-center border border-purple-transparent rounded-xl bg-black">
          {children}

          <button
            onClick={onDismiss}
            className="absolute top-4 right-4 w-12 h-12 rounded-full cursor-pointer flex items-center justify-center font-medium text-2xl border-2 border-purple lg:hover:bg-purple active:bg-purple text-white custom-animation-scale"
          >
            x
          </button>
        </div>
      </div>
    </dialog>
  );
}
