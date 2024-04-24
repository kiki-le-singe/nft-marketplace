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
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <dialog
        ref={dialogRef}
        className="relative w-4/5 max-w-[500px] h-auto max-h-[500px] border-none rounded-xl bg-white p-5 flex items-center justify-center text-6xl font-medium"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="absolute top-2.5 right-2.5 w-12 h-12 bg-transparent border-none rounded-full cursor-pointer flex items-center justify-center font-medium text-2xl hover:bg-[#eee] text-black"
        >
          x
        </button>
      </dialog>
    </div>
  );
}
