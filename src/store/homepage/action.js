import axios from 'axios'

export const fetchHomepagesSuccess = homepages => {
  return{
    type: "FETCH_HOMEPAGES_SUCCESS",
    payload: homepages
  }
}

export const fetchHomepage = () => async (dispatch, getstate) =>{
  try{
    const data= await axios.get('http://localhost:4000')
    console.log('data in thunk actions!', data.data);
    dispatch(fetchHomepagesSuccess(data.data))
  }catch (error){
    console.log(error); 
  }
}

// useEffect(() => {
//   const fetchData = async ()=>{
      
//   }
//   fetchData()
// }, [])

// export const fetchHomepages = () => async (dispatch, getState) => {
//     try{
//         const data = await axios.get("http://localhost:4000");
//           dispatch(productsFetched(data.data))
//     } catch (error) {
//         console.log(error);
//     }
// }