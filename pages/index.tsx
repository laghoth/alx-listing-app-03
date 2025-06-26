import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE, PropertyProps } from "@/constants";
import Pill from "@/components/Pill";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pool",
  "Free Parking",
  "Pet Friendly",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.some(
          (cat) => cat.toLowerCase() === activeFilter.toLowerCase()
        )
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-64 md:h-96 bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      >
        <h1 className="text-4xl font-bold drop-shadow-md">
          Find your favorite place here!
        </h1>
        <p className="mt-2 text-lg drop-shadow-md">
          The best prices for over 2 million properties worldwide. othmane
          laghlimi
        </p>
      </section>

      {/* Filters */}
      <section className="flex space-x-4 px-6 py-4 overflow-x-auto bg-white">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() =>
              setActiveFilter((prev) => (prev === filter ? null : filter))
            }
          />
        ))}
      </section>

      {/* Listings */}
      <section className="px-6 py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.name}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-600">
                {property.address.city}, {property.address.country}
              </p>
              <p className="mt-2 font-bold text-blue-600">
                ${property.price} / night
              </p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
