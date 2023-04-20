import NavBar from "./Components/NavBar/Navbar"
import RegisterModal from "./Components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./Components/modals/LoginModal"

export default function Home() {
  return (
    <main>
      <ToasterProvider/>
      <RegisterModal/>
      <LoginModal/>
      <NavBar/>
      <h1> Hello</h1>
    </main>
  )
}
