declare module UI {
	interface IFooter {
		groups?: IFooterGroup[]
		headline?: IFooterHeadline
	}

    interface IFooterGroup {
        label: string, 
        entries: INavigationEntry[]
    }

    interface IFooterHeadline {
        label: string
        logo?: string
    }
}
