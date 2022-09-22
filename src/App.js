import { useEffect, useState } from "react";
function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [totalTip, setTotalTip] = useState(0.0);
  const [totalPerPerson, setTotalPerPerson] = useState(0.0);
  const [error, setError] = useState(false);

  const tipPercentage = [5, 10, 15, 25, 50];
  function handleCustomTip({ target }) {
    if (+target.value <= 1000) {
      setTip(0);
      setCustomTip(+target.value);
    }
  }

  function handleTipChange({ target }) {
    setCustomTip(0);
    setTip(+target.value);
  }

  function handleBillChange({ target }) {
    if (target.value.length <= 6) {
      setBill(+target.value);
    }
  }

  function handlePeopleChange({ target }) {
    if (target.value <= 200) setPeople(+target.value);
  }

  useEffect(() => {
    if ((tip || customTip) && bill && people) {
      const tipAmount = ((bill * (tip || customTip)) / 100).toFixed(2);
      setTotalTip(tipAmount);
      setTotalPerPerson((tipAmount / people).toFixed(2));
    } else {
      setTotalTip(0);
      setTotalPerPerson(0);
    }
  }, [tip, bill, people, customTip]);

  return (
    <div className="font-spacemono bg-lgc min-h-screen box-border font-bold min-w-[260px]">
      <header className="h-[20vh] py-7">
        <h1 className=" text-3xl text-center tracking-widest text-vdc">
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <main className="bg-white h-[80vh] p-8 rounded-t-3xl max-w-4xl sm:flex sm:h-[70vh] sm:justify-between sm:m-auto sm:gap-5 sm:rounded-3xl">
        <section className="sm:w-[50%] sm:flex sm:flex-col sm:justify-between">
          <div>
            <h2 className="mb-2">Bill</h2>
            <input
              type={"number"}
              placeholder={`0.00`}
              value={bill ? bill : ""}
              onChange={handleBillChange}
              className="bg-vlgc bg-[url('./assets/icon-dollar.svg')]
               bg-no-repeat p-2 w-full text-right bg-[center_left_.5rem] text-xl mb-5 text-vdc
               placeholder:text-vdc"
            />
          </div>
          <div>
            <h3 className="mb-4">Select Tip %</h3>
            <div className="flex flex-wrap justify-between gap-y-5 mb-7 sm:gap-y-2">
              {tipPercentage.map((each) => (
                <button
                  key={each}
                  value={each}
                  onClick={handleTipChange}
                  className={`w-[45%] py-2.5 rounded-md text-xl ${
                    tip === each ? `bg-primary` : `bg-vdc`
                  } text-white hover:bg-primary sm:w-[30%] `}
                >
                  {each}%
                </button>
              ))}
              <input
                type={"number"}
                placeholder="Custom"
                value={customTip ? customTip : ""}
                onChange={handleCustomTip}
                className="w-[45%] py-2.5 placeholder:text-center rounded-md text-xl hover:border-2  sm:w-[30%] bg-vlgc text-dgc font-extrabold"
              />
            </div>
          </div>
          <div>
            <div>
              <h3 className="flex justify-between">
                <span> Number of people </span>
                <span className={error ? "block text-red-600" : "hidden"}>
                  Can't be less than 1
                </span>
              </h3>
              <input
                type="number"
                placeholder="0"
                value={people ? people : ""}
                min={0}
                onBlur={
                  people <= 0 ? () => setError(true) : () => setError(false)
                }
                onChange={handlePeopleChange}
                className={`bg-vlgc bg-[url('./assets/icon-person.svg')]
             bg-no-repeat p-2 w-full text-right bg-[center_left_.5rem] text-xl mb-5 text-vdc placeholder:text-vdc ${
               error ? "border border-red-600" : null
             }`}
              />
            </div>
          </div>
        </section>
        <section className="bg-vdc p-5 pt-10 mb-4 rounded-md sm:w-[50%] sm:flex sm:flex-col sm:justify-between">
          <div>
            <div className="flex justify-between mb-6 ">
              <h3 className="text-white text-sm">Tip Amount</h3>
              <p className="text-3xl text-primary">
                ${totalTip ? totalTip : "0.00"}
              </p>
            </div>
            <div className="flex justify-between mb-6">
              <h3 className="text-white text-sm">
                Total<span className="block text-dgc text-sm">/ person</span>
              </h3>
              <p className="text-3xl text-primary">
                ${totalPerPerson ? totalPerPerson : "0.00"}
              </p>
            </div>
          </div>
          <button
            className={`w-full py-3 rounded-md sm:justify-self-end ${
              totalTip ? "bg-primary" : "bg-white opacity-20"
            }`}
          >
            Reset
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
