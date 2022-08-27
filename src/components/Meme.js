export default function Meme() {
  return (
    <form action="">
      <input type="text" name="topText" className="textfield top-text" placeholder="Top text" />
      <input type="text" name="buttomText" className="textfield bottom-text" placeholder="Bottom text" />
      <input type="submit" className="submit" value="Get a new meme image 🖼" />
    </form>
  )
}