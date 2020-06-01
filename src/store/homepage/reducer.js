const initialState=[]

export default function homepageReducer(state = initialState, action) {
    // console.log('test for reducer', action);
    switch (action.type) {
      case "FETCH_HOMEPAGES_SUCCESS": // i got a list of homepage to save (on action.payload)
      // console.log('test before the return',state);
        return [...state, ...action.payload];
      default: {
        return state;
      }
    }
  }