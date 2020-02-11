function configQuoteResources(pipRestProvider: pip.rest.IRestProvider) {
    pipRestProvider.registerPagedCollection('quotes', '/api/v1/quotes/:quote_id');
    pipRestProvider.registerResource('quotesRandom', '/api/v1/quotes/random');
}
        // this.registerRoute('get', '/quotes', this.getQuotes);
        // this.registerRoute('get', '/quotes/random', this.getRandomQuote);
        // this.registerRoute('get', '/quotes/:quote_id', this.getQuote);
        // this.registerRouteWithAuth('post', '/quotes', this._auth.admin(), this.createQuote);
        // this.registerRouteWithAuth('put', '/quotes/:quote_id', this._auth.admin(), this.updateQuote);
        // this.registerRouteWithAuth('del', '/quotes/:quote_id', this._auth.admin(), this.deleteQuote);

angular
    .module('pipGuidance.Rest')
    .config(configQuoteResources);
