'use client';

import { useState, useEffect, useRef } from 'react';
import DarkModeToggle from '@/components/DarkMode';

export default function FlashcardModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    hanzi: '',
    pinyin: '',
    meaning: '',
    level: '',
  });

  const modalRef = useRef(null);

  // Close modal on ESC key press
  // useEffect(() => {
  //   function onKeyDown(e) {
  //     if (e.key === 'Escape') handleClose();
  //   }
  //   if (isOpen) window.addEventListener('keydown', onKeyDown);
  //   return () => window.removeEventListener('keydown', onKeyDown);
  // }, [isOpen, handleClose]);

  // Close modal on outside click
  function onClickOutside(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Your submit logic here (e.g., send formData somewhere)
    console.log('Flashcard created:', formData);
    handleClose();
  }

  const handleClose = () => {
    resetForm();
    onClose();
  }

  const resetForm = () => {
  setFormData({
    hanzi: "",
    pinyin: "",
    meaning: "",
    level: "",
  });
};


  if (!isOpen) return null;

  return (
    <div
      onClick={onClickOutside}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 w-full max-w-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <h2 id="modal-title" className="text-xl font-bold mb-4">
          Create New Flashcard
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
          <div className="space-y-2">
            <label htmlFor="hanzi" className="block font-medium text-white">
              Hanzi (Chinese Characters)
            </label>
            <input
              id="hanzi"
              type="text"
              value={formData.hanzi}
              onChange={(e) =>
                setFormData({ ...formData, hanzi: e.target.value })
              }
              placeholder="e.g., 你好"
              className="w-full border border-gray-300 rounded px-3 py-2 text-lg"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="pinyin" className="block font-medium text-white">
              Pinyin
            </label>
            <input
              id="pinyin"
              type="text"
              value={formData.pinyin}
              onChange={(e) =>
                setFormData({ ...formData, pinyin: e.target.value })
              }
              placeholder="e.g., nǐ hǎo"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="meaning" className="block font-medium text-white">
              English Meaning
            </label>
            <input
              id="meaning"
              type="text"
              value={formData.meaning}
              onChange={(e) =>
                setFormData({ ...formData, meaning: e.target.value })
              }
              placeholder="e.g., hello"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="level" className="block font-medium text-white">
              Difficulty Level
            </label>
            <select
              id="level"
              value={formData.level}
              onChange={(e) =>
                setFormData({ ...formData, level: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="" disabled>
                Select difficulty level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 border border-gray-400 rounded py-2 hover:bg-gray-100  text-white hover:text-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-red-600 text-white rounded py-2 hover:bg-red-700 disabled:bg-red-400"
              disabled={
                !formData.hanzi ||
                !formData.pinyin ||
                !formData.meaning ||
                !formData.level
              }
            >
              Create Flashcard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
