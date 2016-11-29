export class ComponentBase {
    constructor(protected $scope, protected i18n: UI.ILocalizationService = null) {

        this.registerScopeFunctions();

        var uiConfig = <UI.IConfig>window["uiConfig"]
        if (uiConfig == null || typeof uiConfig === "undefined") {
            uiConfig = {
                uiLang: "en",
                dataLang: "en",
                translateLang: "en"
            };

            window["uiConfig"] = uiConfig;
        }
        this.$scope.uiConfig = uiConfig;
    }

    get uiConfig(): UI.IConfig {
        return <UI.IConfig>this.$scope.uiConfig;
    }

    @ScopeMethod()
    public updateUIConfig(newConfig: UI.IConfig) {
        this.$scope.$apply(() => {
            if (newConfig.uiLang) this.$scope.uiConfig.uiLang = newConfig.uiLang;
            if (newConfig.dataLang) this.$scope.uiConfig.dataLang = newConfig.dataLang;
            if (newConfig.translateLang) this.$scope.uiConfig.translateLang = newConfig.translateLang;
        })
    }

    @ScopeMethod()
    public __label(values: { [lang: string]: string }, lang: string): string {
        var val = values != null ? values[lang] : null;

        return val !== undefined ? val : "";
    }

    @ScopeMethod()
    public label(values: { [lang: string]: string }): string {
        return this.__label(values, this.uiConfig.dataLang)
    }

    @ScopeMethod()
    public makeid(n: number) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < n; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    private registerScopeFunctions() {
        var callbackFunctions = { };

        for (let item in this) {
            if (typeof this[item] == "function") {
                if (this[item].__registerScope === true) {

                    this.$scope[item] = (...args: any[]) => {
                        return this[item].apply(this, args);
                    };
                }
            }
        }
    }
}

export function ScopeMethod() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        target[propertyKey].__registerScope = true;
    }
}

if (!String.prototype["format"]) {
    String.prototype["format"] = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[0] != "undefined" && args[0][number] != 'undefined'
                ? args[0][number]
                : match
                ;
        });
    };
}