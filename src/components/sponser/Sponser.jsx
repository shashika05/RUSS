import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Brick from "./Brick";

const supabase = createClient(
  "https://tmhwmhohmordamuekswf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtaHdtaG9obW9yZGFtdWVrc3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMjY4ODYsImV4cCI6MjA0NjgwMjg4Nn0.oO7RgSYFjK8r8WhW5bcyZ_97zqEsiRGRF5er_CVrSPY"
);

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
      </div>
    </div>
  );
}

export default Sponser;
