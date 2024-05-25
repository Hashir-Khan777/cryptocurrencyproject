/* eslint-disable no-unused-vars */
import * as React from "react";
import TrendingProjects from "./TrendingProjects";
import CuratedProjects from "./CuratedProjects";
import Spotlight from "./Spotlight";
import Blog from "./Blog";
import Category from "./Category";
import Feedback from "./Feedback";
import Work from "./Work";
import Hero from "./Hero";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Home = () => {
  // const getData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "betaLogin"));
  //   const data = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   console.log(data, "data");
  // };

  // React.useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <Hero />
      <TrendingProjects />
      <CuratedProjects />
      <Work />
      <Category />
      <Spotlight />
      <Blog />
      {/* <Feedback /> */}
    </>
  );
};

export default Home;
