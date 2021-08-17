import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <NavBar />
    </>
  );
};

export default Home;
