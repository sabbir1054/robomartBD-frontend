import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useGetHomeDataQuery } from "../../redux/api/api";
import { backendUrl } from "../../utils/backendApiUrlProvider";
import { encryptAndStoreData } from "../../utils/encript";
import CategoryProducts from "./Sections/CategoryWiseProducts/CategoryProducts";
import Hero from "./Sections/HeroSection/Hero";
import OurCorporateClients from "./Sections/OurSupplierPartner/OurCorporateClients";
import OurSupplierNPartner from "./Sections/OurSupplierPartner/OurSupplierNPartner";
import TopBlogs from "./Sections/TopBlogs/TopBlogs";

const Home = () => {
  const [reFetch, setRefetch] = useState(false);
  const { data: homeData, isLoading, isError, error } = useGetHomeDataQuery();

  useEffect(() => {
    if (error?.status === 401 && !isLoading) {
      localStorage.removeItem("user");
      window.location.reload();
    }
  }, [error]);

  useEffect(() => {
    if (homeData) {
      fetch(`${backendUrl}/api/products`)
        .then((res) => res.json())
        .then((data) => {
          encryptAndStoreData(data);
        });
    }
  }, [homeData]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>RobomartBD-Home</title>
        <link rel="canonical" href="https://www.robomartbd.com/" />
        <meta
          name="description"
          content="Welcome to RoboMartBD, your premier destination for all things robotics. Discover a vast array of high-quality components including sensors, parts, and equipment, carefully curated to power your innovative projects. From servos to cutting-edge sensors, we offer a diverse selection to cater to every robotics enthusiast. Our commitment to quality, affordability, and expert curation sets us apart. Shop with confidence knowing you'll find the best deals and fast shipping on components engineered for excellence. Join our global community of robotics enthusiasts and embark on your DIY journey with RoboMartBD, where creativity meets technical excellence."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="keywords"
          content="RobomartBD,robomartbd.com,Robot shop,Electronics shop bd,Robotics components shop,Robotics parts, Sensors for robots, Robot components, Servo motors, Microcontrollers for robotics, Arduino kits, Raspberry Pi accessories, Motion sensors, Ultrasonic sensors, Infrared sensors, Robot chassis, Motor drivers, Wheels for robots, Robot arms, Programmable robots, Robot kits for beginners, Electronic components for robots, AI-powered robotics, Machine vision sensors, Gyroscopes for robots, Accelerometers for robotics, Distance sensors, Force sensors, Light sensors, Temperature sensors, Pressure sensors, Bluetooth modules for robots, WiFi modules for robotics, GPS modules for robots, Robot power supplies, Battery packs for robots, Soldering equipment for robotics, Prototyping boards for robots, Circuitry for robots, Robotics programming languages, Computer vision for robots, Robotics simulation software, Machine learning for robotics, Autonomous robots, Mobile robots, Robotic manipulators, Robot grippers, Voice recognition for robots, Wireless communication for robots, Robotic actuators, Haptic feedback devices for robots, Sensors for obstacle avoidance, Robotics control systems, Robot navigation algorithms, ROS (Robot Operating System), Machine vision algorithms, Computer-aided design (CAD) for robotics, 3D printing for robot components, Robot vision systems, Lidar sensors for robots, Ultraviolet sensors for robotics, Inertial measurement units (IMUs), Magnetic sensors for robots, Laser range finders for robots, Infrared thermometers for robots, Robot vacuum cleaners, Drone components, Robot toys for education, STEM robotics kits, AI-driven robotics projects, Automated guided vehicles (AGVs), Robot welding equipment, Robot spray painting systems, Robotics in healthcare, Robotic surgery equipment, Industrial automation components, Collaborative robots (cobots), Exoskeletons for robotics, Robot vision inspection systems, Robot learning algorithms, Swarm robotics, Human-robot interaction, Robot vision-guided picking systems, Robot vision-guided assembly systems, Robot coding classes, Robot competitions, Robotic art installations, Robot entertainment systems, Robot pets and companions, Educational robotics workshops, Robot app development, Robot software development kits (SDKs), Virtual reality (VR) for robotics, Augmented reality (AR) for robotics, Robot maintenance tools, Robot repair kits, Robot cleaning equipment, Robot safety systems, Robot simulation environments, Robot research and development, Robot startup innovations, Industrial robot manufacturers, Educational robot suppliers, Robot enthusiast forums, Robotics news and updates"
        />
      </Helmet>
      <Hero />
      <CategoryProducts />
      <TopBlogs />

      <OurCorporateClients />
      <OurSupplierNPartner />
      {/* <JoinOurCommunity /> */}
    </>
  );
};

export default Home;
