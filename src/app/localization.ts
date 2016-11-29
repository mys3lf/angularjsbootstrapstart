export class LocalizationService implements UI.ILocalizationService {
	public getData(): { [id: string]: { [lang: string]: string } } {
		return {
			createNewProject:
			{
				"de": "Neues Projekt erstellen",
				"en": "Create new project"
			},
			chooseYourProject: {
				"de": "Wähle dein Projekt",
				"en": "Choose your project"
			}
		}
	}
};
