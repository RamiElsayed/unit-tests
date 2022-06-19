class Algo {
  constructor() {}

  reverse(string = "") {
    return [...string].reverse().join("");
  }

  isPalindrome(string) {
    if (!string) {
      return false;
    }
    return (
      string.replace(/\s+/g, "") === this.reverse(string.replace(/\s+/g, ""))
    );
  }

  capitalised(string = '') {
    if (string) {
        return string
      .toLowerCase()
      .split(' ')
      .map((word) => {
        const [firstLetter, ...rest] = word;
        return [firstLetter.toUpperCase(), ...rest].join('');
      }).join(' ');
    }
    return string;
  }
}
module.exports = Algo;
