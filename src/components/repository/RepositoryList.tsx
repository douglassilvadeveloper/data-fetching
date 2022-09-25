import { BASE_URL } from "../../hooks/baseUrl";
import { useFetch } from "../../hooks/useFetch";
import { IRepository } from "./@types";

import styles from "./Repository.module.css";

export function RepositoryList() {
  const { data: repositories, loading: loadingRepositories } = useFetch<
    IRepository[]
  >(`${BASE_URL}/repos`);

  console.log(repositories);

  return (
    <ul>
      {repositories?.map((repo: IRepository) => {
        return (
          <li key={repo.full_name} className={styles.card}>
            <a href={repo.html_url}>
              <h2>{repo.full_name}</h2>
              <p>{repo.description}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
