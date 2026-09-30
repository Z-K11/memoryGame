import { useState, useEffect } from 'react';
const apiKey = '57806616-e995523ccc985b5468ff7eb8b';
const images = 'rally+cars';
const queryLanguage = 'en';
const safeSearch = true;
const query = `https://pixabay.com/api/?key=${apiKey}&q=${images}&lang=${queryLanguage}&safesearch=${safeSearch}&per_page=15`;
export default function GameWindow() {
  const [imgArray, setImgArray] = useState([]);
  const [apiResponse, setApiResponse] = useState();
  useEffect(() => {
    fetch(query)
      .then((response) => response.json())
      .then((res) => {
        setApiResponse(res);
        res.hits.forEach((item) => console.log(item));
      });
  }, []);
}
