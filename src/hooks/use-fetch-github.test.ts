import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useFetchGithub from "./use-fetch-github.hook";

const axiosMock = new MockAdapter(axios);

const mockData = [
  {
    data: {
      total_count: 12547,
      incomplete_results: false,
      items: [
        {
          id: 54173593,
          node_id: "MDEwOlJlcG9zaXRvcnk1NDE3MzU5Mw==",
          name: "storybook",
          full_name: "storybookjs/storybook",
          private: false,
          owner: {
            login: "storybookjs",
            id: 22632046,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjIyNjMyMDQ2",
            avatar_url: "https://avatars.githubusercontent.com/u/22632046?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/storybookjs",
            html_url: "https://github.com/storybookjs",
            followers_url: "https://api.github.com/users/storybookjs/followers",
            following_url:
              "https://api.github.com/users/storybookjs/following{/other_user}",
            gists_url:
              "https://api.github.com/users/storybookjs/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/storybookjs/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/storybookjs/subscriptions",
            organizations_url: "https://api.github.com/users/storybookjs/orgs",
            repos_url: "https://api.github.com/users/storybookjs/repos",
            events_url:
              "https://api.github.com/users/storybookjs/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/storybookjs/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/storybookjs/storybook",
          description:
            "📓 The UI component explorer. Develop, document, & test React, Vue, Angular, Web Components, Ember, Svelte & more!",
          fork: false,
          url: "https://api.github.com/repos/storybookjs/storybook",
          forks_url: "https://api.github.com/repos/storybookjs/storybook/forks",
          keys_url:
            "https://api.github.com/repos/storybookjs/storybook/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/storybookjs/storybook/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/storybookjs/storybook/teams",
          hooks_url: "https://api.github.com/repos/storybookjs/storybook/hooks",
          issue_events_url:
            "https://api.github.com/repos/storybookjs/storybook/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/storybookjs/storybook/events",
          assignees_url:
            "https://api.github.com/repos/storybookjs/storybook/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/storybookjs/storybook/branches{/branch}",
          tags_url: "https://api.github.com/repos/storybookjs/storybook/tags",
          blobs_url:
            "https://api.github.com/repos/storybookjs/storybook/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/storybookjs/storybook/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/storybookjs/storybook/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/storybookjs/storybook/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/storybookjs/storybook/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/storybookjs/storybook/languages",
          stargazers_url:
            "https://api.github.com/repos/storybookjs/storybook/stargazers",
          contributors_url:
            "https://api.github.com/repos/storybookjs/storybook/contributors",
          subscribers_url:
            "https://api.github.com/repos/storybookjs/storybook/subscribers",
          subscription_url:
            "https://api.github.com/repos/storybookjs/storybook/subscription",
          commits_url:
            "https://api.github.com/repos/storybookjs/storybook/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/storybookjs/storybook/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/storybookjs/storybook/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/storybookjs/storybook/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/storybookjs/storybook/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/storybookjs/storybook/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/storybookjs/storybook/merges",
          archive_url:
            "https://api.github.com/repos/storybookjs/storybook/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/storybookjs/storybook/downloads",
          issues_url:
            "https://api.github.com/repos/storybookjs/storybook/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/storybookjs/storybook/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/storybookjs/storybook/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/storybookjs/storybook/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/storybookjs/storybook/labels{/name}",
          releases_url:
            "https://api.github.com/repos/storybookjs/storybook/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/storybookjs/storybook/deployments",
          created_at: "2016-03-18T04:23:44Z",
          updated_at: "2022-04-20T13:57:31Z",
          pushed_at: "2022-04-20T14:07:39Z",
          git_url: "git://github.com/storybookjs/storybook.git",
          ssh_url: "git@github.com:storybookjs/storybook.git",
          clone_url: "https://github.com/storybookjs/storybook.git",
          svn_url: "https://github.com/storybookjs/storybook",
          homepage: "https://storybook.js.org",
          size: 490950,
          stargazers_count: 70274,
          watchers_count: 70274,
          language: "TypeScript",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 7271,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1803,
          license: {
            key: "mit",
            name: "MIT License",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
            node_id: "MDc6TGljZW5zZTEz",
          },
          allow_forking: true,
          is_template: false,
          topics: [
            "angular",
            "components",
            "design-systems",
            "documentation",
            "ember",
            "html",
            "javascript",
            "polymer",
            "react",
            "react-native",
            "storybook",
            "styleguide",
            "svelte",
            "testing",
            "typescript",
            "ui",
            "ui-components",
            "vue",
            "web-components",
            "webpack",
          ],
          visibility: "public",
          forks: 7271,
          open_issues: 1803,
          watchers: 70274,
          default_branch: "next",
          score: 1,
        },
      ],
    },
  },
  {
    data: {
      total_count: 38,
      incomplete_results: false,
      items: [
        {
          login: "storybook",
          id: 5231635,
          node_id: "MDQ6VXNlcjUyMzE2MzU=",
          avatar_url: "https://avatars.githubusercontent.com/u/5231635?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/storybook",
          html_url: "https://github.com/storybook",
          followers_url: "https://api.github.com/users/storybook/followers",
          following_url:
            "https://api.github.com/users/storybook/following{/other_user}",
          gists_url: "https://api.github.com/users/storybook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/storybook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/storybook/subscriptions",
          organizations_url: "https://api.github.com/users/storybook/orgs",
          repos_url: "https://api.github.com/users/storybook/repos",
          events_url: "https://api.github.com/users/storybook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/storybook/received_events",
          type: "User",
          site_admin: false,
          score: 1,
        },
      ],
    },
  },
];

const returnedData = [
  {
    name: "storybook",
    url: "https://github.com/storybookjs/storybook",
    id: "MDEwOlJlcG9zaXRvcnk1NDE3MzU5Mw==",
    tag: "Repository",
  },
  {
    name: "storybook",
    url: "https://github.com/storybook",
    id: "MDQ6VXNlcjUyMzE2MzU=",
    tag: "User",
  },
];

const query = "storybook";

const url = `repositories?q=${query}+in%3Aname&per_page=1`;

test("hook make request when fetchRepos method call", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useFetchGithub());
  // jest.spyOn(axios, "get").mockResolvedValueOnce(mockData);
  axiosMock.onGet(url).reply(200, mockData);

  result.current.fetchRepos(query);

  await waitForNextUpdate();

  expect(result.current.searchData).toEqual(returnedData);
});
