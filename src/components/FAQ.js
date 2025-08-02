'use client';

import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { useState } from "react";
import DarkModeToggle from "./DarkMode";



const faqs = [
  {
    question: 'Do I need to create an account to use the flashcards?',
    answer:
      'Yes. You’ll need to sign in before you can create or view flashcards. This ensures your progress and content are securely stored and personalized to your learning experience.',
  },
  {
    question: 'Can I use this without knowing any Mandarin yet?',
    answer:
      'Absolutely. The app is designed for learners at all levels, including complete beginners. The included Mandarin Rules page offers foundational guidance to help you get started with pronunciation, character structure, and tone systems.',
  },
  {
    question: 'How are the flashcards organized?',
    answer:
      'Flashcards are organized by learning level, such as HSK levels or custom difficulty categories. This allows you to filter and focus on vocabulary relevant to your current proficiency.',
  },
  {
    question: 'Can I create my own flashcards?',
    answer:
      'Yes. Once logged in, you can create flashcards using a simple form. Each flashcard includes Hanzi (Chinese characters), Pinyin (phonetic spelling), and an English translation. Your custom cards are then categorized under the level you assign them to.',
  },
  {
    question: 'What if a word has more than one meaning?',
    answer:
      'That’s completely normal. If a character or word has multiple meanings, you’re free to create separate flashcards for each definition. As long as the Hanzi, Pinyin, and English fields differ, duplicates will not be flagged.',
  },
  {
    question: 'Can I search or filter flashcards?',
    answer:
      'Yes. You can search for cards by Chinese characters, and filter by level to narrow down your study set. This helps you quickly find the vocabulary that matters most to you.',
  },
  {
    question: 'Is there a way to back up or export my cards?',
    answer:
      'Not yet — but this feature is planned for a future update. For now, your data is stored securely while you\'re logged in. Stay tuned for future enhancements including backup, export, and progress tracking tools.',
  },
];

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return(
        <div className="flex flex-col md:flex-row p-4 gap-10">
      <div className="md:w-1/3 space-y-6">
        <h5 className="text-2xl text-red-500">FAQ</h5>
        <h1 className="font-bold text-4xl">Frequently asked questions</h1>
      </div>

      <div className="md:w-2/3 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h4 className="text-lg font-medium">{faq.question}</h4>
              {openIndex === index ? <Minus /> : <Plus /> }
            </button>
            {openIndex === index && (
              <p className="mt-2 text-black">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
   );
 }
      
       