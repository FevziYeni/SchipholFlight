import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const FlightFilters: React.FC = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const dispatch = useDispatch();

  const handleFiltersChange = () => {
    dispatch({
      type: "SET_FILTERS",
      payload: {
        departureCity,
        arrivalCity,
        departureDate,
        returnDate: isRoundTrip ? returnDate : "",
        isRoundTrip,
      },
    });
  };

  const cities = ["Amsterdam", "Berlin", "London", "Paris", "Rome"];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">BOOK YOUR FLIGHT</h2>
        <div className="flex">
          <button
            onClick={() => setIsRoundTrip(true)}
            className={`px-4 py-2 font-semibold rounded-s-lg ${
              isRoundTrip
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Round trip
          </button>
          <button
            onClick={() => setIsRoundTrip(false)}
            className={`px-4 py-2 rounded-e-lg font-semibold ${
              !isRoundTrip
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            One way
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Kalkış şehri seçimi */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className="text-purple-600"
            />
          </div>
          <select
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            className="w-full pl-10 px-4 py-2 rounded-s-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="" disabled hidden></option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Varış şehri seçimi */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faPlaneArrival}
              className="text-purple-600"
            />
          </div>
          <select
            value={arrivalCity}
            onChange={(e) => setArrivalCity(e.target.value)}
            className="w-full pl-10 px-4 py-2 rounded-e-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="" disabled hidden></option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Kalkış tarihi girişi */}
        <div className="relative">
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full px-4 py-2 rounded-s-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Gidiş-dönüşse dönüş tarihi girişi */}
        {isRoundTrip && (
          <div className="relative">
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full px-4 py-2 rounded-e-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        )}
      </div>

      <button
        className="w-28 bg-purple-600 text-white py-2 rounded-lg font-semibold"
        onClick={handleFiltersChange}
      >
        Show Flights
      </button>
    </div>
  );
};

export default FlightFilters;
