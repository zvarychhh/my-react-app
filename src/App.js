import "./App.css";
import Menu from "./components/menu/Menu";
import ShopCard from "./components/shop- card/ShopCard";
function App() {
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
        Page 11 of 37
      </header>
      <main>
        <section className="container">
          <div className="row col-9">
            <div className="col-sm-3">
              <ShopCard
                card={{ id: 1, title: "title 1", description: "description 1" }}
                otherval={"other"}
              />             
            </div>

            <div className="col-sm-3">
              <ShopCard
                card={{ id: 2, title: "title 2", description: "description 2" }}
                otherval={"other"}
              />             
            </div>
            <div className="col-sm-3">
              <ShopCard
                card={{ id: 3, title: "title 3", description: "description 3" }}
                otherval={"other"}
              />             
            </div>
            

          </div>
          
        </section>
      </main>
    </section>
  );
}
export default App;
