import "../style/Word.css";

type WordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function Word({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: WordProps) {
  return (
    <div id="word">
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
