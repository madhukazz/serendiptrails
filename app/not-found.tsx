'use client'
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import { useRouter } from "next/navigation";

const NotFound = () => {

  const router = useRouter();

  return (
      <div className="h-full w-full absolute top-0 flex flex-col justify-center items-center bg-slate-100 z-50">
          <Image className="w-[450px] animate-pulse" src={Logo} alt="404 switch" />
          <h1 className="text-4xl font-bold mt-4 text-secondary">Oops!</h1>
          <p className="text-lg text-secondary font-medium mt-2">
            This page does not exist or has been moved.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-6 px-6 py-2 button-style font-montserrat font-semibold text-lg rounded-lg"
          >
            Go to Home
          </button>
      </div>
  );
};

export default NotFound;