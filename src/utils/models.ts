export class Deck {
  id: string;
  name: string;
  description: string;
  cards: Card[];

  constructor(id: string, name: string, description: string, cards: Card[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.cards = cards;
  }
}

export class Card {
  id: string;
  question: string;
  answer: string;

  constructor(id: string, question: string, answer: string) {
    this.id = id;
    this.question = question;
    this.answer = answer;
  }
}
