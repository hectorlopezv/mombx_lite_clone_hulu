import { useHistory } from "react-router";
export interface HeaderItemProps {
  title: string;
  Icon: any;
  genreKey: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, Icon, genreKey }) => {
  const history = useHistory();
  return (
    <div
      className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white"
      onClick={() =>
        history.push({
          pathname: "/",
          search: `${
            genreKey === "" || genreKey === undefined || genreKey === null
              ? ""
              : `genre=${genreKey}`
          }`,
          // state: { url: url },
        })
      }
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />

      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
