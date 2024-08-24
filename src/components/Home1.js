import React from "react";
import Home from "./Home";
import Homesetion2 from "./Homesetion2";
import Homesec3 from "./Homesec3";
import Homesec4 from "./Homesec4";
import Homesec5 from "./Homesec5";
import Homesec6 from "./Homesec6";
import Ourmission from "./Ourmission";
import Donation from "./Donation";
import Home2 from "./Home2";
import { Helmet } from "react-helmet-async";

function Home1() {
  return (
    <div>
      <Helmet>
        <title>
          Welcome to Matra Chhaya Seva Sansthan foundation NGO in Lucknow{" "}
        </title>
        <meta
          name="description"
          content="Matra Chhaya Seva Sansthan Foundation (NGO) is the non profitable organization which works for women empowerment, by giving training to poor women is  Swing and Embroidery . This NGO provides food and shelter for poor people , and also donate for child education, poor girl marriage  and their livelihood."
        />
        <link rel="canonical" href="/home" />
      </Helmet>

      <Home2 />
      <Homesec3 />
      <Homesetion2 />

      <Homesec4 />
      <Ourmission />
      <Homesec5 />
      <Homesec6 />
    </div>
  );
}

export default Home1;
