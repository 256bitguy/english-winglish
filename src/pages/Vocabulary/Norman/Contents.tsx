export const Contents = () => {
  return (
    <div>
      <div className="flex  justify-evenly gap-5 flex-col">
        {[
          'Test your present vocabulary',
          'start building your vocabulary',
          'talk about personality',
          ' talk about doctors ',
          'Test your present vocabulary',

          'Test your present vocabulary',
          'Test your present vocabulary',
        ].map((item, index) => {
          return (
            <div className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-hash"
                >
                  <line x1="4" x2="20" y1="9" y2="9" />
                  <line x1="4" x2="20" y1="15" y2="15" />
                  <line x1="10" x2="8" y1="3" y2="21" />
                  <line x1="16" x2="14" y1="3" y2="21" />
                </svg>
              </span>
              <div>
                <h1>{item}</h1>
              </div>
            </div>
          );
        })}{' '}
      </div>
    </div>
  );
};
