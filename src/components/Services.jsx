import { service1 } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
const Services = () => {
  return (
    <Section id="How-to-use">
      <div className="container">
        <Heading
          title="Generative AI is Made for Creators"
          text="Brainwave unlocks the potential of AI-powered applications"
        />
      </div>
      <div className="relative">
        <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img
              src={service1}
              className="w-full h-full object-cover md:object-right"
              width={800}
              height={730}
              alt="Smartest AI"
            />
          </div>
          <div className="relative z-1 max-w-[17rem] h-auto">
            <h4>Smartest AI</h4>
            <p>Brainwave unlocks the potential of AI-powered applications</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
