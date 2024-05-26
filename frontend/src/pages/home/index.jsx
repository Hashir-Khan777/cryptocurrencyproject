import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/product.action";

const Home = () => {
  const { products } = useSelector((state) => state.productReducer);
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <TrendingProjects data={products} />
      <CuratedProjects data={products} />
      <Work />
      <Category />
      <Spotlight />
      <Blog />
      {/* <Feedback /> */}
    </>
  );
};

export default Home;
