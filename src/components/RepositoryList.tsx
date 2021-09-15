import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'
//https://api.github.com/users/LuigiGF/repos
// const repository = {
//   name: 'unform',
//   description: 'Forms in React',
//   link: 'https://github.com/LuigiGF'
// }
interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/LuigiGF/repos').then(response => response.json())
      .then(data => setRepositories(data))
  }, []); //caso esquecer o segundo parametro useeffect entra em loop, caso nao definir a segunda variável ele atualiza uma unica vez

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
      </ul>
    </section>
  );
}