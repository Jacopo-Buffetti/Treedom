import { creatBrowserHistory, createMemoryHistory } from 'history';

const RouterHistory = typeof window !== 'undefined' ? creatBrowserHistory : createMemoryHistory;

export default RouterHistory;
