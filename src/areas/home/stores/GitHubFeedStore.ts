// GitHubFeedStore.ts
import { makeAutoObservable } from 'mobx';
import { Octokit } from '@octokit/rest';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';

const username = 'trithagoras';
const octokit = new Octokit();

class GitHubFeedStore {
  events?: GetResponseDataTypeFromEndpointMethod<typeof Octokit.prototype.activity.listPublicEventsForUser>[] = undefined;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchEvents() {
    if (this.events && this.events.length > 0) {
        this.loading = false;
        return;
    }
    try {
      const { data } = await octokit.activity.listPublicEventsForUser({
        username,
      });
      this.events = data;
    } catch (error) {
      console.error('Error fetching GitHub activity:', error);
    } finally {
      this.loading = false;
    }
  }
}

export default GitHubFeedStore;