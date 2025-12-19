"use client";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeWrapper";
import { storage } from "@/lib/storage/client";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import { IUser } from "@/types/user";


export default function Header() {
  const { dark, toggleDark } = useContext(DarkModeContext)
  const user = storage.get<IUser>(STORAGE_KEYS.USER) || {} as IUser


  return (
    <header className='text-black bg-white  shadow-amber-50 border-b col-span-2 sticky right-0 top-0 left-50' >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <button
          onClick={() => toggleDark()}
          className="relative w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors duration-300"
        >
          <div
            className={`absolute w-5 h-5 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform duration-300 ${dark ? "translate-x-7" : "translate-x-0"
              }`}
          ></div>
        </button>
        <div>
          <h1 className="text-xl font-bold">{user.fullName}</h1>
          <p>{user.email}</p>
        </div>
      </div>
    </header>
  );
}
