import logo from "../images/logo.png"

export default function Header() {
  return (
    <header>
      <img src={logo}alt="logo" className="logo" />
      <h3 className="site-name">Meme Generator</h3>
      <p className="slogan">React Learning App</p>
    </header>
  )
}