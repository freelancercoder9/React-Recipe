import { combineReducers } from "redux";
import SignUpReducer from "./SignUpReducer";
import CreateReducer from "./CreateReducer";
import SignInReducer from "./SignInReducer";
import UserSession from "./UserSession";
const rootReducers = combineReducers({
  signUp: SignUpReducer,
  createRecipe: CreateReducer,
  SignIn: SignInReducer,
  userSession: UserSession,
});
export default rootReducers;
