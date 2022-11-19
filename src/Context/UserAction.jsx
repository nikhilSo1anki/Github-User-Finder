export const fetchUsers = async (name) => {
    const params = new URLSearchParams({
        q: name
    })
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params} `,{
        method: "GET",
        header: {
            Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    });

    const {items} = await response.json();
    return items;
}

export const getUser = async (name) => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${name} `,{
        method: "GET",
        header: {
            Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    });

    const data = await response.json();
    return data;
}

export const getUserRepos = async (name) => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${name}/repos`,{
        method: "GET",
        header: {
            Authorization : `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    });

    const data = await response.json();
    return data;
}