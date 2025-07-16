import React, { useEffect, useState } from "react";

const SectorModal = ({ sector, onClose }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!sector) return;

    setTypedText("");
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + sector.description.charAt(index));
      index++;
      if (index === sector.description.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [sector]);

  if (!sector) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg relative animate-fadeInScale transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl transition-transform duration-200 hover:scale-125"
        >
          &times;
        </button>
        <img
          src={sector.image}
          alt={sector.name}
          className="w-full h-48 object-cover rounded mb-4 transition-transform duration-300 hover:scale-105"
        />
        <h2 className="text-2xl font-bold text-teal-700 mb-2 hover:text-teal-900 transition-colors duration-300">
          {sector.name}
        </h2>
        <p className="text-gray-700 text-sm whitespace-pre-line">
          {typedText}
          <span className="animate-blink text-teal-700 font-bold">|</span>
        </p>
      </div>
    </div>
  );
};

export default SectorModal;
