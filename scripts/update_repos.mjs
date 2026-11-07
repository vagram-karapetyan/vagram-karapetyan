import fs from 'node:fs';

const USERNAME = 'vagram-karapetyan';
const EXCLUDE_REPOS = new Set([USERNAME.toLowerCase()]);

async function fetchRepos() {
  const url = `https://api.github.com/users/${USERNAME}/repos?sort=pushed&direction=desc&per_page=30`;
  const headers = { 'User-Agent': 'GitHub-Action-Recent-Repos' };
  
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

function formatRepos(repos, lang = 'en') {
  if (!repos.length) {
    return lang === 'en'
      ? '*No public repositories found.*'
      : '*Публичные репозитории не найдены.*';
  }

  return repos
    .map((r) => {
      const name = r.name || '';
      const url = r.html_url || '';
      const desc = r.description || (lang === 'en' ? 'No description provided' : 'Описание отсутствует');
      const langName = r.language;
      const stars = r.stargazers_count || 0;

      const meta = [];
      if (langName) meta.push(`\`${langName}\``);
      if (stars > 0) meta.push(`⭐ ${stars}`);

      const metaStr = meta.length ? ` (${meta.join(' • ')})` : '';
      return `* [**${name}**](${url}) — ${desc}${metaStr}`;
    })
    .join('\n');
}

function updateFile(filePath, content) {
  if (!fs.existsSync(filePath)) return;

  const text = fs.readFileSync(filePath, 'utf-8');
  const regex = /(<!-- RECENT_REPOS:START -->)[\s\S]*?(<!-- RECENT_REPOS:END -->)/;

  if (!regex.test(text)) return;

  const updated = text.replace(regex, `$1\n${content}\n$2`);
  fs.writeFileSync(filePath, updated, 'utf-8');
}

async function main() {
  try {
    const repos = await fetchRepos();
    const filtered = repos.filter(
      (r) =>
        !EXCLUDE_REPOS.has(r.name.toLowerCase()) &&
        !r.fork &&
        !r.private
    );

    const topRepos = filtered.slice(0, 6);

    const enContent = formatRepos(topRepos, 'en');
    const ruContent = formatRepos(topRepos, 'ru');

    updateFile('README.md', enContent);
    updateFile('README.ru.md', ruContent);

    console.log('Successfully updated recent repositories.');
  } catch (err) {
    console.error('Error updating repos:', err);
    process.exit(1);
  }
}

main();
