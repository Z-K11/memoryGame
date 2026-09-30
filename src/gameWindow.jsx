import { useState, useEffect } from 'react';
import './styles/gameWindow.css';
const apiKey = '57806616-e995523ccc985b5468ff7eb8b';
const images = 'gt+cars+racing';
const queryLanguage = 'en';
const safeSearch = true;
const query = `https://pixabay.com/api/?key=${apiKey}&q=${images}&lang=${queryLanguage}&safesearch=${safeSearch}&per_page=16`;
export default function GameWindow() {
  const [imgArray, setImgArray] = useState([]);
  useEffect(() => {
    fetch(query)
      .then((response) => response.json())
      .then((res) => {
        setImgArray(res.hits);
        console.log(res.hits);
      });
  }, []);
  return (
    <div className="gameWindow">
      {imgArray.map((imgObject) => {
        return (
          <div className="cardContainer" key={imgObject.id}>
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
  );
}
