import fetchDecks from "../services/api";
import DeckComponent from "../components/DeckComponent";
import { useEffect, useState } from "react";
import type { Deck } from "../utils/models";

function DashboardPage() {
  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const decks = await fetchDecks();
      setDecks(decks);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-10">
        {decks.map((deck) => (
          <DeckComponent key={deck.id} deck={deck} />
        ))}
      </div>
    </>
  );
}

export default DashboardPage;
