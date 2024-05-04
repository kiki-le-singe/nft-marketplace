// How to handle modals with routing in Next.js:
// https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals
// https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals
// Example: https://github.com/vercel/nextgram/tree/main/app

"use client";

import {
  type ElementRef,
  KeyboardEventHandler,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/navigation";

export function Modal({
  children,
  slug,
}: {
  children: React.ReactNode;
  slug: number;
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    if (dialogRef.current?.open) {
      dialogRef.current?.close();
    }

    router.back();
  }

  const handleKeyDown: KeyboardEventHandler<HTMLDialogElement> = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();

      onDismiss();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onKeyDown={handleKeyDown}
      className="w-full h-full max-w-full max-h-full m-0 bg-black bg-opacity-60"
    >
      <div className="w-full h-full">
        <div className="absolute inset-0 overflow-hidden overflow-y-scroll custom-scrollbar-hide xxs:m-5 xs:m-8 sm:m-14 lg:m-[8vw] xl:m-[10vw] 2xl:m-[10vw] border border-purple-transparent rounded-xl bg-black pb-8">
          <div className="sticky top-0 z-50 p-3 flex items-center justify-between bg-black">
            <h2 className="text-2xl font-medium text-white">
              Artist: <span className="text-purple">{slug}</span>
            </h2>
            <button
              onClick={onDismiss}
              className="w-12 h-12 rounded-full cursor-pointer flex items-center justify-center font-medium text-2xl border-2 border-purple lg:hover:bg-purple active:bg-purple text-white custom-animation-scale"
            >
              x
            </button>
          </div>
          {children}
        </div>
      </div>
    </dialog>
  );
}
