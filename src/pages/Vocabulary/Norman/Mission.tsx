import CircularProgress from "../../../components/CircularProgress"
import { Stepper } from "../../../components/Stepper"

 
export const Mission = () => {
  return (
    <div >
      <Stepper />
      <div className="w-11/12 h-10/12 p-5 shadow  mt-14">
       <div className="flex justify-between items-center"> 
        <h1>{'('} Session 1-3 {')'}</h1>
        <CircularProgress percentage={50}/>
       </div>
        <div>
        <h1 className="font-bold m-5">Teaser Preview</h1>
          <h1 className="font-semibold m-5">What word best describe your personality if you:</h1>

          <ul className="ml-10">
            <li> {' '}✓ are interested solely in your own welfare?</li>
            <li>{' '}✓ are interested solely in your own welfare?</li>
            <li>{' '}✓ are interested solely in your own welfare?</li>
            <li>{' '}✓ are interested solely in your own welfare?</li>
            <li>{' '}✓ are interested solely in your own welfare?</li>
          </ul>
        </div>
       <div className="flex justify-end mt-40">
       <button className="self-end">Continue</button>
       </div>
      </div>
 </div>
  )
}

    