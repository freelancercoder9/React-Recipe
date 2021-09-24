import { combineReducers } from "redux";
import SignUpReducer from "./SignUpReducer";
import CreateReducer from "./CreateReducer";
import SignInReducer from "./SignInReducer";
const rootReducers = combineReducers({
  signUp: SignUpReducer,
  createRecipe: CreateReducer,
  SignIn: SignInReducer,
});
export default rootReducers;
