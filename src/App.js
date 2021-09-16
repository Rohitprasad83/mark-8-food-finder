import "./styles.css";
import { useState } from "react";

var fooditems = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🥭": "Mango",
  "🍨": "Ice Cream",
  "🍪": "Cookie",
  "🍿": "Popcorn",
  "🥚": "Egg",
  "🍕": "Pizza",
  "🍞": "Bread",
  "🧅": "Onion",
  "🥕": "Carrot",
  "🥔": "Potato",
  "🥥": "Coconut",
  "🍓": "Strawberry"
};
var foodlist = Object.keys(fooditems);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [message, setMessage] = useState("what do you want to eat? ");
  function inputHandler(event) {
    var message = "Aha! you want to eat ";
    var meaning = fooditems[event.target.value];
    if (meaning === undefined) {
      meaning = "we dont know this food";
      message = "";
    }

    setMeaning(meaning);
    setMessage(message);
  }

  function outputHandler(item) {
    var meaning = fooditems[item];
    setMessage("Aha you want to eat! ");
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Food Finder!</h1>
      <input onChange={inputHandler} />
      <div style={{ fontSize: "20px" }}>
        {message}
        {meaning}
      </div>
      <div id="output" style={{}}>
        {foodlist.map((item) => {
          return (
            <span onClick={() => outputHandler(item)} key={item}>
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
