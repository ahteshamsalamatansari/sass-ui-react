import Section from "./Section";
import {socials} from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 ">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block"> © {new Date().getFullYear()}. All Rights Reserved</p>
        <ul className="flex gap-5 flex-wrap">
            {socials}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
