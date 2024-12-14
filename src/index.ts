import { get_repos } from "./service.js";

let reposDivNode: HTMLElement = document.getElementById('repo_placeholder')

async function render_repos() {
    let repos_list = await get_repos()
    let repos: HTMLUListElement = document.createElement('ul')
    repos.className = 'flex-col m-2'

    repos_list.map((m) => {
        let ulNode: HTMLLIElement = document.createElement('li')
        let linkDiv: HTMLDivElement = document.createElement('div')
        linkDiv.className = 'flex hover:text-green-400 hover:fill-green-400 content-start underline'
        let svgNode = document.createElement('div')
        svgNode.innerHTML = '<svg class="fill-green-600 size-4 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>'
        let repoLink: HTMLAnchorElement = document.createElement('a')
        repoLink.innerHTML = m.name
        repoLink.href = m.html_url
        repoLink.className = 'my-2'
        linkDiv.appendChild(svgNode)
        linkDiv.appendChild(repoLink)
        ulNode.appendChild(linkDiv)
        repos.appendChild(ulNode)
    });

    reposDivNode.replaceChildren(repos)
}

render_repos()