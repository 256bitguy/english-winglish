
interface item{
  id:number;
  title:string;
  subTitle:string;
}
interface Steps{
  steps:item[];
}
export const Stepper: React.FC<Steps> = ({steps}) => {
  
  return (
    <div>
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        {
          steps?.map((item)=>{
            return(
              <div>
                 <li key={item.id} className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
        <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            {item.id}
        </span>
        <span>
            <h3 className="font-medium leading-tight">{item.title}</h3>
            <p className="text-sm">{item.subTitle}</p>
        </span>
    </li>
              </div>
            )
          })
        }
      </ol>
    </div>
  )
}
