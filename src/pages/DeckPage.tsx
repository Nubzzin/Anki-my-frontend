import { useParams } from "react-router-dom";

function DeckPage() {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold uppercase">
          Deck Name {useParams().id}
        </span>
      </div>
      <div>
        <p>Welcome to the deck details page!</p>
        <p>Your deck is {useParams().id}</p>
      </div>
    </>
  );
}

export default DeckPage;
