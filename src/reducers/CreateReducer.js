const recipeObj = {
  title: "",
  ingredients: [],
  instructions: [],
};
const CreateReducer = (state = recipeObj, action) => {
  switch (action.type) {
    case "RECIPE_NAME":
      return (state = { ...state, title: action.payload });
    case "ING_NAME_QUANTITY":
      var intial_data = state.ingredients;
      intial_data = [...intial_data, action.payload];
      return (state = { ...state, ingredients: intial_data });
    case "STEPNUM_DESC":
      var intial_data = state.instructions;
      intial_data = [...intial_data, action.payload];
      return (state = { ...state, instructions: intial_data });

    default:
      return state;
  }
};

export default CreateReducer;
