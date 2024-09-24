import { configureStore } from "@reduxjs/toolkit";

export interface FlightData {
  departure: string;
  arrival: string;
  price: number;
  departureTime: string;
  arrivalTime: string;
  departureDate: string;
  arrivalDate: string;
}

export interface Filters {
  departureCity: string;
  arrivalCity: string;
  departureDate: string;
  returnDate: string;
  isRoundTrip: boolean;
}

export interface RootState {
  flights: FlightData[];
  filters: Filters;
}

const initialState: RootState = {
  flights: [
    {
      departure: "Berlin",
      arrival: "Amsterdam",
      price: 200,
      departureTime: "7:30 AM",
      arrivalTime: "9:55 AM",
      departureDate: "2026-05-15",
      arrivalDate: "2027-05-15",
    },
    {
      departure: "Amsterdam",
      arrival: "Berlin",
      price: 234,
      departureTime: "8:30 PM",
      arrivalTime: "10:25 PM",
      departureDate: "2023-05-20",
      arrivalDate: "2023-05-20",
    },
    {
      departure: "Amsterdam",
      arrival: "Berlin",
      price: 234,
      departureTime: "8:30 PM",
      arrivalTime: "10:25 PM",
      departureDate: "2023-05-20",
      arrivalDate: "2023-05-20",
    },
    {
      departure: "Amsterdam",
      arrival: "Berlin",
      price: 234,
      departureTime: "8:30 PM",
      arrivalTime: "10:25 PM",
      departureDate: "2023-05-20",
      arrivalDate: "2023-05-20",
    },
  ],
  filters: {
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
    returnDate: "",
    isRoundTrip: true,
  },
};

const flightReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_FILTERS":
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: flightReducer,
});

export default store;
