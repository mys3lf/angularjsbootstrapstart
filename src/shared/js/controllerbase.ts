import { ComponentBase } from './componentbase'

export class ControllerBase<T> extends ComponentBase {
    constructor($scope, protected dataService: Data.IDataService<T> = null, i18n: UI.ILocalizationService = null) {
        super($scope, i18n)

        if (dataService != null) {
            this.setData(dataService.getDataSynchronously())
        }
    }

    protected setData(data: T) {
        this.$scope.data = data;
    }

    get data(): T {
        return this.$scope.data;
    }
}
