import Link from "next/link";
import { ISearchData } from "../../../lib/search/types";

export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<"div">;

const SearchResult: React.FC<ISearchResult> = ({
  url,
  text,
  title,
  className,
  ...divProps
}) => {
  return (
    <div
      {...divProps}
      className={`flex flex-col w-5/6  max-w-screen-md space-y-1 ${className}`}
    >
      <Link href={url}>
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          className="cursor-pointer hover:underline"
        >
          <p>{url}</p>
          <p className="text-blue-500 text-xl">{title}</p>
        </a>
      </Link>
      <p>{text}</p>
    </div>
  );
};

export default SearchResult;
