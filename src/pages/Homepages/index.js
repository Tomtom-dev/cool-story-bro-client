import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchHomepage } from "../../store/homepage/action";
import {getAllHomepages} from "../../store/homepage/selector"
// import { selectHomepages } from "../../store/homepage/selector";
// import  {selectHomepageDetails} from "../../store/HomepageDetails/selector"


import HomepagesCard from "../../components/listHomepages/HomepagesCard"

export default function HomePages() {
  const dispatch = useDispatch();
  // const homepages = useSelector(selectHomepages);
  useEffect(() => {
    dispatch(fetchHomepage());
  }, []);

  const reduxHomepages = useSelector(getAllHomepages)
  
  // console.log('products in component!', reduxHomepages );
  
 
  return (
    <>
      <Jumbotron>
        <h1>Homepages</h1>
      </Jumbotron>
      <Container>
      {reduxHomepages.map((page)=>{
        return <div key={page.id}>
          <HomepagesCard
          id={page.id}
          title={page.title}
          description={page.description}
          bgcolor={page.backgroundColor}
          color={page.color}
          showLink={false}
          />     
        </div>
      
    })}
      </Container>
    </>
  );
}