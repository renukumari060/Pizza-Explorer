export const selectRestaurants = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.all];
  return clonedArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.all.filter((r) => r.pizzas.includes(pizzaId));
};
