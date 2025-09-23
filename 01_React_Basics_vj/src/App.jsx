import Header from './components/Header';
import DestinationCard from "./components/DestinationCard"
import Footer from './components/Footer';
import './App.css'

function App() {
  // Markovo rj sa arrejom destinacija
  const destinations = [
    {
      id: 1,
      city: "Barcelona",
      country: "Španjolska",
      distanceKm: 1450,
      rating: 4.6,
      imageUrl: "https://placehold.co/400x200"
    },
    {
      id: 1,
      city: "Oslo",
      country: "Norveška",
      distanceKm: 1800,
      rating: 2.6,
      imageUrl: "https://placehold.co/400x200"
    },
    {
      id: 1,
      city: "Berlin",
      country: "Njemačka",
      distanceKm: 500,
      rating: 4.6,
      imageUrl: "https://placehold.co/400x300"
    }
  ]
  
  let destArray= destinations.map((des,index)=>(
          <DestinationCard key = {index}
            city={des.city}
            country={des.country}
            distanceKm={des.distanceKm}
            rating={des.rating}
            imageUrl={des.imageUrl}
          />
        ))
  return (
    <>
      <Header/>
      <div className="grid">
        {destArray}
        {/* <DestinationCard 
        city="Varaždin" 
        country="Croatia" 
        distanceKm={10}
        rating={5}  
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.-QX9QbgYA1udXo_o5mOL3AHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=16fd31b6a8c3786386fc4d91a32544c8b334c16fa944f3074d7b2b292813d5c5&ipo=images"/>
      <DestinationCard 
        city="Split" 
        country="Croatia" 
        distanceKm={600}
        rating={3}  
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.-QX9QbgYA1udXo_o5mOL3AHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=16fd31b6a8c3786386fc4d91a32544c8b334c16fa944f3074d7b2b292813d5c5&ipo=images"/>
      <DestinationCard 
        city="Zagreb" 
        country="Croatia" 
        distanceKm={100} 
        rating={4} 
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.-QX9QbgYA1udXo_o5mOL3AHaE8%3Fr%3D0%26pid%3DApi&f=1&ipt=16fd31b6a8c3786386fc4d91a32544c8b334c16fa944f3074d7b2b292813d5c5&ipo=images"/> */}
      </div>
      <Footer/>
    </>
  )
}

export default App
