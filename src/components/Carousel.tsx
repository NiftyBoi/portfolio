import Marquee from "react-fast-marquee";

type TechItem = {
  name: string;
  img: string;
};

const Stack: TechItem[] = [
  { name: "React", img: "/logos/XD.png" },
  { name: "React", img: "/logos/XD.png" },
  { name: "React", img: "/logos/XD.png" },
  { name: "React", img: "/logos/XD.png" },
  { name: "React", img: "/logos/XD.png" },
];

const Carousel = () => {
  return (
    <div className="bg-black  py-8">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-center text-white text-2xl font-semibold mb-6">
      Tecnologías
    </h2>
    <Marquee speed={50} gradient={false}>
                    {Stack.map((tech, index) => (
                        <div key={index} className="mx-8 flex flex-col items-center justify-center">
                            <img
                                src={tech.img}
                                alt={tech.name}
                                className="h-16 grayscale hover:grayscale-0 transition duration-300"
                            />
                            <p className="text-white mt-2">{tech.name}</p> {/* Nombre technologies abajo png*/}
                        </div>
                    ))}
                </Marquee>
  </div>
</div>

  );
};

export default Carousel;
