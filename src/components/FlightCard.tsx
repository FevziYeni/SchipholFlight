import React from "react";
import { useSelector } from "react-redux";
import { Filters, RootState, FlightData } from "../store";

const FlightCard: React.FC = () => {
  const flights = useSelector<RootState, FlightData[]>(
    (state) => state.flights
  );
  const filters = useSelector<RootState, Filters>((state) => state.filters);

  const filteredFlights = flights.filter((flight) => {
    const {
      departureCity,
      arrivalCity,
      departureDate,
      returnDate,
      isRoundTrip,
    } = filters;

    const flightDepartureDate = new Date(flight.departureDate);
    const flightArrivalDate = new Date(flight.arrivalDate);

    // Şehir filtreleri
    if (departureCity && flight.departure !== departureCity) return false;
    if (arrivalCity && flight.arrival !== arrivalCity) return false;

    // Tarih filtreleri
    if (departureDate) {
      const selectedDepartureDate = new Date(departureDate);
      if (flightDepartureDate < selectedDepartureDate) return false;
    }

    if (isRoundTrip && returnDate) {
      const selectedReturnDate = new Date(returnDate);
      if (flightArrivalDate > selectedReturnDate) return false;
    }

    return true;
  });

  if (filteredFlights.length === 0) {
    console.log("Böyle bir bilet bulunmuyor.");
  }

  return (
    <div>
      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight, index) => (
          <div className="bg-white rounded-md shadow-md p-4 mb-4" key={index}>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-lg font-bold">
                  {flight.departure} - {flight.arrival}
                </h3>
              </div>
              <div className="text-purple-600 font-bold">${flight.price}</div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-gray-500">Departure</p>
                <p>{flight.departureTime}</p>
                <p className="text-gray-500">Airport: {flight.departure}</p>
                <p className="text-gray-500 hidden">
                  Date: {flight.departureDate}
                </p>
                <p className="text-gray-500">
                  {filters.isRoundTrip ? "Round Trip" : "One Way"}
                </p>
              </div>
              <i className="fas fa-plane text-purple-600"></i>
              <div>
                <p className="text-gray-500">Arrival</p>
                <p>{flight.arrivalTime}</p>
                <p className="text-gray-500">Airport: {flight.arrival}</p>
                <p className="text-gray-500 hidden">
                  Date: {flight.arrivalDate}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href="#"
                className="text-purple-600 hover:text-purple-800 font-bold"
              >
                Check the details
              </a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
                Book Flight
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No flights found matching your criteria.</p>
      )}
    </div>
  );
};

export default FlightCard;
