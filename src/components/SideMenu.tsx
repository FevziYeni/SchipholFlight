import React from "react"; // React kütüphanesini içe aktar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome ikonları için bileşen
import { faCar, faHotel, faUmbrella } from "@fortawesome/free-solid-svg-icons"; // Kullanılacak ikonlar

// Kart verilerini temsil eden arayüz
interface CardData {
  image: string; // Kartın resmi
  title: string; // Kartın başlığı
  icon: any; // Kartta kullanılacak ikon
}

// Kart verlerini içeren dizi
const cards: CardData[] = [
  {
    image:
      "https://images.hertz.com/rentacar/content/US/product_services/one-way-car-rentals.jpg",
    title: "CAR RENTALS",
    icon: faCar,
  },
  {
    image: "https://3.imimg.com/data3/JV/KJ/MY-15827078/hotels-booking.jpg",
    title: "HOTELS",
    icon: faHotel,
  },
  {
    image:
      "https://www.outgoingtour.com/wp-content/uploads/2021/10/tour-packages.jpg",
    title: "TRAVEL PACKAGES",
    icon: faUmbrella,
  },
];

// Ana uygulama bileşeni
const App: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start min-h-40">
      <div className="flex flex-col gap-8">
        {/* Kartlar üzerinde döngü ile gez ve her bir kartı oluştur */}
        {cards.map((card, index) => (
          <div key={index} className="relative">
            {/* Kartın resmi */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52 object-cover rounded-xl"
            />
            {/* Kartın içeriği */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start justify-start text-start text-white">
              {/* Kart ikonunu ekle */}
              <FontAwesomeIcon icon={card.icon} className="text-4xl mb-2" />
              {/* Kart başlığını ekle */}
              <h2 className="text-lg font-bold">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
