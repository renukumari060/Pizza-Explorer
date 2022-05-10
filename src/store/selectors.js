export const selectRestaurantsWithPizzas = (reduxState) => {
  const restaurants = reduxState.restaurants.all;
  const pizzas = reduxState.pizzas.allPizzas;

  // go through each restaurant
  const restWithPizzas = restaurants.map((rest) => {
    // for each pizza array inside a restaurant we replace it with
    // the pizza objects from the allPizzas array
    const replacePizzas = rest.pizzas.map((pId) =>
      pizzas.find((fullPizza) => pId === fullPizza.id)
    );

    // return the same restaurant obj but with a switched pizzas array
    return { ...rest, pizzas: replacePizzas };
  });
  console.log(pizzas);
  return restWithPizzas;
};

export const selectPizzasSoldByRestaurant = (restaurantId) => (reduxState) => {
  // get id's of pizzas sold
  const restaurant = reduxState.restaurants.all.find(
    (r) => r.id === restaurantId
  );

  const { allPizzas } = reduxState.pizzas;
  // replace them with the actual objects from the all pizzas array
  return restaurant.pizzas.map((pId) => allPizzas.find((p) => p.id === pId));
};
