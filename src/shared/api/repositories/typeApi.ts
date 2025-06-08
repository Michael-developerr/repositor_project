export interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    html_url: string;
    repos_url: string;
    subscriptions_url: string;
}

export interface Repositotia {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
    };
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    forks_count: number;
    open_issues_count: number;
    default_branch: string;
    permissions?: {
        admin: boolean;
        push: boolean;
        pull: boolean;
    };
}
