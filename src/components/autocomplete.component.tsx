import { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { Input, Spinner, Tag } from "@chakra-ui/react";
import useFetchGithub from "../hooks/use-fetch-github.hook";
import useKeyPress from "../hooks/use-key-press.hook";
import { SearchData } from "./autocomplete.interface";
import useFocus from "../hooks/use-focus.hook";

const QUARTER_OF_A_SECOND = 250; // miliseconds

const Autocomplete = () => {
  const [search, setSearch] = useState("");
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState<SearchData | undefined>(undefined);

  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");

  const { htmlElRef, setFocus } = useFocus();

  const { fetchRepos, error, loading, setLoading, searchData, setSearchData } =
    useFetchGithub();

  const debounceFetchRepos = useCallback(
    debounce((search: string) => fetchRepos(search), QUARTER_OF_A_SECOND),
    []
  );

  const isLongQuery = search.length >= 3;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    isLongQuery && setLoading(true);
  };

  useEffect(() => {
    if (isLongQuery) {
      debounceFetchRepos(search);
    }
  }, [search]);

  useEffect(() => {
    if (!isLongQuery) {
      setSearchData([]);
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    if (searchData.length && downPress) {
      setCursor((prevState) =>
        prevState < searchData.length - 1 ? prevState + 1 : prevState
      );
      setFocus();
    }
  }, [downPress]);

  useEffect(() => {
    if (searchData.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
      setFocus();
    }
  }, [upPress]);

  useEffect(() => {
    if (searchData.length && enterPress) {
      window.location.href = searchData[cursor].url;
    }
  }, [cursor, enterPress]);

  useEffect(() => {
    if (searchData.length && hovered) {
      setCursor(searchData.indexOf(hovered));
    }
  }, [hovered]);

  return (
    <div className="autocomplete-wrapper">
      <Input
        type="search"
        placeholder="Search for GitHub repos and users..."
        value={search}
        onChange={handleOnChange}
        width={400}
        color="white"
      />
      <div className="results">
        {error && isLongQuery && <p>{error}</p>}
        {(!error && loading && <Spinner color="red.500" />) ||
          (searchData.length > 0 ? (
            <li>
              {searchData.map((item, index) => {
                return (
                  <ol key={item.id}>
                    <a
                      onMouseEnter={() => setHovered(item)}
                      onMouseLeave={() => setHovered(undefined)}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`wrapper ${index === cursor && "active"}`}
                      ref={htmlElRef}
                    >
                      <h2>{item.name}</h2>
                      <Tag variant="solid" colorScheme="teal">
                        {item.tag}
                      </Tag>
                    </a>
                  </ol>
                );
              })}
            </li>
          ) : (
            !error && isLongQuery && <p>No results.</p>
          ))}
      </div>
    </div>
  );
};

export default Autocomplete;
