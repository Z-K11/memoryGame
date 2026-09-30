import { useState, useEffect } from 'react';
import './styles/gameWindow.css';
import shuffler from './shuffler.js';
const apiKey = '57806616-e995523ccc985b5468ff7eb8b';
const images = 'gt+cars+racing';
const queryLanguage = 'en';
const safeSearch = true;
const query = `https://pixabay.com/api/?key=${apiKey}&q=${images}&lang=${queryLanguage}&safesearch=${safeSearch}&per_page=16`;
export default function GameWindow() {
  const [imgArray, setImgArray] = useState([]);
  const [score, setScore] = useState(0);
  const [prev, setPrevious] = useState([]);
  useEffect(() => {
    fetch(query)
      .then((response) => response.json())
      .then((res) => {
        setImgArray(res.hits);
        console.log(res.hits);
      });
  }, []);
  function handelClick(e) {
    const card = e.target.closest('.cardContainer');
    if (!card) return;
    console.log(`card = ${card.id} previous = ${prev}`);
    console.log(card.id === prev.find((element) => element === card.id));
    if (card.id === prev.find((element) => element === card.id)) {
      setScore(0);
      setPrevious([]);
      setImgArray(shuffler(imgArray));
    } else {
      setScore((score) => score + 1);
      setPrevious([...prev, card.id]);
      setImgArray(shuffler(imgArray));
    }
  }
  return (
    <>
      <div className="scoreWindow">
        <p>Score : {score}</p>
      </div>
      <div className="gameWindow" onClick={handelClick}>
        {imgArray.map((imgObject) => {
          return (
            <div className="cardContainer" key={imgObject.id} id={imgObject.id}>
              <img
                src={imgObject.webformatURL}
                alt={imgObject.tags.split(',')[0]}
              />
              <div className="credits">
                <p>Image by :</p>
                <a href={imgObject.userURL}>{imgObject.user}</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
