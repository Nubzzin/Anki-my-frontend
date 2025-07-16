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
  const response = await fetch(`${apiUrl}/deck`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch decks");
  }

  const data = await response.json();
  return data.map((deck: any) => new Deck(deck.id, deck.name));
}

export async function fetchCards(deckId: string): Promise<Card[]> {
  const response = await fetch(`${apiUrl}/card/${deckId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cards");
  }

  const data = await response.json();
  return data.map((card: any) => new Card(card.id, card.front, card.back));
}
