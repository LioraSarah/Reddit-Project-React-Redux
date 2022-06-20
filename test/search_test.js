const assert = require('assert');
const store = require('../index.js');

describe("Search", () => {
    describe("onSearchTermChangeHandler", () => {
        it("sets the searchTerm property of the state to the user input", () => {
            
            const results = onSearchTermChangeHandler("hello");
            const storeState = store.getState();
            const term = storeState.search.searchTerm;
            
            assert.strictEqual(results, term);
        });
    });
});