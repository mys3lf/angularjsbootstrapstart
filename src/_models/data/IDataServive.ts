declare module Data {
    export interface IDataService<T> {
        getData(): Promise<T>
        getDataSynchronously(): T
    }
}
