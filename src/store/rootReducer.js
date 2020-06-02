import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepageReducer from "../store/homepage/reducer"
import homepageDetails from "./HomepageDetails/reducer"


export default combineReducers({
  appState,
  user,
  homepageReducer,
  homepageDetails
});
