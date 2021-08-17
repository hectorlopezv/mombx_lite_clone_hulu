import useQuery from "../../hooks/useQuery";
import request from "../../utils/request";
import { useEffect, useState } from "react";
export interface ResultsProps {}
const Results: React.FC<ResultsProps> = () => {
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
      const response = (await data).json();
      setresultsData(await response);
    };
    fetchData();
    return () => {
      //setresultsData(null);
    };
  }, [endPoint]);
  console.log("resultsData", resultsData ? resultsData.results : "");

  return <div>{"results"}</div>;
};

export default Results;
