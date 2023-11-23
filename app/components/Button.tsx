import React, { useState, createContext } from "react";
import Image from "next/image";
const ButtonContext = createContext();
export default function Button() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  function handleOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <ButtonContext.Provider value={(isOpen, handleOpen)}>
      <button onClick={handleOpen}>
        {isOpen ? (
          <div>
            <p>our location</p>
            <Image
              src="/icon-arrow-right.svg"
              width={24}
              height={24}
              alt="arrow right"
            />
          </div>
        ) : (
          <div>
            <Image
              src="/icon-arrow-left.svg"
              width={24}
              height={24}
              alt="arrow left"
            />
            <p>our location</p>
          </div>
        )}
      </button>
    </ButtonContext.Provider>
  );
}

export { ButtonContext };
