export interface Repo {
  name: string;
  html_url: string;
  node_id: string;
}

export interface User {
  login: string;
  html_url: string;
  node_id: string;
}

export interface SearchData {
  name: string;
  url: string;
  id: string;
  tag: "User" | "Repository";
}
