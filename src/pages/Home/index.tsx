import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Results from "../../components/Results";
import request from "../../utils/request";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores/helpers/use-stores";
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  //react router implementation
  //const query = useQuery();
  //const genre: string = query.get("genre") || "";

  //mobx implementation
  const {
    dataStores: { movieStore },
    uiStores: { globalView },
  } = useStores();
  // const [resultsData, setresultsData] = useState<any>(null);

  //depending on the location.state whe fetch something
  const baseUrl = "https://api.themoviedb.org/3";
  const endPoint = `${baseUrl}${
    request[globalView.genre]?.url || request.fetchTrending.url
  }`;

  useEffect(() => {
    //without mobx implementation
    // const fetchData = async () => {
    //   const data = fetch(endPoint);
    //   const response: any = (await data).json();
    //   setresultsData(await response);
    // };
    // fetchData();
    //console.log("new Endpoint", endPoint);
    movieStore.fetchMovies(endPoint);
  }, [endPoint, movieStore]);
  //console.log("movieStore", movieStore);
  //console.log("movieStore.obtainMovieList", movieStore.obtainMovieList[0]);
  return (
    <>
      <Header />
      <NavBar />
      {/* <Results resultsData={resultsData ? resultsData.results : []} /> */}
      <Results resultsData={movieStore.obtainMovieList ? movieStore.obtainMovieList : []} />
    </>
  );
};

export default observer(Home);
