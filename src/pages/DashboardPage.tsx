import { decks } from "../services/api";
import DeckComponent from "../components/DeckComponent";

function DashboardPage() {
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
