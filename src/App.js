function App() {
  const tipPercentage = ["5%", "10%", "15%", "25%", "50%", "Custom"];
  return (
    <div className="font-spacemono bg-lgc min-h-screen box-border font-bold">
      <header className="h-[20vh] py-7">
        <h1 className=" text-3xl text-center tracking-widest text-vdc">
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <main className="bg-white h-[80vh] p-8 rounded-t-3xl ">
        <section>
          <h2 className="mb-2">Bill</h2>
          <input
            type={"number"}
            value={142.55}
            className="bg-vlgc bg-[url('./assets/icon-dollar.svg')]
             bg-no-repeat py-4 w-full text-right bg-[center_left_.5rem] text-xl"
          />
          <div>
            <h3>Select Tip %</h3>
            <div>
              {tipPercentage.map((each) => (
                <button key={each}>{each}</button>
              ))}
            </div>
            <div>
              <h3>Number of people</h3>
              <input type="number" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3>
              Tip Amount<span>/ person</span>
            </h3>
            <p>$4.27</p>
          </div>
          <div>
            <h3>
              Total<span>/ person</span>
            </h3>
            <p>$32.79</p>
          </div>
          <button>Reset</button>
        </section>
      </main>
    </div>
  );
}

export default App;
