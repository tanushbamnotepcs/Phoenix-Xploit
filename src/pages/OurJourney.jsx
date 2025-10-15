import Navbar from "../components/Navbar_Phx";
import { StarsBG } from "../components/background/StarsBG";

function OurJourney() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarsBG className="absolute inset-0 w-full h-full z-0" />
      <Navbar />
    </div>
  );
}

export default OurJourney;