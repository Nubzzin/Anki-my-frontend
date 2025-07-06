// import { v4 as uuidv4 } from "uuid";
import { Deck, Card } from "../utils/models";

let apiUrl = "http://localhost:8000";

export default async function fetchDecks(): Promise<Deck[]> {
  const response = await fetch(`${apiUrl}/deck`);
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch decks");
  }
  const data = await response.json();
  return data.map(
    (deck: any) =>
      new Deck(
        deck.id,
        deck.name,
        deck.description,
        deck.cards.map((card: any) => new Card(card.id, card.front, card.back)),
      ),
  );
}
