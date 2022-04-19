import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Repo, SearchData, User } from "../components/autocomplete.interface";

export const BASIC_URL = "https://api.github.com/search/";
axios.defaults.baseURL = BASIC_URL;

const useFetchGithub = () => {
  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepos = async (query: string) => {
    const endpoints = [
      `repositories?q=${query}+in%3Aname&per_page=50`,
      `users?q=${query}+in%3Alogin&per_page=50`,
    ];
    await Promise.all(
      endpoints.map((endpoint) =>
        axios.get(endpoint, {
          params: {
            accept: "application/vnd.github.v3+json",
          },
        })
      )
    )
      .then(
        ([
          {
            data: { items: repos },
          },
          {
            data: { items: users },
          },
        ]) => {
          const decodedRepos = repos.map(
            (repo: Repo): SearchData => ({
              name: repo.name,
              url: repo.html_url,
              id: repo.node_id,
              tag: "Repository",
            })
          );
          const decodedUsers = users.map(
            (user: User): SearchData => ({
              name: user.login,
              url: user.html_url,
              id: user.node_id,
              tag: "User",
            })
          );

          const filteredData = [...decodedRepos, ...decodedUsers]
            .filter((value: SearchData) => value.name.match(query))
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 50);
          setSearchData(filteredData);
          setError("");
          setLoading(false);
        }
      )
      .catch((error: AxiosError) => {
        if (error.code === "403") {
          setError("You exceeded GitHub API rate limit");
        }
        setError(error.message);
      });
  };

  return { searchData, setSearchData, loading, setLoading, error, fetchRepos };
};

export default useFetchGithub;
