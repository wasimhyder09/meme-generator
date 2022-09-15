import {useState, useEffect} from 'react';

export default function Meme() {
  const[meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });


  const[allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(response => setAllMemeImages(response.data.memes))
  }, [])

  function GetMemeImage() {
    const memeArray = allMemeImages
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
      topText:"",
      bottomText:""
    }))
  }
  function UpdateText(event) {
    const {name, value} = event.target
    setMeme(prevMemeData =>({
      ...prevMemeData,
      [name]: value
    }))
  }
  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          name="topText"
          className="textfield top-text"
          placeholder="Top text"
          value={meme.topText}
          onChange={UpdateText}
          />
        <input
          type="text"
          name="bottomText"
          className="textfield bottom-text"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={UpdateText}
          />
        <button onClick={GetMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        {meme.randomImage && <img src={meme.randomImage} alt="Meme image" className="meme-image" />}
        <h2 className="meme-text top">{meme.randomImage && meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.randomImage && meme.bottomText}</h2>
      </div>
    </div>
  )
}