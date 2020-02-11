// configured Rest resource
function pipTipDataConfig(pipRestProvider: pip.rest.IRestProvider) {
    pipRestProvider.registerPagedCollection('tips', '/api/v1/tips/:tip_id');
    pipRestProvider.registerResource('tipsRandom', '/api/v1/tips/random');
}
        // this.registerRoute('get', '/tips', this.getTips);
        // this.registerRoute('get', '/tips/random', this.getRandomTip);
        // this.registerRoute('get', '/tips/:tip_id', this.getTip);
        // this.registerRouteWithAuth('post', '/tips', this._auth.admin(), this.createTip);
        // this.registerRouteWithAuth('put', '/tips/:tip_id', this._auth.admin(), this.updateTip);
        // this.registerRouteWithAuth('del', '/tips/:tip_id', this._auth.admin(), this.deleteTip);
angular
    .module('pipGuidance.Rest')
    .config(pipTipDataConfig);

