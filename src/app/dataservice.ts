export class DataService implements Data.IDataService<UI.IWebsite> {
	public getDataSynchronously(): UI.IWebsite {
		return typeof window["data"] !== "undefined" ?
			<UI.IWebsite>window["data"] :
			{
				"navigation": {
					"entries": [],
					"brand": {
						"label": "lorem"
					}
				},
				"footer": {
					"headline": {
						"label": "Footer Headline"
					} 
				}
			};
	}

	public getData(): Promise<UI.IWebsite> {
		return new Promise<UI.IWebsite>((resolve, reject) => resolve(this.getDataSynchronously()));
	}
};