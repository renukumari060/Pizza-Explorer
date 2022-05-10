import "./App.css";
//import { PizzaList } from "./components/PizzaList";
import { PizzaList, AddPizzaForm, RestaurantList } from "./components";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <RestaurantList />
    </div>
  );
}

export default App;
