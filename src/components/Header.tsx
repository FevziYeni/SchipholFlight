import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faGift,
  faGlobe,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <header className="bg-purple-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Başlık metni */}
        <div className="text-xl font-bold">PLANE SCAPE</div>
        <nav>
          {/* Navigasyon bağlantılarının listesi */}
          <ul className="flex space-x-4">
            {/* Fırsatlar bağlantısı */}
            <li className="flex items-center">
              <FontAwesomeIcon icon={faTag} className="mr-2" />
              Deals
            </li>
            {/* Keşfet bağlantısı */}
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEarthAmericas} className="mr-2" />
              Discover
            </li>
            {/* Kullanıcı avatarı ve ismi */}
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-8">
                  <img
                    className="rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Avatar"
                  />
                </div>
              </div>
              <li className="ml-2">Discover</li>{" "}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
