import { action, makeObservable, observable } from "mobx";
import PostModel from "../models/post";

export class PostStore {
    content?: string;
    error: boolean = false;
    metadata?: PostModel;

    constructor() {
        makeObservable(this, {
            content: observable,
            error: observable,
            metadata: observable,
            fetchContent: action,
            fetchMetadata: action,
            reset: action,
        });
    }

    fetchContent = (urlId: string | undefined) => {
        if (!urlId) {
            this.error = true;
            return;
        }
        import(`../content/${urlId}.md`)
            .then((res) => fetch(res.default).then(res => res.text()))
            .then((data) => this.content = data)
            .catch(() => this.error = true);
    }

    fetchMetadata = (urlId: string | undefined, posts: PostModel[]) => {
        if (!urlId) {
            this.error = true;
            return;
        }
        const postMetadata = posts.find((p) => p.urlId === urlId);
        if (postMetadata) {
            this.metadata = postMetadata;
        } else {
            this.error = true;
        }
    }

    reset = () => {
        this.content = undefined;
        this.metadata = undefined;
        this.error = false;
    }
}