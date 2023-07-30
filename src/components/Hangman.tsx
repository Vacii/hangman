import "../style/Hangman.css";

const HEAD = <div id="head" />;

const BODY = <div id="body" />;

const RIGHT_ARM = <div id="right-arm" />;

const LEFT_ARM = <div id="left-arm" />;

const RIGHT_LEG = <div id="right-leg" />;

const LEFT_LEG = <div id="left-leg" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanProps = {
  numberOfGuesses: number;
};

export function Hangman({ numberOfGuesses }: HangmanProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
