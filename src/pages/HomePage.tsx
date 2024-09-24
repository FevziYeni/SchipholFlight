import React from "react";
import FlightFilters from "../components/FlightFilters";
import FlightCard from "../components/FlightCard";
import SideMenu from "../components/SideMenu";
import FlightSorted from "../components/FlightSorted";
import FlightList from "../components/FlightList";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-3">
            <FlightFilters />
            <div className="flex flex-col md:flex-row mt-4">
              <div className="md:w-3/4 md:pr-4">
                <FlightCard />
              </div>
              <div className="md:w-1/4">
                <FlightSorted />
              </div>
            </div>
          </div>
          <div>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
