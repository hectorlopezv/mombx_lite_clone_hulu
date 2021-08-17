import LazyLoad from "react-lazyload";
import { ThumbUpIcon } from "@heroicons/react/outline";
export interface ThumbailProps {
  result: any;
}

const Thumbail: React.FC<ThumbailProps> = ({ result }) => {
  //console.log("resuslt", result);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="group cursor-pointer ml-2 mr-2 p-4   hover:z-50 transition duration-200 ease-in transform sm:hover:scale-105 flex-grow-0 3xl:max-w-xl">
      <LazyLoad height={100} once>
        <img
          alt="movie from "
          className="object-contain h-auto w-auto md:object-scale-down "
          src={`${baseUrl}${result.backdrop_path || result.post_path}`}
        />
      </LazyLoad>
      <div className="">
        <p className="truncate max-w-md mt-1">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center  transition duration-100 ease-in-out  opacity-0  group-hover:opacity-100">
          {" "}
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbail;
