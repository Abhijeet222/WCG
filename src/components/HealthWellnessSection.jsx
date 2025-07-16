import React, { useState } from "react";
import SectorModal from "./SectorModal";

const sectors = [
  {
    name: "Hospitals & Clinics",
    image: "https://www.sanarhospitals.com/uploadedfiles/gallery/1646297376_448.jpg",
    description: "Centres offering treatment, surgeries, and medical checkups with certified staff.",
  },
  {
    name: "Gyms & Fitness Centers",
    image: "https://content.jdmagicbox.com/comp/chhatarpur/u7/9999p7682.7682.230609024220.j7u7/catalogue/my-fitness-11-gym-chhatarpur-gyms-pdzcftbxok.jpg",
    description: "Spaces with equipment and trainers to improve physical health and stamina.",
  },
  {
    name: "Spas & Wellness Retreats",
    image: "https://static01.nyt.com/images/2023/03/25/travel/wellness-retreats-aman1/wellness-retreats-aman1-superJumbo.jpg",
    description: "Relaxation destinations with therapies like massages, aroma & detox treatments.",
  },
  {
    name: "Nutrition & Supplements",
    image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-116592,resizemode-75,msid-104763914/news/international/us/dietary-supplements-how-dietary-supplements-work-and-how-are-they-produced-all-you-need-to-know.jpg",
    description: "Supplements and nutrition plans for immunity, fitness, and energy boosting.",
  },
  {
    name: "Mental Health & Therapy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCoaMsappVqRfvEquxRyAQ0GllVofmre1aA&s",
    description: "Professional therapy and mental wellness programs for stress, anxiety, and more.",
  },
  {
    name: "Home Healthcare Services",
    image: "https://samahospital.com/wp-content/uploads/2021/08/Untitled-design-14-1-1-860x500.png",
    description: "Caregivers and nurses offering home-based medical attention and assistance.",
  },
  {
    name: "Health Tech Apps",
    image: "https://www.fusioninformatics.com/blog/wp-content/uploads/2021/09/healthcare_apps_India.jpg",
    description: "Mobile apps for tracking health, prescriptions, vitals, and fitness goals.",
  },
  {
    name: "Corporate Wellness Programs",
    image: "https://cdn.corporatefinanceinstitute.com/assets/employee-wellness-programs.jpeg",
    description: "Employee-centric programs focused on physical and mental well-being.",
  },
  {
    name: "Yoga & Meditation Studios",
    image: "https://www.artofliving.org/sites/www.artofliving.org/files/styles/original_image/public/wysiwyg_imageupload/Meditation_class.jpg?itok=5YUHHVj4",
    description: "Studios providing mindful breathing, stretching, and relaxation practices.",
  },
  {
    name: "Rehabilitation Centers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bns055qi-oeMgrnPbRDgmKwXKkWTAtM72w&s",
    description: "Facilities helping recovery from injuries or substance abuse.",
  },
];

const HealthWellnessSection = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  const openModal = (sector) => setSelectedSector(sector);
  const closeModal = () => setSelectedSector(null);

  return (
    <section id="health-wellness" className="bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">
        Health & Wellness Sectors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {sectors.map((sector) => (
          <div
            key={sector.name}
            className="bg-white rounded-xl shadow-md border overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img
                src={sector.image}
                alt={sector.name}
                className="w-full h-40 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-[200px]">
              <h3 className="text-lg font-semibold text-teal-800 transition-colors duration-300 hover:text-teal-900">
                {sector.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {sector.description}
              </p>
              <button
                className="mt-4 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 hover:scale-105 transition-transform duration-200 text-sm self-start"
                onClick={() => openModal(sector)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <SectorModal sector={selectedSector} onClose={closeModal} />
    </section>
  );
};

export default HealthWellnessSection;
