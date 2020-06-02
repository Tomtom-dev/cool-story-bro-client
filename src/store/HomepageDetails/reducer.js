// import { HOMEPAGE_DETAILS_FETCHED } from "../HomepageDetails/action";

const HOMEPAGE_DETAILS_FETCHED = "HOMEPAGE_DETAILS_FETCHED";

const initialState = {
    stories: []
  };

  export default function homepageDetailReducer(state=initialState, {type, payload}) {
      switch(type){
        case HOMEPAGE_DETAILS_FETCHED:
            return{...state, ...payload}

        default: 
            return state;
      }
  }