(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).guidance = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attachment = (function () {
    function Attachment() {
    }
    return Attachment;
}());
exports.Attachment = Attachment;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guide = (function () {
    function Guide() {
    }
    return Guide;
}());
exports.Guide = Guide;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuideType_1 = require("./GuideType");
var GuideStatus_1 = require("./GuideStatus");
var GuideData = (function () {
    GuideData.$inject = ['pipRest', 'pipFormat'];
    function GuideData(pipRest, pipFormat) {
        "ngInject";
        this.pipRest = pipRest;
        this.pipFormat = pipFormat;
        this.RESOURCE = 'guides';
        this.RESOURCE_RANDOM = 'guidesRandom';
        this.PAGE_SIZE = 100;
        this.PAGE_START = 0;
        this.PAGE_TOTAL = true;
    }
    GuideData.prototype.readGuides = function (params, successCallback, errorCallback) {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }
        return this.pipRest.getResource(this.RESOURCE).page(params, successCallback, errorCallback);
    };
    GuideData.prototype.readRandomGuide = function (params, successCallback, errorCallback) {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }
        return this.pipRest.getResource(this.RESOURCE_RANDOM).get(params, successCallback, errorCallback);
    };
    GuideData.prototype.readIntroGuides = function (params, successCallback, errorCallback) {
        params = params || {};
        var filter = params.filter || {};
        filter.type = GuideType_1.GuideType.Introduction;
        filter.status = GuideStatus_1.GuideStatus.Completed;
        params.filer = this.pipFormat.filterToString(filter);
        return this.pipRest.getResource(this.RESOURCE).page(params, successCallback, errorCallback);
    };
    GuideData.prototype.readGuide = function (id, successCallback, errorCallback) {
        return this.pipRest.getResource(this.RESOURCE).get({ guide_id: id }, successCallback, errorCallback);
    };
    GuideData.prototype.createGuide = function (data, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).save(null, data, successCallback, errorCallback);
    };
    GuideData.prototype.updateGuide = function (id, data, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).update({ guide_id: id }, data, successCallback, errorCallback);
    };
    GuideData.prototype.deleteGuide = function (id, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).remove({ guide_id: id }, null, successCallback, errorCallback);
    };
    return GuideData;
}());
angular
    .module('pipGuideData', ['pipRest', 'pipServices'])
    .service('pipGuideData', GuideData);
},{"./GuideStatus":5,"./GuideType":6}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuidePage = (function () {
    function GuidePage() {
    }
    return GuidePage;
}());
exports.GuidePage = GuidePage;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuideStatus = (function () {
    function GuideStatus() {
    }
    return GuideStatus;
}());
GuideStatus.New = "new";
GuideStatus.Writing = "writing";
GuideStatus.Translating = "translating";
GuideStatus.Verifying = "verifying";
GuideStatus.Completed = "completed";
exports.GuideStatus = GuideStatus;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuideType = (function () {
    function GuideType() {
    }
    return GuideType;
}());
GuideType.Introduction = "introduction";
GuideType.NewRelease = "new release";
exports.GuideType = GuideType;
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MultiString = (function () {
    function MultiString() {
    }
    return MultiString;
}());
exports.MultiString = MultiString;
},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PageData = (function () {
    function PageData() {
    }
    return PageData;
}());
exports.PageData = PageData;
},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PartyReference = (function () {
    function PartyReference() {
    }
    return PartyReference;
}());
exports.PartyReference = PartyReference;
},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quote = (function () {
    function Quote() {
    }
    return Quote;
}());
exports.Quote = Quote;
},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuoteData = (function () {
    QuoteData.$inject = ['pipRest', 'pipFormat'];
    function QuoteData(pipRest, pipFormat) {
        "ngInject";
        this.pipRest = pipRest;
        this.pipFormat = pipFormat;
        this.RESOURCE = 'quotes';
        this.RESOURCE_RANDOM = 'quotesRandom';
        this.PAGE_SIZE = 100;
        this.PAGE_START = 0;
        this.PAGE_TOTAL = true;
    }
    QuoteData.prototype.readQuotes = function (params, successCallback, errorCallback) {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }
        return this.pipRest.getResource(this.RESOURCE).page(params, successCallback, errorCallback);
    };
    QuoteData.prototype.readRandomQuote = function (params, successCallback, errorCallback) {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }
        return this.pipRest.getResource(this.RESOURCE_RANDOM).get(params, successCallback, errorCallback);
    };
    QuoteData.prototype.readQuote = function (id, successCallback, errorCallback) {
        return this.pipRest.getResource(this.RESOURCE).get({ quote_id: id }, successCallback, errorCallback);
    };
    QuoteData.prototype.createQuote = function (data, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).save(null, data, successCallback, errorCallback);
    };
    QuoteData.prototype.updateQuote = function (id, data, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).update({ quote_id: id }, data, successCallback, errorCallback);
    };
    QuoteData.prototype.deleteQuote = function (id, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).remove({ quote_id: id }, null, successCallback, errorCallback);
    };
    return QuoteData;
}());
angular
    .module('pipQuoteData', ['pipRest', 'pipServices'])
    .service('pipQuoteData', QuoteData);
},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuoteStatus = (function () {
    function QuoteStatus() {
    }
    return QuoteStatus;
}());
QuoteStatus.New = "new";
QuoteStatus.Writing = "writing";
QuoteStatus.Translating = "translating";
QuoteStatus.Verifying = "verifying";
QuoteStatus.Completed = "completed";
exports.QuoteStatus = QuoteStatus;
},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tip = (function () {
    function Tip() {
    }
    return Tip;
}());
exports.Tip = Tip;
},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipData = (function () {
    TipData.$inject = ['pipRest', 'pipFormat'];
    function TipData(pipRest, pipFormat) {
        "ngInject";
        this.pipRest = pipRest;
        this.pipFormat = pipFormat;
        this.RESOURCE = 'tips';
        this.RESOURCE_RANDOM = 'tipsRandom';
        this.PAGE_SIZE = 100;
        this.PAGE_START = 0;
        this.PAGE_TOTAL = true;
    }
    TipData.prototype.readTips = function (params, successCallback, errorCallback) {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }
        return this.pipRest.getResource(this.RESOURCE).page(params, successCallback, errorCallback);
    };
    TipData.prototype.readRandomTip = function (params, successCallback, errorCallback) {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }
        return this.pipRest.getResource(this.RESOURCE_RANDOM).get(params, successCallback, errorCallback);
    };
    TipData.prototype.readTip = function (id, successCallback, errorCallback) {
        return this.pipRest.getResource(this.RESOURCE).get({ tip_id: id }, successCallback, errorCallback);
    };
    TipData.prototype.createTip = function (data, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).save(null, data, successCallback, errorCallback);
    };
    TipData.prototype.updateTip = function (id, data, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).update({ tip_id: id }, data, successCallback, errorCallback);
    };
    TipData.prototype.deleteTip = function (id, successCallback, errorCallback) {
        this.pipRest.getResource(this.RESOURCE).remove({ tip_id: id }, null, successCallback, errorCallback);
    };
    return TipData;
}());
angular
    .module('pipTipData', ['pipRest', 'pipServices'])
    .service('pipTipData', TipData);
},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipStatus = (function () {
    function TipStatus() {
    }
    return TipStatus;
}());
TipStatus.New = "new";
TipStatus.Writing = "writing";
TipStatus.Translating = "translating";
TipStatus.Verifying = "verifying";
TipStatus.Completed = "completed";
exports.TipStatus = TipStatus;
},{}],19:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("./Attachment");
require("./Guide");
require("./GuidePage");
require("./GuideStatus");
require("./GuideType");
require("./MultiString");
require("./PartyReference");
require("./Quote");
require("./QuoteStatus");
require("./PageData");
require("./Tip");
require("./TipStatus");
require("./TipDataService");
require("./ITipDataService");
require("./QuoteDataService");
require("./IQuoteDataService");
require("./GuideDataService");
require("./IGuideDataService");
angular
    .module('pipGuidance.Data', [
    'pipTipData',
    'pipQuoteData',
    'pipGuideData'
]);
__export(require("./Attachment"));
__export(require("./Guide"));
__export(require("./GuidePage"));
__export(require("./GuideStatus"));
__export(require("./GuideType"));
__export(require("./MultiString"));
__export(require("./PartyReference"));
__export(require("./Quote"));
__export(require("./QuoteStatus"));
__export(require("./PageData"));
__export(require("./Tip"));
__export(require("./TipStatus"));
},{"./Attachment":1,"./Guide":2,"./GuideDataService":3,"./GuidePage":4,"./GuideStatus":5,"./GuideType":6,"./IGuideDataService":7,"./IQuoteDataService":8,"./ITipDataService":9,"./MultiString":10,"./PageData":11,"./PartyReference":12,"./Quote":13,"./QuoteDataService":14,"./QuoteStatus":15,"./Tip":16,"./TipDataService":17,"./TipStatus":18}],20:[function(require,module,exports){
{
    var GuidanceDialog = (function () {
        GuidanceDialog.$inject = ['$mdDialog'];
        function GuidanceDialog($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        GuidanceDialog.prototype.show = function (params, successCallback, cancelCallback) {
            this.$mdDialog.show({
                targetEvent: params.event,
                templateUrl: 'guidance/GuidanceDialog.html',
                controller: GuidanceDialogController_1,
                controllerAs: '$ctrl',
                locals: {
                    params: params
                },
                clickOutsideToClose: true
            })
                .then(function () {
                if (successCallback) {
                    successCallback();
                }
            }, function () {
                if (cancelCallback) {
                    cancelCallback();
                }
            });
        };
        return GuidanceDialog;
    }());
    var config = function (pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            GUIDANCE_TITLE: 'What should you do here?',
            GUIDANCE_ACTION: 'Do it now!',
            GUIDANCE_DO_NOT_SHOW: "Don't show it again"
        });
        pipTranslateProvider.translations('ru', {
            GUIDANCE_TITLE: 'Что здесь делать?',
            GUIDANCE_ACTION: 'Сделать это сейчас!',
            GUIDANCE_DO_NOT_SHOW: 'Не показывать это снова'
        });
    };
    config.$inject = ['pipTranslateProvider'];
    var GuidanceDialogController_1 = (function () {
        function GuidanceDialogController_1($scope, $rootScope, $mdDialog, pipTranslate, params) {
            this.$mdDialog = $mdDialog;
            this.pipTranslate = pipTranslate;
            this.params = params;
            this.theme = $rootScope[pip.themes.ThemeRootVar];
            this.title = params.title || 'GUIDANCE_TITLE';
            this.imageUrl = params.imageUrl || '';
            this.imageWidth = params.imageWidth || '100%';
            this.imageHeight = params.imageHeight || '150px';
            this.content = params.content;
            this.action = params.action || 'GUIDANCE_ACTION';
            this.hideToggle = params.hideToggle;
            this.showHideToggle = params.hideToggleCallback != null;
        }
        GuidanceDialogController_1.prototype.onCancel = function () {
            this.$mdDialog.cancel();
        };
        GuidanceDialogController_1.prototype.onAction = function () {
            this.$mdDialog.hide();
        };
        GuidanceDialogController_1.prototype.onHideToggle = function () {
            if (this.params.hideToggleCallback) {
                this.params.hideToggleCallback(this.hideToggle);
            }
        };
        GuidanceDialogController_1.prototype.getContent = function (content) {
            var language = this.pipTranslate.language || 'en';
            return content && content[language] ? content[language] : '';
        };
        return GuidanceDialogController_1;
    }());
    angular.module('pipGuidance.Dialog', ['ngMaterial', 'pipTranslate', 'pipGuidance.Templates'])
        .config(config)
        .service('pipGuidanceDialog', GuidanceDialog);
}
},{}],21:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("./rest");
require("./data");
require("./intro_guidance");
require("./guidance/GuidanceDialog");
require("./tips/TipsService");
require("./quotes/QuotesService");
angular.module('pipGuidance', [
    'pipGuidance.Rest',
    'pipTips.Service',
    'pipIntroGuidance.Service',
    'pipGuidance.Dialog',
    'pipQuotes.Service',
    'pipReleaseIntroDialog'
]);
__export(require("./data"));
},{"./data":19,"./guidance/GuidanceDialog":20,"./intro_guidance":24,"./quotes/QuotesService":25,"./rest":29,"./tips/TipsService":30}],22:[function(require,module,exports){
{
    var ReleaseIntroDialog = (function () {
        ReleaseIntroDialog.$inject = ['$mdDialog'];
        function ReleaseIntroDialog($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        ReleaseIntroDialog.prototype.show = function (params, successCallback, cancelCallback) {
            this.$mdDialog.show({
                targetEvent: params.event,
                templateUrl: 'intro_guidance/IntroGuidanceDialog.html',
                controller: ReleaseIntroDialogController_1,
                controllerAs: '$ctrl',
                locals: {
                    params: params
                },
                clickOutsideToClose: true
            })
                .then(function () {
                if (successCallback) {
                    successCallback();
                }
            }, function () {
                if (cancelCallback) {
                    cancelCallback();
                }
            });
        };
        return ReleaseIntroDialog;
    }());
    var config = function (pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            GUIDANCE_TITLE: 'What should you do here?',
            GUIDANCE_ACTION: 'Do it now!',
            GUIDANCE_DO_NOT_SHOW: "Don't show it again",
            GUIDE_COMPLETE_BUTTON: 'GOT IT !'
        });
        pipTranslateProvider.translations('ru', {
            GUIDANCE_TITLE: 'Что здесь делать?',
            GUIDANCE_ACTION: 'Сделать это сейчас!',
            GUIDANCE_DO_NOT_SHOW: 'Не показывать это снова',
            GUIDE_COMPLETE_BUTTON: 'Закончить просмотр'
        });
    };
    config.$inject = ['pipTranslateProvider'];
    var ReleaseIntroDialogController_1 = (function () {
        function ReleaseIntroDialogController_1($scope, $rootScope, pipTranslate, $mdDialog, pipMedia, pipPictureData, params) {
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.pipTranslate = pipTranslate;
            this.$mdDialog = $mdDialog;
            this.pipMedia = pipMedia;
            this.pipPictureData = pipPictureData;
            this.params = params;
            this.isOpen = true;
            this.theme = $rootScope[pip.themes.ThemeRootVar];
            var guide = this.params.guide;
            this.number = 0;
            this.ln = this.params.ln || this.pipTranslate.language || 'en';
            this.data = guide;
            _.each(this.data.pages, function (page) {
                if (page.pic_id) {
                    var picId = page.pic_id;
                    page.picIds = [];
                    page.picIds.push(picId);
                    page.pic_id_url = pipPictureData.getPictureUrl(page.pic_id);
                }
                if (page.pic_uri) {
                    var picUri = page.pic_uri;
                    page.picUris = [];
                    page.picUris.push(picUri);
                }
            });
        }
        ReleaseIntroDialogController_1.prototype.onChangePage = function (newNumber) {
            this.number = newNumber;
            this.isOpen = false;
        };
        ;
        ReleaseIntroDialogController_1.prototype.onBackPage = function () {
            if (this.number !== 0) {
                this.number -= 1;
            }
            this.isOpen = false;
        };
        ;
        ReleaseIntroDialogController_1.prototype.onNextPage = function () {
            if (this.number !== this.data.pages.length - 1) {
                this.number += 1;
            }
            this.isOpen = false;
        };
        ;
        ReleaseIntroDialogController_1.prototype.onKeyDown = function ($event) {
            if (!$event)
                return;
            if ($event.key == 'ArrowRight') {
                this.onNextPage();
            }
            if ($event.key == 'ArrowLeft') {
                this.onBackPage();
            }
            if ($event.keyCode == 32) {
                this.onNextPage();
            }
            this.isOpen = false;
        };
        ReleaseIntroDialogController_1.prototype.onClose = function () {
            this.$mdDialog.hide();
        };
        ;
        return ReleaseIntroDialogController_1;
    }());
    angular.module('pipReleaseIntroDialog')
        .config(config)
        .service('pipReleaseIntroDialog', ReleaseIntroDialog);
}
},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../data");
var data_2 = require("../data");
{
    var IntroGuidanceService = (function () {
        IntroGuidanceService.$inject = ['pipReleaseIntroDialog', 'pipGuideData', 'pipTranslate', '$rootScope'];
        function IntroGuidanceService(pipReleaseIntroDialog, pipGuideData, pipTranslate, $rootScope) {
            this.pipReleaseIntroDialog = pipReleaseIntroDialog;
            this.pipGuideData = pipGuideData;
            this.pipTranslate = pipTranslate;
            this.$rootScope = $rootScope;
        }
        IntroGuidanceService.prototype.showReleaseGuidance = function (filter, successCallback, errorCallback) {
            var _this = this;
            this.pipGuideData.readGuides({
                filter: filter
            }, function (guides) {
                guides = _.filter(guides.data, function (guide) {
                    return guide.type = data_1.GuideType.NewRelease && guide.status === data_2.GuideStatus.Completed;
                });
                if (guides.length > 0) {
                    _this.pipReleaseIntroDialog.show({
                        guide: guides[0],
                        ln: _this.pipTranslate.language
                    }, successCallback, errorCallback);
                }
            }, errorCallback);
        };
        IntroGuidanceService.prototype.showIntroGuidance = function (filter, successCallback, errorCallback) {
            var _this = this;
            this.pipGuideData.readIntroGuides({
                filter: filter
            }, function (guides) {
                guides = _.filter(guides.data, function (guide) {
                    return guide.type = data_1.GuideType.Introduction && guide.status === data_2.GuideStatus.Completed;
                });
                if (guides.length > 0) {
                    _this.pipReleaseIntroDialog.show({
                        guide: guides[0],
                        ln: _this.pipTranslate.language
                    }, successCallback, errorCallback);
                }
            }, errorCallback);
        };
        IntroGuidanceService.prototype.showGuide = function (guide, ln, successCallback, errorCallback) {
            if (guide) {
                this.pipReleaseIntroDialog.show({
                    guide: guide,
                    ln: ln
                }, successCallback, errorCallback);
            }
        };
        IntroGuidanceService.prototype.findIntroReleaseGuide = function (guides, settings, appName) {
            var guidesSort;
            var app = appName;
            if (!settings && !settings[app] || !settings[app].intro || !settings[app].intro.lastId) {
                guidesSort = _.filter(guides, function (guide) {
                    return guide.type === data_1.GuideType.Introduction && guide.status === data_2.GuideStatus.Completed && guide.app === app;
                });
                guidesSort = _.sortBy(guidesSort, function (guide) {
                    return -moment(guide.create_time).valueOf();
                });
                return guidesSort[0];
            }
            guidesSort = _.filter(guides, function (guide) {
                return guide.type === data_1.GuideType.NewRelease && guide.status === data_2.GuideStatus.Completed && guide.app === app;
            });
            guidesSort = _.sortBy(guidesSort, function (guide) {
                return -moment(guide.create_time).valueOf();
            });
            if (!settings[app].intro.create_time || (guidesSort.length > 0 &&
                new Date(settings[app].intro.create_time) < new Date(guidesSort[0].create_time) &&
                guidesSort[0].id != settings.release.lastId)) {
                return guidesSort[0];
            }
            return null;
        };
        return IntroGuidanceService;
    }());
    angular.module('pipIntroGuidance.Service', ['pipReleaseIntroDialog', 'pipGuideData', 'pipPictures.Data'])
        .service('pipGuidance', IntroGuidanceService);
}
},{"../data":19}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
angular.module('pipReleaseIntroDialog', ['ngMaterial', 'pipTranslate', 'pipGuidance.Templates']);
require("./IntroGuidanceDialog");
require("./IntroGuidanceService");
},{"./IntroGuidanceDialog":22,"./IntroGuidanceService":23}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    var QuotesService = (function () {
        QuotesService.$inject = ['pipPopoverService', '$timeout', '$rootScope', 'pipTips'];
        function QuotesService(pipPopoverService, $timeout, $rootScope, pipTips) {
            this.pipPopoverService = pipPopoverService;
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.pipTips = pipTips;
        }
        QuotesService.prototype.checkStatus = function (item) {
            return item.status == 'completed' ? true : false;
        };
        QuotesService.prototype.compareRandom = function (a, b) {
            return Math.random() - 0.5;
        };
        QuotesService.prototype.filterQuotes = function (data, topic) {
            var quotes;
            var quotesCollection = _.filter(data, this.checkStatus);
            if (topic) {
                quotes = [];
                var _loop_1 = function (index) {
                    var topic_1 = _.find(quotesCollection[index].tags, function (t) {
                        return t == topic_1;
                    });
                    if (topic_1) {
                        quotes.push(quotesCollection[index]);
                    }
                };
                for (var index = 0; index < quotesCollection.length; index++) {
                    _loop_1(index);
                }
            }
            else {
                quotes = quotesCollection;
            }
            quotes.sort(this.compareRandom);
            return quotes;
        };
        QuotesService.prototype.quoteController = function ($scope, pipMedia) {
            var init = function () {
                if ($scope.locals.quotes[$scope.index].author)
                    $scope.author = $scope.locals.quotes[$scope.index].author[$scope.locals.ln] ?
                        $scope.locals.quotes[$scope.index].author[$scope.locals.ln] : $scope.locals.quotes[$scope.index].author['en'];
                if ($scope.locals.quotes[$scope.index].text)
                    $scope.content = $scope.locals.quotes[$scope.index].text[$scope.locals.ln] ? $scope.locals.quotes[$scope.index].text[$scope.locals.ln] :
                        $scope.locals.quotes[$scope.index].text['en'];
                $scope.link = $scope.locals.quotes[$scope.index].more_url;
            };
            $scope.index = 0;
            $scope.pipMedia = pipMedia;
            init();
            $scope.onNextClick = function () {
                $scope.index++;
                if ($scope.index == $scope.locals.quotes.length)
                    this.pipPopoverService.hide();
                else {
                    init();
                    this.pipPopoverService.resize();
                }
            };
            $scope.$on('pipWindowResized', init);
        };
        QuotesService.prototype.showQuotes = function (quotes, ln, $event) {
            if (quotes && quotes.length > 0) {
                this.pipPopoverService.hide();
                this.pipPopoverService.show({
                    element: $event ? $event.currentTarget : null,
                    class: 'pip-quote',
                    cancelCallback: function () {
                        return false;
                    },
                    locals: {
                        quotes: quotes,
                        ln: ln || 'en'
                    },
                    controller: ['$scope', 'pipMedia', this.quoteController],
                    templateUrl: 'quotes/QuoteTemplate.html'
                });
            }
        };
        QuotesService.prototype.waitUserTipsQuotes = function (tips, quotes, ln) {
            var _this = this;
            var idleTimer = null;
            var idleState = false;
            var idleWait = 180000;
            $(document).ready(function () {
                $(document).bind('click keydown scroll', function () {
                    _this.$timeout.cancel(idleTimer);
                    idleState = false;
                    idleTimer = _this.$timeout(function () {
                        _this.pipPopoverService.hide();
                        if (!quotes) {
                            _this.pipTips.showTips(tips, ln);
                        }
                        else {
                            if (!tips) {
                                _this.showQuotes(quotes, ln, null);
                            }
                            else {
                                Math.random() < 0.5 ? _this.pipTips.showTips(tips, ln) : _this.showQuotes(quotes, ln, null);
                            }
                        }
                        idleState = true;
                    }, idleWait);
                });
                $("body").trigger("click");
            });
        };
        return QuotesService;
    }());
    angular.module('pipQuotes.Service', ['pipGuidance.Templates', 'pipGuidance', 'pipControls', 'pipQuoteData'])
        .service('pipQuotes', QuotesService);
}
},{}],26:[function(require,module,exports){
pipGuideDataConfig.$inject = ['pipRestProvider'];
function pipGuideDataConfig(pipRestProvider) {
    pipRestProvider.registerPagedCollection('guides', '/api/v1/guides/:guide_id');
    pipRestProvider.registerResource('guidesRandom', '/api/v1/guides/random');
}
angular
    .module('pipGuidance.Rest')
    .config(pipGuideDataConfig);
},{}],27:[function(require,module,exports){
configQuoteResources.$inject = ['pipRestProvider'];
function configQuoteResources(pipRestProvider) {
    pipRestProvider.registerPagedCollection('quotes', '/api/v1/quotes/:quote_id');
    pipRestProvider.registerResource('quotesRandom', '/api/v1/quotes/random');
}
angular
    .module('pipGuidance.Rest')
    .config(configQuoteResources);
},{}],28:[function(require,module,exports){
pipTipDataConfig.$inject = ['pipRestProvider'];
function pipTipDataConfig(pipRestProvider) {
    pipRestProvider.registerPagedCollection('tips', '/api/v1/tips/:tip_id');
    pipRestProvider.registerResource('tipsRandom', '/api/v1/tips/random');
}
angular
    .module('pipGuidance.Rest')
    .config(pipTipDataConfig);
},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
angular
    .module('pipGuidance.Rest', []);
require("./TipResources");
require("./QuoteResources");
require("./GuideResources");
},{"./GuideResources":26,"./QuoteResources":27,"./TipResources":28}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    var TipsService = (function () {
        TipsService.$inject = ['$rootScope', 'pipPopoverService', 'pipTipData'];
        function TipsService($rootScope, pipPopoverService, pipTipData) {
            this.$rootScope = $rootScope;
            this.pipPopoverService = pipPopoverService;
            this.pipTipData = pipTipData;
            this.checkStatus = function (item) {
                return item.status === 'completed';
            };
            this.compareRandom = function () {
                return Math.random() - 0.5;
            };
        }
        TipsService.prototype.filterTips = function (data, topic) {
            this.tips = [];
            var tipsCollection = _.filter(data, this.checkStatus);
            for (var index = 0; index < tipsCollection.length; index++) {
                var t = _.find(tipsCollection[index].topics, function (t) {
                    return t == topic;
                });
                if (t) {
                    this.tips.push(tipsCollection[index]);
                }
            }
            this.tips.sort(this.compareRandom);
            return this.tips;
        };
        TipsService.prototype.tipController = function ($scope, $timeout, pipMedia) {
            var _this = this;
            var init = function () {
                $scope.title = $scope.locals.tips[$scope.index].title[$scope.locals.ln];
                $scope.content = $scope.locals.tips[$scope.index].content[$scope.locals.ln];
                $scope.link = $scope.locals.tips[$scope.index].more_url;
                if ($scope.image) {
                    $timeout(function () {
                        var backdropElement = $('.pip-popover-backdrop'), popover = backdropElement.find('.pip-popover');
                        popover.find('.pip-pic').css('background-image', 'url(' + $scope.image + ')');
                    }, 100);
                }
            };
            $scope.index = 0;
            $scope.pipMedia = pipMedia;
            init();
            $scope.onNextClick = function () {
                $scope.index++;
                if ($scope.index === $scope.locals.tips.length) {
                    _this.pipPopoverService.hide();
                }
                else {
                    init();
                    _this.pipPopoverService.resize();
                }
            };
            $scope.$on('pipWindowResized', init);
        };
        TipsService.prototype.showTips = function (tips, ln, $event) {
            if (tips && tips.length > 0) {
                this.pipPopoverService.hide();
                this.pipPopoverService.show({
                    element: $event ? $event.currentTarget : null,
                    class: 'pip-tip',
                    cancelCallback: function () {
                        return false;
                    },
                    locals: {
                        tips: tips,
                        ln: ln || 'en'
                    },
                    controller: ['$scope', '$timeout', 'pipMedia', this.tipController],
                    templateUrl: 'tips/TipTemplate.html'
                });
            }
        };
        TipsService.prototype.firstShowTips = function (tips, language, topic, settings, dayC) {
        };
        TipsService.prototype.getTips = function (party, ln, topic, callback) {
            var _this = this;
            this.pipTipData.readTips({}, function (result) {
                _this.filterTips(result.data, topic);
                if (callback) {
                    callback(_this.tips);
                }
                return _this.tips;
            }, function () {
                return null;
            });
        };
        return TipsService;
    }());
    angular.module('pipTips.Service', ['pipGuidance.Templates', 'pipControls', 'pipTipData'])
        .service('pipTips', TipsService);
}
},{}],31:[function(require,module,exports){
(function(module) {
try {
  module = angular.module('pipGuidance.Templates');
} catch (e) {
  module = angular.module('pipGuidance.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('guidance/GuidanceDialog.html',
    '<md-dialog class="pip-dialog pip-guidance-dialog layout-column" width="768" md-theme="{{$ctrl.theme}}"><div class="pip-header layout-row"><h3 class="rm16 flex">{{$ctrl.title | translate}}</h3><md-button class="pip-dialog-close" ng-click="$ctrl.onCancel()" aria-label="{{::\'CLOSE\' | translate}}"><span class="icon-cross"></span></md-button></div><div class="pip-body"><div class="pip-content"><pip-picture pip-src="$ctrl.imageUrl" ng-hide="!$ctrl.imageUrl || $ctrl.imageUrl == \'\'" class="bm16 center-block" ng-style="{ width: $ctrl.imageWidth, height: $ctrl.imageHeight, display: \'block\' }"></pip-picture><div class="bm16" ng-bind-html="{{$ctrl.getContent($ctrl.content)}}"></div><md-button class="md-raised md-accent w-stretch" ng-click="$ctrl.onAction()" ng-hide="!$ctrl.action || $ctrl.action==\'\'" arial-label="{{$ctrl.action | translate}}">{{::action | translate}}</md-button><md-checkbox aria-label="{{\'DO_NOT_SHOW\' | translate}}" class="w-stretch m0 tm16 regular_14" ng-model="$ctrl.hideToggle" ng-change="$ctrl.onHideToggle()" ng-show="$ctrl.showHideToggle">{{::\'GUIDANCE_DO_NOT_SHOW\' | translate}}</md-checkbox></div></div></md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipGuidance.Templates');
} catch (e) {
  module = angular.module('pipGuidance.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('quotes/QuoteTemplate.html',
    '<img src="images/quotes.svg" class="pip-bg"><div class="pip-content pip-popover-content lp24-flex rp24-flex pip-scroll"><div>{{ ::content | translate }}</div></div><div class="pip-footer lm24-flex rm24-flex position-bottom layout-row layout-align-start-center"><div class="pip-author flex color-secondary-text">{{ ::author | translate }}</div><md-button ng-click="onNextClick()" class="tm0 bm0 rm0">{{ ::\'NEXT\' | translate }}</md-button></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipGuidance.Templates');
} catch (e) {
  module = angular.module('pipGuidance.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('intro_guidance/IntroGuidanceDialog.html',
    '<md-dialog class="pip-dialog pip-guidance-dialog pip-guide-preview layout-column" md-theme="{{$ctrl.theme}}" ng-keydown="$ctrl.onKeyDown($event)"><div ng-if="!$ctrl.$routing" ng-swipe-left="$ctrl.onNextPage()" ng-swipe-right="$ctrl.onBackPage()" class="h-stretch flex layout layout-column" ng-style="{\'background-color\':$ctrl.data.pages[$ctrl.number].color}"><div class="layout layout-row layout-align-space-between-center layout-align-xs-center-center w-stretch pip-guide-page pip-scroll-y"><md-button ng-click="$ctrl.onBackPage()" class="md-icon-button lm8 flex-fixed hide-xs" aria-label="BACK" ng-disabled="$ctrl.transaction.busy() || $ctrl.number == 0"><md-icon md-svg-icon="icons:arrow-left" class="pip-arrow-button" ng-class="{\'opacity-disabled\' :$ctrl.number == 0}"></md-icon></md-button><div style="visibility: hidden; position: fixed; width:0px; height: 0px;" ng-if="$ctrl.isOpen"><div ng-repeat="page in $ctrl.data.pages"><img style="visibility: hidden; position: absolute" ng-if="page.pic_uri" src="{{page.pic_uri}}" aria-hidden="true" alt=""> <img style="visibility: hidden; position: absolute" ng-if="page.pic_id_url" src="{{page.pic_id_url}}" aria-hidden="true" alt=""></div></div><div class="layout layout-column layout-align-center-center bm16"><div class="pip-pic" ng-if="$ctrl.data.pages[$ctrl.number].pic_uri" ng-style="{\'background-image\':\'url(\' + $ctrl.data.pages[$ctrl.number].pic_uri + \')\'}"></div><div class="pip-pic" ng-if="$ctrl.data.pages[$ctrl.number].pic_id_url" ng-style="{\'background-image\':\'url(\' + $ctrl.data.pages[$ctrl.number].pic_id_url + \')\'}"></div><div class="layout layout-column layout-align-center-center pip-text"><p class="pip-preview-title" ng-if="$ctrl.data.pages[$ctrl.number].title[$ctrl.ln]" ng-bind-html="$ctrl.data.pages[$ctrl.number].title[$ctrl.ln]"></p><p class="pip-preview-content" ng-if="$ctrl.data.pages[$ctrl.number].content[$ctrl.ln]" ng-bind-html="$ctrl.data.pages[$ctrl.number].content[$ctrl.ln]"></p></div></div><md-button ng-click="$ctrl.onNextPage()" class="rm8 flex-fixed hide-xs md-icon-button" aria-label="DOWN" ng-disabled="$ctrl.transaction.busy() || $ctrl.number == $ctrl.data.pages.length - 1"><md-icon md-svg-icon="icons:arrow-right" class="pip-arrow-button" ng-class="{\'opacity-disabled\' : $ctrl.number == $ctrl.data.pages.length - 1}"></md-icon></md-button></div><div class="flex-fixed flex w-stretch pip-guide-page-footer bp16" ng-style="{\'background-color\':$ctrl.data.pages[$ctrl.number].color}"><div class="layout-row layout-align-center-center" ng-if="$ctrl.data.pages.length > 1"><md-icon ng-repeat="radio in $ctrl.data.pages" ng-click="$ctrl.onChangePage($index)" class="pip-radio-button" md-svg-icon="{{radio != $ctrl.data.pages[$ctrl.number] ? \'icons:radio-off\' : \'icons:circle\'}}"></md-icon></div><div class="h64 layout-row layout-align-xs-space-between-center layout-align-center-center"><md-button ng-click="$ctrl.onBackPage()" class="lm8 flex-fixed md-icon-button" ng-if="$ctrl.pipMedia(\'xs\')" aria-label="BACK" ng-disabled="$ctrl.transaction.busy() || $ctrl.number == 0"><md-icon md-svg-icon="icons:arrow-left" class="pip-arrow-button" ng-class="{\'opacity-disabled\' :$ctrl.number == 0}"></md-icon></md-button><md-button ng-click="$ctrl.onClose()" ng-if="$ctrl.number == $ctrl.data.pages.length - 1" class="pip-button-got rm8 lm8 md-raised" ng-style="{ \'color\':$ctrl.data.pages[$ctrl.number].color }" aria-label="NEXT" ng-disabled="$ctrl.transaction.busy()">{{ :: \'GUIDE_COMPLETE_BUTTON\' | translate }}</md-button><md-button ng-click="$ctrl.onClose()" ng-if="$ctrl.number != $ctrl.data.pages.length - 1" class="pip-button-got rm8 lm8 pip-button-got-not-raised" ng-style="{ \'background-color\':$ctrl.data.pages[$ctrl.number].color}" aria-label="NEXT" ng-disabled="$ctrl.transaction.busy()">{{ :: \'GUIDE_COMPLETE_BUTTON\' | translate }}</md-button><md-button ng-click="$ctrl.onNextPage()" class="rm8 flex-fixed md-icon-button" ng-if="$ctrl.pipMedia(\'xs\')" aria-label="DOWN" ng-disabled="$ctrl.transaction.busy() || $ctrl.number == $ctrl.data.pages.length - 1"><md-icon md-svg-icon="icons:arrow-right" class="pip-arrow-button" ng-class="{\'opacity-disabled\' : $ctrl.number == $ctrl.data.pages.length - 1}"></md-icon></md-button></div></div></div></md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('pipGuidance.Templates');
} catch (e) {
  module = angular.module('pipGuidance.Templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('tips/TipTemplate.html',
    '<div ng-if="title" class="pip-title p24-flex flex-fixed bp16">{{ title | translate }}</div><div class="pip-content pip-popover-content lp24-flex rp24-flex text-body1 bm64 pip-scroll" ng-class="{\'tm24\' : !title }"><div ng-if="image && pipMedia(\'gt-xs\')" class="pip-pic"></div><pip-markdown pip-text="content" pip-rebind="true"></pip-markdown></div><div class="pip-footer lm24-flex rm24-flex position-bottom layout-row layout-align-start-center"><a ng-if="link" target="_blank" href="{{ link }}" class="text-body2 flex">{{:: \'MORE_URL\' | translate }}</a><div ng-if="!link" class="flex"></div><md-button ng-click="onNextClick()" class="rm0">{{:: \'NEXT\' | translate }}</md-button></div>');
}]);
})();



},{}]},{},[21,31])(31)
});

//# sourceMappingURL=pip-suite-guidance.js.map
