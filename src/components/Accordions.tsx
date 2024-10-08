import { ArrowDown, ArrowDown01, ArrowDownIcon } from 'lucide-react';
import React, { useState } from 'react';
interface Items{
    id:number;
    question:string;
    answers:string
}
interface ItemsProps{
    items:Items[]
}
const Accordion : React.FC<ItemsProps>= ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index : any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion" data-accordion="collapse">
      {items.map((item, index) => (
        <div key={item.id}>
          <h2 id={`accordion-heading-${item.id}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full py-5 my-4 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3 ${activeIndex === index ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white' : ''}`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-body-${item.id}`}
            >
              <span>{item.question}</span>
               <ArrowDownIcon size={20}
                className={`  transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}/>
            </button>
          </h2>
          <div id={`accordion-body-${item.id}`} className={`${activeIndex === index ? 'border border-black' : 'hidden'}`} aria-labelledby={`accordion-heading-${item.id}`}>
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 text-center dark:text-gray-400">{item.answers}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
