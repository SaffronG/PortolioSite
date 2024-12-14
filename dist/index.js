import { get_repos } from "./service.js";
let reposDivNode = document.getElementById('repo_placeholder');
async function render_repos() {
    let repos_list = await get_repos();
    let repos = document.createElement('ul');
    repos.className = 'flex-col';
    repos_list.map((m) => {
        let ulNode = document.createElement('li');
        let repoLink = document.createElement('a');
        repoLink.textContent = m.name;
        repoLink.href = m.html_url;
        repoLink.className = 'my-2 hover:text-green-400';
        ulNode.appendChild(repoLink);
        repos.appendChild(ulNode);
    });
    reposDivNode.replaceChildren(repos);
}
render_repos();
//# sourceMappingURL=index.js.map