import { useState } from "react";
import Review from "./Review";
import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const length = reviews.length;

  const changeIndex = (change) => {
    setIndex((currentIndex) => {
      while (change === 0) {
        change = Math.floor(Math.random() * length);
      }
      const newIndex = currentIndex + change < 0 ? length - 1 : currentIndex + change;
      return newIndex % length;
    })
  }

  return <main className="main">
      <Review review={{...review, changeIndex} }/>
    </main>;
};
export default App;
