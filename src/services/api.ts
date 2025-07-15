// import { v4 as uuidv4 } from "uuid";
import { Deck, Card } from "../utils/models";

let apiUrl = "http://localhost:8000";

export async function loginUser(
  username: string,
  password: string,
): Promise<any> {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return await response.json();
}

export async function registerUser(
  username: string,
  password: string,
): Promise<any> {
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }

  return await response.json();
}

export async function fetchDecks(): Promise<Deck[]> {
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

export async function updateDecks(decks: Deck[]) {
  const response = await fetch(`${apiUrl}/deck`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(decks),
  });

  if (!response.ok) {
    throw new Error("Failed to update decks");
  }

  return await response.json();
}

export async function addDeck(deck: Deck) {
  const response = await fetch(`${apiUrl}/deck`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deck),
  });

  if (!response.ok) {
    throw new Error("Failed to add deck");
  }

  return await response.json();
}
