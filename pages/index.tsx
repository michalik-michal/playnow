import NavBar from "./Components/NavBar/Navbar"
import RegisterModal from "./Components/modals/RegisterModal"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./Components/modals/LoginModal"
import Map from "./Components/map/Map"
import ClubCell from "./Components/cells/ClubCell"
import ClubModal from "./Components/modals/ClubModal"

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen">
      <ToasterProvider/>
      <RegisterModal/>
      <LoginModal/>
      <ClubModal clubName="Blonia Sport"/>
      <NavBar/>
      <div className="flex flex-row-reverse pt-[86px]">
          <Map/>
        <div className="p-5 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 h-0 w-[60%]">
          <ClubCell name="Blonia Sport" available={["17:00 - 18:00", "19:00-20:00"]} images={["/bloniasport.webp", "/bloniasport1.jpeg"]}/>
          <ClubCell name="Blonia Juvenia" available={["19:00 - 20:00", "21:00-22:00"]} images={["/juvenia.jpeg", "/bloniasport1.jpeg"]}/>
          <ClubCell name="Tenis Kryspinow" available={["13:00 - 14:00", "20:00-21:00"]} images={["/bloniasport.webp", "/bloniasport1.jpeg"]}/>
          <ClubCell name="Sport Factory Park" available={["11:00 - 12:00", "12:00-13:00"]} images={["/sportfactory.jpeg", "/bloniasport1.jpeg"]}/>
        </div>
      </div>
      </div>
    </main>
  )
}
