import { v4 as uuidv4 } from "uuid";
import { Deck, Card } from "../utils/models";

export let decks: Deck[] = [
  new Deck(uuidv4(), "Deck 1", "Description for Deck 1", [
    new Card(uuidv4(), "Question 1", "Answer 1"),
    new Card(uuidv4(), "Question 2", "Answer 2"),
  ]),
  new Deck(uuidv4(), "Deck 2", "Description for Deck 2", [
    new Card(uuidv4(), "Question 3", "Answer 3"),
    new Card(uuidv4(), "Question 4", "Answer 4"),
  ]),
  new Deck(uuidv4(), "Deck 3", "Description for Deck 3", [
    new Card(uuidv4(), "Question 5", "Answer 5"),
    new Card(uuidv4(), "Question 6", "Answer 6"),
  ]),
  new Deck(uuidv4(), "Deck 4", "Description for Deck 4", [
    new Card(uuidv4(), "Question 7", "Answer 7"),
    new Card(uuidv4(), "Question 8", "Answer 8"),
  ]),
];

let apiUrl = "http://localhost:3000/api";

export async function fetchDecks() {
  const response = await fetch(`${apiUrl}/decks`);
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
        deck.cards.map(
          (card: any) => new Card(card.id, card.question, card.answer),
        ),
      ),
  );
}
