import { ScopeMethod, ComponentBase } from '../../js/componentbase'

export class Headline {
    public link: ($scope, element, $attrs) => void;
    public template = require("./headline.html");
    public scope = {
        model: "=",
    };

    public controller = HeadlineCtrl;
    public restrict = 'E';
    public replace = true;
    static $inject = [];

    constructor() {
        // It's important to add `link` to the prototype or you will end up with state issues.
        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
        Headline.prototype.link = ($scope, $elm, $attrs) => {

        }
    }

    public static Factory() {
        var directive = () => {
            return new Headline();
        };

        directive['$inject'] = [];

        return directive;
    }
}

class HeadlineCtrl extends ComponentBase {
    static $inject = ["$scope"];

    constructor($scope) {
        super($scope, null);
    }
}
