import React, { useEffect, useState } from "react";

interface Flight {
  airline: string;
  arrivalTime: string;
  departureTime: string;
  flightNumber: string;
  stops: string;
  route: string;
  main: number;
  comfort: number | null;
  first: number | null;
}

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const APP_ID = "387e12e7";
  const APP_KEY = "fb8de52edc1dc809d16737025bd7452f";

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(
          "https://api.schiphol.nl/public-flights/airlines",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              app_id: APP_ID,
              app_key: APP_KEY,
              ResourceVersion: "v4",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFlights(data.flight);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="flex justify-between items-center mb-4 bg-white p-4">
        <div className="flex items-center ">
          <h2 className=" mr-4 border border-gray rounded-md p-2 w-full text-center text-sm font-bold">
            Times
          </h2>
          <div className="mr-4 border border-gray rounded-md p-2 w-full text-center text-sm font-bold">
            Stops
          </div>
          <div className="mr-4 border border-gray rounded-md p-2 w-full text-center text-sm font-bold">
            Airlines
          </div>
          <div className="mr-4 border border-gray rounded-md p-2 w-full text-center text-sm font-bold">
            Airports
          </div>
          <div className="mr-4 border border-gray rounded-md p-2 w-full text-center text-sm font-bold">
            Amenities
          </div>
        </div>
        <div>
          <p className="text-gray-600">Avg Fare: $225</p>
        </div>
      </div>
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className=" rounded-lg shadow-md p-4 mb-4 bg-white m-12">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold">{flight.airline}</h3>
          <p className="text-gray-600">{flight.flightNumber}</p>
        </div>
        <div>
          <p className="text-gray-600">{flight.stops}</p>
          <p className="text-gray-600">{flight.route}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">
            {flight.departureTime} - {flight.arrivalTime}
          </p>
        </div>
        <div className="flex">
          {flight.main !== null && (
            <div className="px-4 py-2 bg-gray-200 rounded-lg mr-2">
              <p className="text-gray-600">${flight.main}</p>
              <p className="text-gray-600">Main</p>
            </div>
          )}
          {flight.comfort !== null && (
            <div className="px-4 py-2 bg-gray-200 rounded-lg mr-2">
              <p className="text-gray-600">${flight.comfort}</p>
              <p className="text-gray-600">Comfort</p>
            </div>
          )}
          {flight.first !== null && (
            <div className="px-4 py-2 bg-gray-200 rounded-lg">
              <p className="text-gray-600">${flight.first}</p>
              <p className="text-gray-600">First</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightList;
