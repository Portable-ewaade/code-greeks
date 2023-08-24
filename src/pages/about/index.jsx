import { Navbar } from "@/components/common";
import { Banner, SectionThree, SectionTwo } from "@/components/about-page";

const About = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('../../../assets/banner-bg.png')",
          backgroundColor: "#121212",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Banner />
      </main>
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default About;
