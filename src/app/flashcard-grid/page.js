'use client';

import Button from "@/components/Button";
import { RotateCcw, Volume2 } from "lucide-react";
import { useState } from "react";

export default function FlashcardGrid({flashcards}){
    const [flippedCards, setFlippedCards] = useState(new Set ())
    const toggleFlip = (cardId) => {
        const newFlippedCards = new Set (flippedCards);
        if (newFlippedCards.has(cardId)) {
            newFlippedCards.delete(cardId);
        } else {
            newFlippedCards.add(cardId);
        }
        setFlippedCards(newFlippedCards);
    };
    const speakChinese = (text) => {
        if ("speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = "zh-CN";
            speechSynthesis.speak(utterance);
        }
    };

    return(
        <div className="bg-gray-200 min-h-screen">
        {flashcards.map((card) => {
            const isFlipped = flippedCards.has(card.id);

            return (
                <div 
                key = {card.id}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg group bg-slate-50"
                onClick={() => toggleFlip(card.id)}
                >
                    <div className="p-6 m-6 flex flex-col justify-center items-center relative">
                        {!isFlipped ? (
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-3 text-gray-900">{card.hanzi}</div>
                                <div className="text-sm text-gray-500 mb-4">Click to reveal</div>
                                <Button variant="ghost" size="sm" onClick={(e) => {e.stopPropagation(); speakChinese(card.hanzi);}} 
                                    className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Volume2 className="h-4 w-4"/></Button>
                            </div>):(
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-2 text-gray-900">{card.hanzi}</div>
                                    <div className="text-lg text-red-600 mb-2 font-medium">{card.pinyin}</div>
                                    <div className="text-gray-700 font-medium">{card.meaning}</div>
                                </div>
                            )
                        }
                        <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFlip(card.id);
                }}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <RotateCcw className="w-4 h-4"/>
              </Button>

                    </div>
                </div>
            )
        })}
      </div>
    )
}
 