declare module UI {
    interface ILocalizationService {
        getData(): { [id: string]: { [lang: string]: string } }
    }

}
