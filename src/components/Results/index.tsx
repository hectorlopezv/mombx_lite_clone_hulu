import Thumbail from "./Thumbail";
export interface ResultsProps {
  resultsData: any;
}
const Results: React.FC<ResultsProps> = ({ resultsData = [] }) => {
  return (
    <div className="m-2 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap">
      {resultsData?.map((result: any) => {
        return <Thumbail key={result.id} result={result} />;
      })}
    </div>
  );
};

export default Results;
