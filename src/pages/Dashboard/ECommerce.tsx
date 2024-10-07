import CardTwo from "../../components/CardTwo";

const ECommerce = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <CardTwo/>
       
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-screen-lg'>
        {['Synonyms', 'Antonyms', 'Norman-Lewis', 'Title'].map((title, index) => (
          <div key={index} className='h-80 flex flex-col justify-between shadow-lg w-full m-5 p-5'>
            <h1 className='text-2xl text-center'>{title}</h1>
            <h1 className='text-2xl text-center'>Subtitle and extraa</h1>
            <button className='bg-gray-200 w-24 h-14 self-center rounded-lg'>Go</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ECommerce;
