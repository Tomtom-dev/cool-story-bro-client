import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomepageById } from "../../store/HomepageDetails/action";
import { selectHomepageDetails } from "../../store/HomepageDetails/selector";

import HomepagesCard from "../../components/listHomepages/HomepagesCard"
import Container from "react-bootstrap/Container";


export default function HomepageDetail() {

    const { id } = useParams();
  const homepage = useSelector(selectHomepageDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomepageById(id));
  }, [dispatch, id]);


    return (
        <div>
            <h2>homepage Details</h2>
   
      
        </div>
    )
}
