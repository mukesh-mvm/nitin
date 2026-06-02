"use client";

import Image from "next/image";

const projects = [
{
id: 1,
name: "Rajnan gaw chhatisgarh",
location: "Chandigarh",
images: [
"/projects/project1/img1.jpeg",
"/projects/project1/img2.jpeg",
"/projects/project1/img3.jpeg",
"/projects/project1/img4.jpeg",
"/projects/project1/img5.jpeg",
],
},
{
id: 2,
name: "Vadodara  Mukta A2",
location: "Gujarat",
images: [
"/projects/project2/img1.jpeg",
"/projects/project2/img2.jpeg",
"/projects/project2/img3.jpeg",
"/projects/project2/img4.jpeg",
"/projects/project2/img5.jpeg",
],
},
{
id: 3,
name: "Tatanagar jharkhand",
location: "Jharkhand",
images: [
"/projects/project3/img1.jpeg",
"/projects/project3/img2.jpeg",
"/projects/project3/img3.jpeg",
"/projects/project3/img4.jpeg",
],
},
{
id: 4,
name: "Chandigarh university",
location: "Chandigarh",
images: [
"/projects/project4/img1.jpeg",
"/projects/project4/img2.jpeg",
"/projects/project4/img1.jpeg",
"/projects/project4/img2.jpeg",
],
},
{
id: 5,
name: "ViroosMiryalaguda ",
location: "Telangana",
images: [
"/projects/project5/img1.jpeg",
"/projects/project5/img2.jpeg",
"/projects/project5/img3.jpeg",
"/projects/project5/img4.jpeg",
],
},
];

export default function ProjectsSection() {
return ( <section className="bg-[#0a0a0a] py-24"> <div className="max-w-7xl mx-auto px-6">


    <div className="text-center mb-20">
      <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
        Our Work
      </span>

      <h2 className="text-white text-5xl font-bold mt-4">
        Completed Projects
      </h2>
    </div>

    {projects.map((project, index) => (
      <div
        key={project.id}
        className="mb-32"
      >
        {/* Heading */}
        <div className="mb-10">
          <p className="text-yellow-400 font-semibold">
            PROJECT {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="text-white text-4xl font-bold mt-2">
            {project.name}
          </h3>

          <p className="text-gray-400 text-lg mt-2">
            📍 {project.location}
          </p>
        </div>

        {/* Gallery */}
        <div className="grid lg:grid-cols-2 gap-4">
          
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={project.images[0]}
              alt={project.name}
              fill
              className="object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {project.images.slice(1).map((image, i) => (
              <div
                key={i}
                className="relative h-[242px] overflow-hidden rounded-3xl"
              >
                <Image
                  src={image}
                  alt={project.name}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    ))}
  </div>
</section>


);
}
