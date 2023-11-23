"use client";
import React, { useState, createContext } from "react";
import Image from "next/image";
import Link from "next/link";
const ButtonContext = createContext<any>(null);
export default function Button() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <ButtonContext.Provider value={isOpen}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? (
          <Link href={`/location`}>
            <p className="uppercase">our location</p>
            <Image
              src="/icon-arrow-right.svg"
              width={24}
              height={24}
              alt="arrow right"
            />
          </Link>
        ) : (
          <Link href={`/`}>
            <Image
              className="bg-black p-6"
              src="/icon-arrow-left.svg"
              width={24}
              height={24}
              alt="arrow left"
            />
            <p className="uppercase px-8 py-6 bg-orange-300">our location</p>
          </Link>
        )}
      </button>
    </ButtonContext.Provider>
  );
}

export { ButtonContext };
