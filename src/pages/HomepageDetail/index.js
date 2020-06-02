import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchHomepageById } from "../../store/HomepageDetails/action";
import { selectHomepageDetails } from "../../store/HomepageDetails/selector";
import Container from "react-bootstrap/Container";
import StoryCarousel from "../../components/StoryCarousel/index";
import Homepage from "../../components/Homepage/index"

// import {getAllHomepages} from "../../store/homepage/selector"
// selectHomepageDetails getAllHomepages
// import StoryCarousel from "../../components/StoryCarousel";

import HomepagesCard from "../../components/listHomepages/HomepagesCard"


export default function HomepageDetail() {

    const routeParameters = useParams();
  const ID = parseInt(routeParameters.id)
  // console.log("the chosen ID", ID);
  
  // const reduxHomepagesDetail = useSelector(selectHomepageDetails)

    const { id } = useParams();
    const homepage = useSelector(selectHomepageDetails);
 
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchHomepageById(ID));
    }, [dispatch, ID]);

    console.log ('testey',homepage);
    

    return (
    <>
    <Homepage
      id={homepage.id}
      title={homepage.title}
      description={homepage.description}
      backgroundColor={homepage.backgroundColor}
      color={homepage.color}
      showLink={false}
      // storyName={homepage.stories.name}
      // storyDescription={homepage.stories.content}
      // image={homepage.stories.imageUrl}
    />
    
      <Container>
        <StoryCarousel homepage={homepage} />
      </Container>
    </>
      )
}
