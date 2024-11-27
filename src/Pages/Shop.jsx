import Hero from "../Components/Hero";
import NewCollection from "../Components/NewCollection";
import Offer from "../Components/Offer";
import Popular from "../Components/Popular";


export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
    </div>
  )
}

