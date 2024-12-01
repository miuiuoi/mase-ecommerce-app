
import Hero from "../Components/Hero";
import NewCollection from "../Components/NewCollection";
import NewLetter from "../Components/NewLetter";
import Offer from "../Components/Offer";
import Popular from "../Components/Popular";


export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewLetter/>
      
    </div>
  )
}

