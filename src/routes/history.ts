/**
 * Create a browser history object using the "history" package.
 *
 * This module exports a browser history object that can be used to manage and
 * manipulate the browser's session history through the HTML5 History API.
 * The exported history object is created using the "history" package's
 * createBrowserHistory function.
 *
 * @module historyModule
 */

import { createBrowserHistory } from 'history';

/**
 * The browser history object.
 *
 * @typedef {Object} HistoryObject
 * @property {function} listen - Listen for changes to the current location.
 * @property {function} push - Push a new entry onto the history stack.
 * @property {function} replace - Replace the current entry on the history stack.
 * @property {function} go - Move forward or backward through the history stack.
 * @property {function} goBack - Move backward in the history stack.
 * @property {function} goForward - Move forward in the history stack.
 * @property {function} block - Block transitions to a new location.
 *
 * @author Frédéric Denis
 *
 */

/**
 * The exported browser history object.
 *
 * @type {HistoryObject}
 */
export const history = createBrowserHistory();