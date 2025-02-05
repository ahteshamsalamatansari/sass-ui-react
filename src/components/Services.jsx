import { service1 } from '../assets';
import Heading from './Heading';
import Section from './Section';
const Services = () => {
  return (
    <Section id="How-to-use">
        <div className='container'>
            <Heading title="Generative AI is Made for Creators" text="Brainwave unlocks the potential of AI-powered applications"/>
        </div>
        <div className='relative'>
            <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                <div>
                    <img src={service1} alt="" />
                </div>
            </div>
        </div>
    </Section>

  )
}

export default Services