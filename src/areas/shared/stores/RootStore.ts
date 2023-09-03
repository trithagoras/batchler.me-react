import { PostStore } from "../../posts/stores/PostStore";
import { ThemeStore } from "./ThemeStore";


export class RootStore {
    themeStore: ThemeStore;
    postStore: PostStore;

    constructor() {
        this.themeStore = new ThemeStore();
        this.postStore = new PostStore();
    }
}

export const rootStore = new RootStore();
export type TRootStore = InstanceType<typeof RootStore>;
