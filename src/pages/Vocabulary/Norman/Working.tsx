import { Link } from 'react-router-dom';
import CircularProgress from '../../../components/CircularProgress';
import { Stepper } from '../../../components/Stepper';

export const Working = () => {
  const steps = [
    {
      id: 0,
      title: 'Mission',
      subTitle: "Let's see what to complete",
    },
    {
      id: 1,
      title: 'Descriptions',
      subTitle: "Let's go through each word",
    },
    {
      id: 2,
      title: 'Usages',
      subTitle: 'usages of the words',
    },
    {
      id: 3,
      title: 'Using',
      subTitle: 'using of the words',
    },
    {
      id: 4,
      title: 'Working',
      subTitle: 'Lets work with the words',
    },
  ];
  return (
    <div>
      <div>
        <Stepper steps={steps} />
        <div className="mt-10 text-center p-4">
          <h1 className="text-5xl font-semibold text-black font-satoshi">
            How to talk about personality types
          </h1>
        </div>
        <div className="w-11/12   p-5 shadow flex flex-col   justify-around  mt-14">
          <div>
            <h1 className="font-semibold m-5">
              Can you use these words in the sentences given below?
            </h1>

           
          </div>
          <div>
            <ul>
              {[
                {
                  first: 'first',
                  second: 'second second second second second second second.',
                },
                {
                  first: 'first',
                  second: 'second second second second second second second.',
                },
                {
                  first: 'first',
                  second: 'second second second second second second second.',
                },
                {
                  first: 'first',
                  second: 'second second second second second second second.',
                },
                {
                  first: 'first',
                  second: 'second second second second second second second.',
                },
                {
                  first: 'first',
                  second: 'second second second second second second second.',
                },
              ].map((word, index) => {
                return (
                  <div className="m-2">
                    <li className="flex gap-x-4 items-center justify-between text-2xl">
                      <div className='flex '>
                        <span>{index + 1}.</span>
                        <h1>{word.first} </h1>
                      </div>
                      <div className='flex'>
                        <span>{index + 1}.</span>
                        <h1>{word.second}</h1>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div>
          <ul className="ml-10 grid grid-cols-6  gap-x-4 gap-y-4 items-end">
              {[
                'one',
                'two',
                'three',
                'four',
                'five',
                'six',
                'seven',
                'eight',
                'nine',
              ].map((word, index) => {
                return (
                  <div>
                    <li>
                      <span>{index + 1}{' '}</span> 
                      <input type='number' className='w-8 h-8 border border-black ring-2'></input>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-end mt-40">
            <button className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
