import NavBar from "./Components/NavBar/Navbar"
import RegisterModal from "./Components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./Components/modals/LoginModal"
import Map from "./Components/map/Map"

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen">
      <ToasterProvider/>
      <RegisterModal/>
      <LoginModal/>
      <NavBar/>
      <div className="flex flex-row-reverse ">
        <Map/>
      </div>
      </div>
    </main>
  )
}
