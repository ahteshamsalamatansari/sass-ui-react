import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 ">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p>{new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </Section>
  );
};

export default Footer;
