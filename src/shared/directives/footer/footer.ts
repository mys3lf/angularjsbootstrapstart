export class Footer {
    public link: ($scope, element, $attrs) => void;
    public template = require("./footer.html");
    public scope = {
        model: "="
    };

  //  public controller = NavigationCtrl;
    public restrict = 'E';
    static $inject = [];
    public replace = true;

    constructor() {
        // It's important to add `link` to the prototype or you will end up with state issues.
        // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
        Footer.prototype.link = ($scope, $elm, $attrs) => {

          //  console.log($scope);
            /*
                        if ($scope.focus == true) {
                            $timeout(() => {
                                $elm.children().children("input")[0].focus();
                            }, 0);
                        } */
        }
    }

    public static Factory() {
        var directive = () => {
            return new Footer();
        };

        directive['$inject'] = [];

        return directive;
    }
}