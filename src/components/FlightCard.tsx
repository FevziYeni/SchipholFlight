import React from "react";
import { useSelector } from "react-redux";
import { Filters, RootState, FlightData } from "../store";
import { ScrollArea } from "./ui/ScrollArea";

const FlightCard = () => {
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
  // useEffect(() => {
  //   const fetchFlights = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.schiphol.nl/public-flights/flights",
  //         {
  //           method: "GET",
  //           headers: {
  //             Accept: "application/json",
  //             app_id: "8ea5fc673b1c8c75072e8e1eb3c6cade",
  //             app_key: "387e12e7",
  //             ResourceVersion: "v4",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setFlights(data.flights || []);
  //         console.log(
  //           "Found " + (data.flights ? data.flights.length : 0) + " flights"
  //         );
  //       } else {
  //         console.error(
  //           "Oops something went wrong\nHttp response code: " +
  //             response.status +
  //             "\nHttp response body: " +
  //             (await response.text())
  //         );
  //       }
  //     } catch (error) {
  //       console.error("Error fetching flights:", error);
  //     }
  //   };

  //   fetchFlights();
  // }, ); //

  const handleBookFlight = async (flight: any) => {
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...flight,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  if (filteredFlights.length === 0) {
    console.log("Böyle bir bilet bulunmuyor.");
  }

  return (
    <div>
      <ScrollArea className="h-[500px] w-full rounded-md p-4">
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
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md"
                  onClick={() => handleBookFlight(flight)}
                >
                  Book Flight
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No flights found matching your criteria.</p>
        )}
      </ScrollArea>
    </div>
  );
};

export default FlightCard;
