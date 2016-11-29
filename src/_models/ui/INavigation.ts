declare module UI {
	interface INavigation {
		entries: INavigationEntries
		brand: INavigationBrand
	}

	interface INavigationEntries {
		left?: INavigationEntry[]
		right?: INavigationEntry[]
	}		

	interface INavigationEntry {
	
	}

	interface ISearchNavigationEntry extends INavigationEntry {
		placeholder?: string
	}

	interface ILinkNavigationEntry extends INavigationEntry {
		label: string
		href: string
		icon?: string
		children?: INavigationEntry[]
	}

	interface INavigationBrand {
		label: string
		logo?: string
	}
}
