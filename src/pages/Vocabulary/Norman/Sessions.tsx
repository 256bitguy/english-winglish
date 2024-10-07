
export const Sessions = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center">
        <div className="shadow m-5 h-96 w-96 border border-secondary flex justify-center flex-col items-center">
          <h1 className="text-2xl">Session 1  </h1>
          <button>Go {'->'}</button>
        </div>
        <div className="shadow m-5 h-96 w-96 border border-secondary flex justify-center flex-col items-center">
          <h1 className="text-2xl">Session 2  </h1>
          <button>Go {'->'}</button>
        </div>
        <div className="shadow m-5 h-96 w-96 border border-secondary flex justify-center flex-col items-center">
          <h1 className="text-2xl">Session 3 </h1>
          <button>Go {'->'}</button>
        </div>
      </div>
    </div>
  )
}
