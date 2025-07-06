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
  front: string;
  back: string;

  constructor(id: string, front: string, back: string) {
    this.id = id;
    this.front = front;
    this.back = back;
  }
}
