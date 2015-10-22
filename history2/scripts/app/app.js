require.config({
    paths: {
        'knockout': '/scripts/knockout-3.3.0',
        'punches' : '/scripts/knockout.punches',
        'jquery': '/scripts/jquery-2.1.4.min',
        'text': '/scripts/text',
        'pager': '/scripts/pager',
        'history': '/scripts/history.js/history',
        'domReady': '/scripts/domReady',
        'history.adapter.jquery': '/scripts/history.js/history.adapter.jquery'
        
    },
    shim: {
        'pager': ['jquery', 'knockout'],
        'history.adapter.jquery': ['jquery'],
        'history': ['jquery', 'pager', 'knockout', 'history.adapter.jquery']
    },
    waitSeconds: 0
});

require(['knockout', 'jquery', 'pager', 'history', 'punches', 'domReady!'], function (ko, $, pager) {

    ko.punches.enableAll();
    pager.useHTML5history = true;
    pager.Href5.history = History;
    var viewModel = {
        giles: 'giles'
    };
    pager.extendWithPage(viewModel);
    ko.applyBindings(viewModel);
    pager.startHistoryJs();
});