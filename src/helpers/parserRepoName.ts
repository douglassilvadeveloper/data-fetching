export function parserRepoName(name: string) {
  const repoName = name.replaceAll('.', ' ').replaceAll('_', ' ').replaceAll('-', ' ');
  return repoName
}