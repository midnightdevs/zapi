import wordFilters from '@Core/wordFilters';

export default class Filters {
  static msgHasBadWords(text) {
    let result = text
      .split(' ')
      .filter((word) => wordFilters.badWords.includes(word.toLowerCase()));
    return !!result.length;
  }
}
