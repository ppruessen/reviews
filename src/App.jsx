import { useState } from "react";
import Review from "./Review";
import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const length = reviews.length;

  const changeIndex = (newIndex) => {
    newIndex = newIndex < 0 ? length - 1 : newIndex;
    setIndex(newIndex % length);
    // if (newIndex >= 0 && newIndex <= reviews.length - 1) {
    //   setIndex(newIndex);
    // }
    // else if (newIndex === 'random') {
    //   const random = Math.floor(Math.random() * (reviews.length - 1));
    //   setIndex(random);
    // }
  }

  return <main className="main">
      <Review key={review.id} review={{...review, index, length, changeIndex} }/>
    </main>;
};
export default App;
