import { Item } from "./types";

export function getRandomItems(): Item[] {
  const items: Item[] = [];
  const length = Math.floor(Math.random() * 900) + 100;
  for (let i = 0; i < length; i++) {
    items.push({
      title: getRandomString(Math.floor(Math.random() * 10) + 5),
      description: getRandomString(Math.floor(Math.random() * 20) + 3),
      body: getRandomString(Math.floor(Math.random() * 400) + 100),
    });
  }
  return items;
}

function getRandomString(length: number): string {
  const symbols = 'ABCD EFGHIJK LMNOPQR STUVW XYZ _ abcde fghijkl mnopqr stuvwxyz _ 01234 56789';
  let result = '';
  const symbolsLength = symbols.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * symbolsLength);
    result += symbols[randomIndex];
  }

  return result;
}
