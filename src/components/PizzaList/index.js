import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { selectPizzas } from "../../store/pizzas/selectors";
import { toggleFavorites } from "../../store/user/slice";
import "./styles.scss";

const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();
  return (
    <div className="pizza-list">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <p>TODO: the list of pizzas</p>

      <ul className="pizzas">
        {pizzas.map((p) => (
          //   <li key={p.id}>

          <li
            key={p.id}
            className="pizza"
            style={{ backgroundImage: `url(${p.image})` }}
          >
            <h4>{p.name}</h4>
            {/* <button>{user.favorites.includes(p.id) ? "♥" : "♡"}</button> */}
            {/* <button onClick={() => dispatch(toggleFavorites(p.id))}> */}
            <button
              onClick={() => dispatch(toggleFavorites(p.id))}
              className={`fav-toggle ${
                user.favorites.includes(p.id) ? "fav" : ""
              }`}
            >
              {user.favorites.includes(p.id) ? "♥" : "♡"}
            </button>
            <div className="overlay">
              <p>{p.description}</p>
              <span>
                Bought: <strong>{p.bought}</strong> times!
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PizzaList };
