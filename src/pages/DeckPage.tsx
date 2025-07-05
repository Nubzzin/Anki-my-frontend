import { useParams, Link } from "react-router-dom";
import { decks } from "../services/api";

function DeckPage() {
  const { id } = useParams();
  const deck = decks.find((deck) => deck.id === id);

  if (!deck) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-10 max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Oops!</h1>
          <p className="mb-6 text-gray-300">
            We couldn’t find the deck you’re looking for.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10">
        {/* Header */}
        <div className="col-span-full mb-4">
          <h1 className="text-2xl font-bold text-white">
            Welcome to <span className="text-blue-300">{deck.name}</span>!
          </h1>
          <p className="text-white mt-1">
            Here's your study progress for today.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-white">Total Cards</h2>
          <p className="text-3xl font-bold text-blue-500 mt-2">{0}</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-white">Due Today</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">{0}</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow p-6 sm:col-span-2">
          <h2 className="text-lg font-semibold text-white">Repeat Again</h2>
          <p className="text-3xl font-bold text-red-500 mt-2">{0}</p>
        </div>

        {/* Buttons */}
        <div className="col-span-full flex flex-wrap gap-4 mt-6">
          <Link
            to={`/deck/${deck.id}/study`}
            state={{ deck }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Start Studying
          </Link>
          <Link
            to={`/deck/${deck.id}/edit`}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Edit Deck
          </Link>
          <Link
            to={`/deck/${deck.id}/add-card`}
            className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Add Card
          </Link>
        </div>
      </div>
    </>
  );
}

export default DeckPage;
