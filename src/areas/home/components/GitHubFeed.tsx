import React, { useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faStar, faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../shared/hooks';
import { ThemeStore } from '../../shared/stores/ThemeStore';
import GitHubFeedStore from '../stores/GitHubFeedStore';
import { observer } from 'mobx-react-lite';
import { DateTime } from 'luxon'

type GitHubEventType = keyof typeof readableEventTypes;
const readableEventTypes = {
    PushEvent: 'Push',
    WatchEvent: 'Star',
    ForkEvent: 'Fork',
    DeleteEvent: 'Delete',
    CreateEvent: 'Create',
    IssuesEvent: 'Issue',
    IssueCommentEvent: 'Issue Comment',
    PullRequestEvent: 'Pull Request',
    PullRequestReviewEvent: 'Pull Request Review',
    PullRequestReviewCommentEvent: 'Pull Request Review Comment',
    ReleaseEvent: 'Release'
};

const GitHubFeed = () => {
    const themeStore = useStore(ThemeStore);
    const githubStore = useStore(GitHubFeedStore);
    useEffect(() => {
        githubStore.fetchEvents();
    }, [githubStore]);

    return (
        <div className='mt-5'>
            <h3 className='mb-2'>Recent Activity</h3>
            {githubStore.loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    <Table striped bordered hover variant={`${themeStore.darkMode ? 'dark' : ''}`}>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Repository</th>
                                <th>Details</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {githubStore.loading && <Spinner animation="border" role="status" />}
                            {!githubStore.events || githubStore.events.length === 0
                            ? <tr><td colSpan={3}>No events found.</td></tr>
                            : githubStore.events.map(event => (
                                <tr key={event.id}>
                                    <td>
                                        {event.type === 'PushEvent' && <FontAwesomeIcon icon={faCodeBranch} className='me-2' />}
                                        {event.type === 'WatchEvent' && <FontAwesomeIcon icon={faStar} className='me-2' />}
                                        {event.type === 'ForkEvent' && <FontAwesomeIcon icon={faCodeFork} className='me-2' />}
                                        {readableEventTypes.hasOwnProperty(event.type) ? readableEventTypes[event.type as GitHubEventType] : event.type}
                                    </td>
                                    <td>
                                        <a href={`https://github.com/${event.repo.name}`} target="_blank" rel="noopener noreferrer">
                                            {event.repo.name}
                                        </a>
                                    </td>
                                    <td>{event.type === 'PushEvent' && event.payload.commits ? <div>
                                        <a href={`https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`} target="_blank" rel="noopener noreferrer">
                                            {event.payload.commits[0].message}</a>
                                    </div> : ''}</td>
                                    <td>{DateTime.fromJSDate(new Date(event.created_at)).toRelative()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
}

export default observer(GitHubFeed);
