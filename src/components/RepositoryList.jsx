import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";


export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);
  console.log(repositories);
  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}

      </ul>
    </section>
  );

}