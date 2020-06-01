import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomepagesCard from "./components/listHomepages/HomepagesCard"
import HomepageDetail from "./pages/HomepageDetail/index"

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import {fetchHomepage} from "../src/store/homepage/action"
import {getAllHomepages} from '../src/store/homepage/selector'


const Home = () => (
  <Jumbotron>
    <h1>Home</h1>
  </Jumbotron>
);

const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);



export default function App() {

  const dispatch =useDispatch()
  const reduxHomepages = useSelector(getAllHomepages)
  
  console.log('products in component!', reduxHomepages );
  
  useEffect(() => {
   dispatch(fetchHomepage())
  }, [])

  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/homepagesDetail/:id" component={HomepageDetail} />
      </Switch>
      <h2>list of homepages</h2>
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
    </div>
  );
}
