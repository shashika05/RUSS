import { useEffect, useState } from "react";
import supabase from "../../../supabase";

import Brick from "./Brick";
import Others from "./Others";

function Sponser() {
  const [sponsers, setSponsers] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("sponsors").select();
    setSponsers(data);
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 text-gray-800">
      <div className="container mx-auto px-4">
        <Brick sponsers={sponsers} />
        <Others />
      </div>
    </div>
  );
}

export default Sponser;
