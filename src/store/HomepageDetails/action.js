import axios from 'axios'
import { apiUrl } from "../../config/constants";


export const HOMEPAGE_DETAILS_FETCHED = "HOMEPAGE_DETAILS_FETCHED";

//fetch the data
const homepageDetailFetched = homepage => ({
    type: HOMEPAGE_DETAILS_FETCHED,
    payload: homepage
})

// send the data to redux
export const fetchHomepageById = id => {
    return async (dispatch, getState) => {
      const response = await axios.get(`${apiUrl}/homepages/${id}`);
      console.log('you select',response);
      dispatch(homepageDetailFetched(response.data.homepage));
    };
  };