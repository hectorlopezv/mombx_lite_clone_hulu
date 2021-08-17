import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Results from "../../components/Results";
import useQuery from "../../hooks/useQuery";
import request from "../../utils/request";
import { useEffect, useState } from "react";
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  let query = useQuery();
  const [resultsData, setresultsData] = useState<any>(null);
  const genre: string = query.get("genre") || "";
  //depending on the location.state whe fetch something
  const baseUrl = "https://api.themoviedb.org/3";
  const endPoint = `${baseUrl}${
    request[genre]?.url || request.fetchTrending.url
  }`;
  useEffect(() => {
    const fetchData = async () => {
      const data = fetch(endPoint);
      const response: any = (await data).json();
      setresultsData(await response);
    };
    fetchData();
    return () => {
      //setresultsData(null);
    };
  }, [endPoint]);
  
  return (
    <>
      <Header />
      <NavBar />
      <Results resultsData={ resultsData ? resultsData.results : []} />
    </>
  );
};

export default Home;
