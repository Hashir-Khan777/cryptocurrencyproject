import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Footer, Header } from "./../components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Flex sx={{ flexDirection: "column", height: "100vh" }}>
      {isLoggedIn ? <Header /> : null}
      <Outlet />
      {isLoggedIn ? <Footer /> : null}
    </Flex>
  );
};

export default Layout;
