'use client';

import Button from "@/components/Button";

export default function About() {
    return(
        <div className="bg-white text-black h-screen"> 
            <h1 className="text-center text-3xl font-bold p-8"> Why Use Pinzi Flashcards?</h1>
            <div className="flex items-center">
            
            <div className="flex space-x-6 p-3">
                <div className="rounded-md p-6 border border-gray-300">
                    {/* <icon></icon> */}
                    <h1 className="text-5xl">习</h1>
                    <h2 className="font-bold text-2xl">Learn Faster</h2>
                    <p>Interactive flashcards with Hanzi, Pinyin, and meaning all in one place</p>
                </div>
                <div className="rounded-md p-6 border border-gray-300">
                    {/* <icon></icon> */}
                    <h1 className="text-5xl">习</h1>
                    <h2 className="font-bold text-2xl">Track Progress</h2>
                    <p>Save your progress and review cards you find challenging.</p>
                </div>
                <div className="rounded-md p-6 border border-gray-300">
                    {/* <icon></icon> */}
                    <h1 className="text-5xl">习</h1>
                    <h2 className="font-bold text-2xl">Personalized Experience</h2>
                    <p>Choose difficulty levels and customize your learning journey</p>
                </div>
            </div>
        </div>
        <div className="w-full space-y-6 bg-slate-50 ">
            <h1 className="text-center text-3xl font-bold">Ready to start learning?</h1>
            <p className="text-center text-2xl">Join thousands of learners mastering Mandarin with our flashcard system.</p>
            <Button className="align-center">Get Started Now</Button>
        </div>
        </div>
        
    )
}