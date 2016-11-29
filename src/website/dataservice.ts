export class DataService implements Data.IDataService<UI.IWebsite> {
	public getDataSynchronously(): UI.IWebsite {
		return typeof window["data"] !== "undefined" ?
			<UI.IWebsite>window["data"] :
			{
				"navigation": {
					"entries": {
						"left": [
							{
								"label": "lorem 1",
								"href": "lorem1"
							}
						],
						"right": [
							{
								"label": "lorem 2",
								"href": "lorem2"
							},

							{
								"label": "lorem 3",
								"href": "lorem3",
								"children": [
									{
										"label": "lorem 5",
										"href": "lorem5"
									},
									{
										"label": "lorem 5",
										"href": "lorem5"
									}
								]
							}
						]
					},
					"brand": {
						"label": "lorem"
					}
				},
				"footer": {
					"headline": {
						"label": "Footer Headline"
					},
					"groups": [
						{
							"label": "Lorem",
							"entries": [
								{
									"label": "Über Lorem",
									"href": "lorem"
								}
							]
						}
					]
				}
			};
	}

	public getData(): Promise<UI.IWebsite> {
		return new Promise<UI.IWebsite>((resolve, reject) => resolve(this.getDataSynchronously()));
	}
};