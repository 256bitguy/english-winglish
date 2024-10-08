import { Link } from 'react-router-dom';
import CircularProgress from '../../../components/CircularProgress';
import { Stepper } from '../../../components/Stepper';

export const Using = () => {
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
      title: 'usages',
      subTitle: 'usages of the words',
    },
    {
      id: 3,
      title: 'using',
      subTitle: 'using of the words',
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

            <ul className="ml-10 grid grid-cols-5">
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
                      <span>{index + 1}</span> {word}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className='text-center'>
              {[
                {
                    first:"first",
                    second:"second second second second second second second."
                },
                {
                    first:"first",
                    second:"second second second second second second second."
                },
                {
                    first:"first",
                    second:"second second second second second second second."
                },
                {
                    first:"first",
                    second:"second second second second second second second."
                },
                {
                    first:"first",
                    second:"second second second second second second second."
                },
                {
                    first:"first",
                    second:"second second second second second second second."
                },
              ].map((word, index) => {
                return (
                  <div className='m-2 text-center'>
                    <li className='flex gap-x-4 items-center text-2xl'>
                      <span>{index + 1}</span> 
                      {word.first}{' '}
                      <input
                type="text"
                placeholder="Type to search..."
                className="w-40 bg-transparent pr-4 pl-9 focus:outline-none"
              />                      {word.second}
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
