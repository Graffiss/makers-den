import React from "react";
import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import Autocomplete from "./autocomplete.component";
import mockAxios from "jest-mock-axios";
import { Repo } from "./autocomplete.interface";
import useFetchData, { BASIC_URL } from "../hooks/use-fetch-github.hook";

afterEach(() => {
  mockAxios.reset();
});

test("renders list of repositories", async () => {
  render(<Autocomplete />);

  const {
    result: {
      current: { fetchRepos },
    },
  } = renderHook(() => useFetchData());

  const users: Repo[] = [
    {
      node_id: "1",
      name: "John",
      html_url: "www",
    },
    {
      node_id: "2",
      name: "Andrew",
      html_url: "www",
    },
  ];
  mockAxios.get.mockResolvedValueOnce(users);

  const result = await act(async () => {
    await fetchRepos("so");
  });

  expect(mockAxios.get).toHaveBeenCalledWith(`${BASIC_URL}repositories`);
  expect(result).toEqual(users);
});
