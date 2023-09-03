import GitHubFeedStore from "../../home/stores/GitHubFeedStore";
import { PostStore } from "../../posts/stores/PostStore";
import { ThemeStore } from "./ThemeStore";


export class RootStore {
    themeStore: ThemeStore;
    postStore: PostStore;
    githubStore: GitHubFeedStore;

    constructor() {
        this.themeStore = new ThemeStore();
        this.postStore = new PostStore();
        this.githubStore = new GitHubFeedStore();
    }
}

export const rootStore = new RootStore();
export type TRootStore = InstanceType<typeof RootStore>;
