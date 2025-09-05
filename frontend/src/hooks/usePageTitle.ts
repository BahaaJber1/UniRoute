import { useEffect } from "react";

export function usePageTitle(title: string) {
	useEffect(() => {
		document.title = `${title} - UniRoute`;
		return () => {
			document.title = "UniRoute";
		};
	}, [title]);
}
