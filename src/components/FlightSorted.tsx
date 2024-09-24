import React from "react";

// Filtre seçenekleri için arayüz tanımı
interface FilterOption {
  label: string;
  value: string;
}

// Sıralama seçenekleri
const sortOptions: FilterOption[] = [{ label: "Lowest Price", value: "price" }];

// Uçuşlarda mevcut havayolu isimleri
const airlines = [
  "Alitalia",
  "Lufthansa",
  "Air France",
  "Brussels Airlines",
  "Air Italy",
  "Siberia",
];

const FlightSorted: React.FC = () => {
  return (
    <div className=" rounded-lg p-4 mb-4 text-xs">
      {/* Sıralama seçeneği */}
      <div className="mb-4">
        <span className="text-black block font-bold">Sort by:</span>
        <select className="border rounded-md px-2 py-1 w-full mt-1">
          {/* Sıralama seçeneklerini döngü ile listele */}
          {sortOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Varış zamanı filtresi */}
      <div className="mb-4">
        <span className="text-black font-bold">Arrival Time</span>
        <ul className="mt-2">
          <li className="flex justify-between items-center">
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-purple-600 mr-2"></span>
              5:00 AM - 11:59 AM
            </span>
          </li>
          <li className="flex justify-between items-center mt-2">
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full border border-purple-600 mr-2"></span>
              12:00 PM - 5:59 PM
            </span>
          </li>
        </ul>
      </div>

      {/* Duruş sayısı filtresi */}
      <div className="mb-4">
        <span className="text-black font-bold">Stops</span>
        <ul className="mt-2">
          <li className="flex justify-between items-center">
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-purple-600 mr-2"></span>
              Nonstop
            </span>
            <span>$230</span>
          </li>
          <li className="flex justify-between items-center mt-2">
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full mr-2 border border-purple-600"></span>
              1 Stop
            </span>
            <span>$230</span>
          </li>
          <li className="flex justify-between items-center mt-2">
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full mr-2 border border-purple-600"></span>
              2+ Stops
            </span>
            <span>$230</span>
          </li>
        </ul>
      </div>

      {/* Dahil olan havayolları */}
      <div className="mb-4">
        <span className="text-black font-bold">Airlines Included</span>
        <ul className="mt-2 text-xs">
          {airlines.map((airline, index) => (
            <li key={index} className="flex justify-between items-center mt-2">
              <span className="flex items-center">
                <span className="h-3 w-3 rounded-full mr-2 border border-purple-600"></span>
                {airline}
              </span>
              <span>$230</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightSorted;
