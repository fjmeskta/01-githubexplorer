import { RepositoryItem } from "./RepositoryItem";
const repository = {
  name: 'unform',
  description: 'Forms In React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section id="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );

}