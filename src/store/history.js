import { createBrowserHistory, createMemoryHistory } from 'history';

const RouterHistory = typeof window !== 'undefined' ? createBrowserHistory : createMemoryHistory;

export default RouterHistory;
