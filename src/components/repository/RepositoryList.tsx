import { parserRepoName } from "../../helpers/parserRepoName";
import { BASE_URL } from "../../hooks/baseUrl";
import { useFetch } from "../../hooks/useFetch";
import { IRepository } from "./@types";

import styles from "./Repository.module.css";

export function RepositoryList() {
  const { data: repositories, loading: loadingRepositories } = useFetch<
    IRepository[]
  >(`${BASE_URL}/repos`);

  return (
    <ul>
      {repositories?.map((repo: IRepository) => {
        return (
          <li key={repo.name} className={styles.card}>
            <a href={repo.html_url}>
              <h2 className={styles.title}>
                {parserRepoName(repo.name.toLocaleUpperCase())}
              </h2>
              <p>{repo.description}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
