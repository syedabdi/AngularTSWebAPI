namespace XTier.Theme {
    //import serverModels = SMC.XTier.Theme.DTO;

    export function registerRoutes(moduleName: string, ngModule: angular.IModule, parentStateName = "") {
        parentStateName = parentStateName ? parentStateName + "." : "";

        ngModule
            .config(['stateHelperProvider', '$urlRouterProvider', function configRoutes(stateHelperProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
                stateHelperProvider
                    .state({
                        name: parentStateName + 'xtier-Theme',
                        url: '/xtier-Theme',
                        abstract: true,
                        templateUrl: 'app/_XTier.Theme/ngViews/wiki.html',
                        children: [
                            {
                                name: 'wiki',
                                url: '/wiki',
                                views:
                                {
                                    'mainMenu': {
                                        templateUrl: 'app/_XTier.Theme/ngViews/menu/mainMenu.html'
                                    },
                                    'info': {
                                        template: '<div ui-view class="themeWiki-content"></div>'
                                    }
                                },
                                children: [
                                    {
                                        name: 'simpleElements',
                                        url: '/simpleElements',
                                        template: '<div ui-view></div>',
                                        children: [
                                            {
                                                name: 'blankBox',
                                                url: '/blankbox',
                                                templateUrl: 'app/_XTier.Theme/ngViews/simpleElements/blankBox.html'
                                            },
                                            {
                                                name: 'blankBoxTitle',
                                                url: '/blankboxTitle',
                                                templateUrl: 'app/_XTier.Theme/ngViews/simpleElements/blankBoxTitle.html'
                                            },
                                            {
                                                name: 'labeledContainer',
                                                url: '/labeledContainer',
                                                templateUrl: 'app/_XTier.Theme/ngViews/simpleElements/labeledContainer.html'
                                            },
                                            {
                                                name: 'horizontalKvps',
                                                url: '/horizontalKvps',
                                                templateUrl: 'app/_XTier.THeme/ngViews/simpleElements/horizontalKvps.html'
                                            }
                                        ]
                                    },
                                    {
                                        name: 'formElements',
                                        url: '/formElements',
                                        template: '<div ui-view></div>',
                                        children: [
                                            {
                                                name: 'textInput',
                                                url: '/textInput',
                                                templateUrl: 'app/_XTier.Theme/ngViews/formElements/formElements.html#textInput'
                                            },
                                            {
                                                name: 'textArea',
                                                url: '/textArea',
                                                templateUrl: 'app/_XTier.Theme/ngViews/formElements/formElements.html#textArea'
                                            },
                                            {
                                                name: 'submitButton',
                                                url: '/submitButton',
                                                templateUrl: 'app/_XTier.Theme/ngViews/formElements/formElements.html#submitButton'
                                            }
                                        ]
                                    }   
                                ]
                            }
                        ]
                    })
            }])
    }
}