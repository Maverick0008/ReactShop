import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All vinyl</h1>
          <div className="search__box d-flex">
            <img src="/img/search-icon.svg" alt="Search-iron"></img>
            <input placeholder="Search..." />
          </div>
        </div>


        <div className="d-flex">
          <Card />
        </div>
      </div>

    </div>

  );
}

export default App;
