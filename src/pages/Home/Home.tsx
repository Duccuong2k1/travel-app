import React from "react";
import { Banner, Footer } from "../../components";
import { FilterSearch, HowWorking } from "./components";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
        <Banner />
        <FilterSearch />
        <HowWorking />
        <Footer />
    </div>
  );
};
