import { Stepper } from '../../../components/Stepper';

export const Descriptions = () => {
  let current=0
  const steps = [
    {
      id: 0,
      title: 'Mission',
      subTitle: "Let's see what to complete",
    },{
      id: 1,
      title: 'Descriptions',
      subTitle: "The words along with the ideas",
    },
  ];
  return (
    <div>
      <div>
        <Stepper steps={steps} />
      </div>
      <div className='mt-14 text-center p-4'>
        <h1 className='text-5xl font-semibold text-black font-satoshi'>How to talk about personality types</h1>
      </div>
     {
      [1,2,3,4,5,6,7].map((item)=>{
        return(
          <div className={`${item === current ? 'block' : 'hidden'} w-11/12 shadow-4 p-8`}>
           <div  >
          <h1 className='text-3xl font-bold text-center m-5'>An Egoist</h1>
           <h1 className='text-xl font-semi-bold m-5 text-center'>Me First</h1>
           <div className='shadow-2 p-10 text-center w-full'>
           <p className='m-5 font-thin text-lg'>your attitude to life is simple, direct, and above boardyour attitude to life is simple, direct, and above boardyour attitude to life is simple, direct, and above boardyour attitude to life is simple, direct, and above boardyour attitude to life is simple, direct, and above boardyour attitude to life is simple, direct, and above boardyour attitude to life is simple, direct, and above boardyour attitude to life is simple, direct, and above boardyour attitude to life is simple, direct, and above board</p>
   
           </div>
           </div>
          
        </div>
        )
      })
     }
    </div>
  );
};
