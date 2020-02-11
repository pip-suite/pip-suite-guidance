// configured Rest resource
function pipGuideDataConfig(pipRestProvider: pip.rest.IRestProvider) {
    pipRestProvider.registerPagedCollection('guides', '/api/v1/guides/:guide_id');
    pipRestProvider.registerResource('guidesRandom', '/api/v1/guides/random');
}
        // this.registerRoute('get', '/guides', this.getGuides);
        // this.registerRoute('get', '/guides/random', this.getRandomGuide);
        // this.registerRoute('get', '/guides/:guide_id', this.getGuide);
        // this.registerRouteWithAuth('post', '/guides', this._auth.admin(), this.createGuide);
        // this.registerRouteWithAuth('put', '/guides/:guide_id', this._auth.admin(), this.updateGuide);
        // this.registerRouteWithAuth('del', '/guides/:guide_id', this._auth.admin(), this.deleteGuide);
angular
    .module('pipGuidance.Rest')
    .config(pipGuideDataConfig);


