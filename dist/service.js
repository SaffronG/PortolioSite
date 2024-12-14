export async function get_repos() {
    let response = await fetch('https://api.github.com/users/SaffronG/repos');
    return await response.json();
}
//# sourceMappingURL=service.js.map