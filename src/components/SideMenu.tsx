import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faHotel, faUmbrella } from "@fortawesome/free-solid-svg-icons";

interface CardData {
  image: string;
  title: string;
  icon: any;
}

const cards: CardData[] = [
  {
    image: "https://picsum.photos/id/1/800/600",
    title: "CAR RENTALS",
    icon: faCar,
  },
  {
    image: "https://picsum.photos/id/2/800/600",
    title: "HOTELS",
    icon: faHotel,
  },
  {
    image: "https://picsum.photos/id/3/800/600",
    title: "TRAVEL PACKAGES",
    icon: faUmbrella,
  },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start min-h-40">
      <div className="flex flex-col gap-8">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start justify-start text-start text-white">
              <FontAwesomeIcon icon={card.icon} className="text-4xl mb-2" />
              <h2 className="text-lg font-bold">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
