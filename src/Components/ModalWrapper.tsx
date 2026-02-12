// Components/ModalWrapper.tsx
"use client"
import dynamic from "next/dynamic";

export const Modal = dynamic(() => import("./Modal"), { ssr: false });
