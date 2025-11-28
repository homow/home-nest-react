import type {JSX, ReactNode} from "react";
import {useEffect} from "react";
import {useLocation} from "react-router";

type Props = {
    children: ReactNode;
}

export default function MainLayout({children}: Props): JSX.Element {
    const location = useLocation();

    useEffect((): void => {
        if (location.hash) {
            const element: Element | null = document.querySelector(location.hash);

            if (element) {
                element.scrollIntoView({behavior: "smooth"})
            }
        }
    }, [location]);

    return (
        <main className={"mt-10 space-y-20"}>
            {children}
        </main>
    );
};