import NavBar from "./Components/NavBar/Navbar"
import RegisterModal from "./Components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"

export default function Home() {
  return (
    <main>
      <ToasterProvider/>
      <RegisterModal/>
      <NavBar/>
    </main>
  )
}
