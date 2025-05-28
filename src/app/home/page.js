// src/app/page.js or wherever you're using useSession
"use client";

import AuthButton from "@/components/AuthButton";
import Button from "@/components/Button";
import { Filter, FilterIcon, Plus, User, UserCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import FlashcardGrid from "../flashcard-grid/page";
import { useState } from "react";
import Footer from "../footer/page";
import CreateFlashcardModal from "../createflashcardmodal/page";

const sampleFlashcards = [
  {
    id: 1,
    hanzi: "你好",
    pinyin: "nǐ hǎo",
    meaning: "hello",
    level: "Beginner",
  },
  {
    id: 2,
    hanzi: "谢谢",
    pinyin: "xiè xiè",
    meaning: "thank you",
    level: "Beginner",
  },
  {
    id: 3,
    hanzi: "学习",
    pinyin: "xué xí",
    meaning: "to study",
    level: "Beginner",
  },
  {
    id: 4,
    hanzi: "朋友",
    pinyin: "péng yǒu",
    meaning: "friend",
    level: "Beginner",
  },
  {
    id: 5,
    hanzi: "工作",
    pinyin: "gōng zuò",
    meaning: "work",
    level: "Intermediate",
  },
  {
    id: 6,
    hanzi: "时间",
    pinyin: "shí jiān",
    meaning: "time",
    level: "Intermediate",
  },
  {
    id: 7,
    hanzi: "经济",
    pinyin: "jīng jì",
    meaning: "economy",
    level: "Advanced",
  },
  {
    id: 8,
    hanzi: "文化",
    pinyin: "wén huà",
    meaning: "culture",
    level: "Advanced",
  },
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Home() {
  const { data: session } = useSession();

  const [flashcards, setFlashcards] = useState(sampleFlashcards);
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredFlashcards =
    selectedLevel === "All Levels"
      ? flashcards
      : flashcards.filter((card) => card.level === selectedLevel);

  const groupedFlashcards = filteredFlashcards.reduce((groups, card) => {
    const level = card.level;
    if (!groups[level]) {
      groups[level] = [];
    }
    groups[level].push(card);
    return groups;
  }, {});

  const handleCreateFlashcard = (newCard) => {
    const id = Math.max(...flashcards.map((c) => c.id)) + 1;
    setFlashcards([...flashcards, { ...newCard, id }]);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="bg-gray-200 h-screen">
    <main className="text-black">
      <nav className="sticky top-0 z-50 bg-white shadow-md text-black px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-red-600">汉字</span> Flashcards
          </h1>
          <div className="flex space-x-6 text-lg justify-center flex-1">
            <ul className="flex space-x-6 text-lg">
              <li className="cursor-pointer hover:text-red-600">Home</li>
              <li className="cursor-pointer hover:text-red-600">Practice</li>
              <li className="cursor-pointer hover:text-red-600">Progress</li>
            </ul>
          </div>

          <Button className="!bg-white hover:!bg-gray-100 !text-black !flex !space-x-6">
            <User />
            <h2> Profile</h2>
          </Button>

          {/* <AuthButton /> */}
        </div>
      </nav>
      <div className="bg-rose-50 flex justify-between p-12 h-[25vh]">
        <div>
          {session ? (
            <p className="text-2xl font-bold">
              {session.user.name}'s Flashcards
            </p>
          ) : (
            <p className="text-2xl text-center">Please log in</p>
          )}
          <p>Master Mandarin with your personalized flashcard collection</p>
        </div>

        <div className="flex space-x-6 h-11">
          <div className="flex items-center">
            <Filter className="h-5 w-5 mr-1 text-gray-500"/>
            <select
  value={selectedLevel}
  onChange={(e) => setSelectedLevel(e.target.value)}
  className="border border-gray-200 rounded-md p-2 w-[180px] text-black"
>
  {levels.map((level) => (
    <option key={level} value={level}>
      {level}
    </option>
  ))}
</select>
          </div>

          <Button onClick={() => setIsCreateModalOpen(true)} className="flex">
            <Plus className="h-6 w-6 mr-2" /> 
            Create Flashcard
          </Button>
        </div>
      </div>

      <section>
        <div>
          {Object.keys(groupedFlashcards).length === 0 ? (
            <div className="text-center">
              <div>
                <div>📚</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No flashcards found</h3>
              <p>
                {selectedLevel === "All Levels"
                ? "Create your first flashcard to get started!"
              : `No flashcards found for ${selectedLevel} level.`}
              </p>
              <div className="flex justify-center">
                <Button onClick={() => setIsCreateModalOpen(true)}className="flex items-center">
                <Plus className="h-6 w-6 mr-2"/>
                Create Your First Flashcard
              </Button>
              </div>
              
              
            </div>
          ) : (
            <div className="space-y-8 bg-gray-200">
              {Object.entries(groupedFlashcards).map(([level, cards]) => (
                <div key={level}>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 ">{level}</h2>
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      {cards.length} {cards.length === 1 ? "card" : "cards"}</span>
                  </div>
                  <FlashcardGrid flashcards={cards} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>

    <CreateFlashcardModal 
    isOpen={isCreateModalOpen}
    onClose={() => setIsCreateModalOpen(false)}
    onSubmit={handleCreateFlashcard}
    />
    </div>
  );
}
