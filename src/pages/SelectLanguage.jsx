import React, { useState, useEffect } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const SelectLanguage = () => {
  const fullLanguages = [
    "English (Australia)",
    "English (Canada)",
    "English (India)",
    "English (Ireland)",
    "English (New Zealand)",
    "English (Singapore)",
    "English (South Africa)",
    "English (US)",
    "Deutsch",
    "Italiano",
    "Nederlands",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState(fullLanguages);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    setFilteredLanguages(
      fullLanguages.filter((language) =>
        language.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const navigate = useNavigate();

  return (
    <>
      <div className="m-5">
        <div className="flex justify-between items-center ">
          <Link to="#" onClick={() => navigate(-1)} className="flex-initial">
            <FiArrowLeft
              className="p-1"
              style={{
                border: "1px solid gray",
                borderRadius: "100%",
                fontSize: "32px",
              }}
            />
          </Link>
          <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
            Select Language
          </h1>
        </div>
        <div className="flex items-center gap-2 my-6 w-full">
          <div className="flex items-center bg-gray-200 px-2 rounded-lg focus-within:ring-2 focus-within:ring-black">
            <FaSearch className="text-gray-400 " />
            <input
              type="text"
              placeholder="Search"
              className="pl-2 p-1 w-full md:w-[360px] rounded-lg text-lg bg-gray-200 border-none focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaMicrophone className="text-gray-400" />
          </div>
          <Link
            to="#"
            className="text-blue-700 font-semibold pl-2"
            onClick={() => setSearchTerm("")}
          >
            Cancel
          </Link>
        </div>
      </div>
      <div className=" bg-gray-200 p-5">
        <p className="text-gray-400">Select Language</p>
      </div>
      <div className="p-4">
        <ul className="list-none p-0">
          {filteredLanguages.map((language, index) => (
            <li
              key={index}
              className={`text-lg p-3 border-b border-gray-300 cursor-pointer font-semibold text-md ${
                selectedLanguage === language
                  ? "bg-blue-700 rounded-md  text-white"
                  : ""
              }`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SelectLanguage;
