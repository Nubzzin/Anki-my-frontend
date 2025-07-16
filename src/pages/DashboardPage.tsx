import { fetchDecks } from "../services/api";
import DeckComponent from "../components/DeckComponent";
import { useEffect, useState } from "react";
import type { Deck } from "../utils/models";

function DashboardPage() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decks = await fetchDecks();
        setDecks(decks);
      } catch (error) {
        console.error("Error fetching decks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
      {loading ? (
        <div className="col-span-1 sm:col-span-2 flex justify-center items-center py-10">
          <svg
            className="animate-spin h-10 w-10 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        </div>
      ) : decks.length === 0 ? (
        <div className="col-span-1 sm:col-span-2 flex justify-center">
          <div className="bg-gray-700 border border-gray-600 rounded-xl p-6 shadow-md w-full max-w-md text-center">
            <p className="text-gray-300 text-lg">No decks available</p>
          </div>
        </div>
      ) : (
        decks.map((deck) => <DeckComponent key={deck.id} deck={deck} />)
      )}
    </div>
  );
}

export default DashboardPage;
