import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import type { Deck } from "../utils/models";

function DeckStudyPage() {
  const { state } = useLocation();
  const deck: Deck = state?.deck;

  const cards = deck.cards;
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!deck) {
    return <div className="text-center p-10 text-white">Deck not found</div>;
  }

  const handleAnswer = (quality: string) => {
    console.log(`User selected: ${quality}`);
    setFlipped(false);
    if (current === cards.length - 1) {
      setCompleted(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
        <div className="w-full max-w-3xl bg-green-700 rounded-xl shadow p-8 mb-10 text-center text-xl font-medium">
          🎉 You just completed the deck! 🎉
        </div>

        <Link
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          to="/"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const progress = ((current + 1) / cards.length) * 100;
  const currentCard = cards[current];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      {/* Header */}
      <div className="w-full max-w-3xl mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Studying: {deck.name}</h1>
        <p className="text-gray-400">
          Card {current + 1} of {cards.length}
        </p>
        <div className="w-full h-2 bg-gray-700 rounded-full mt-4">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        className="w-full max-w-3xl bg-gray-800 rounded-xl shadow p-8 mb-10 text-center text-xl font-medium cursor-pointer transition duration-300 hover:brightness-110"
        onClick={() => setFlipped(true)}
      >
        <p>{flipped ? currentCard.answer : currentCard.question}</p>
        <p className="text-sm text-gray-400 mt-2">
          {!flipped && " (click to flip)"}
        </p>
      </div>

      {/* Buttons */}
      {flipped && (
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
            onClick={() => handleAnswer("again")}
          >
            Again
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold"
            onClick={() => handleAnswer("hard")}
          >
            Hard
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
            onClick={() => handleAnswer("good")}
          >
            Good
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
            onClick={() => handleAnswer("easy")}
          >
            Easy
          </button>
        </div>
      )}
    </div>
  );
}

export default DeckStudyPage;
