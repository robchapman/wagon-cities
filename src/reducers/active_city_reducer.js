const ActiveCityReducer = (state, action) => {
  if (state === undefined) {
    return { name: "", address: "", slug: "" };
  }
  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default ActiveCityReducer;
