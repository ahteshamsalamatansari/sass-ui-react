import Section from "./Section";
import Heading from "./Heading"

import { roadmap } from "../constants";
import { LeftLine, RightLine } from "./design/Roadmap";
const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What we're working on"/>
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap}

            </div>
        </div>    
    </Section>
  )
}

export default Roadmap