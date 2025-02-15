import Section from './Section';
import {smallSphere} from '../assets'

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
        <div className='container relative z-2'>
            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                <img src={smallSphere} alt="" />
            </div>

        </div>
    </Section>
  )
}

export default Pricing