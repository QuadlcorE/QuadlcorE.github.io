import Welcome from "./components/welcomesection";
import Skillset from "./components/skillsetsection";
import Projects from "./components/projectssection";
import More from "./components/more";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Welcome/>
      <Skillset/>
      <Projects/>
      <More/>
      <Footer/>
    </div>
  );
}
