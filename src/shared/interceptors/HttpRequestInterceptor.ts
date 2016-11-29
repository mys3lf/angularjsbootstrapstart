export class HttpRequestInterceptor {
    static $inject: string[] = ["$location"];

    constructor(protected $location) {
        this.$location = $location;
    }

    private responseError = (rejection) => {
        if (rejection.status == 404) {
            this.$location.path("/404");
        }
    }
}   