import {useState} from 'react';
import memeData from "../memesData"

export default function Meme() {
  const [memeImage, setMemeImage] = useState("")
  let url;

  function GetMemeImage() {
    const memeArray = memeData.data.memes;
    const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
    url = randomMeme.url;
    setMemeImage(url);
  }
  return (
    <div className="main">
      <div className="form">
        <input type="text" name="topText" className="textfield top-text" placeholder="Top text" />
        <input type="text" name="buttomText" className="textfield bottom-text" placeholder="Bottom text" />
        <button onClick={GetMemeImage}>Get a new meme image 🖼</button>
      </div>
      {memeImage && <img src={memeImage} alt="Meme image" className="meme-image" />}
    </div>
  )
}