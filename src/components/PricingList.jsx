import {pricing} from "../constants"


const Pricinglist = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
        {pricing.map((item)=>(
            <div id={item.id} className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8">
                <h4>{item.title}</h4>
            </div>
        ))} 
    </div>
  )
}

export default Pricinglist