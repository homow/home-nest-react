import {type ReactNode, useEffect, useRef, useState} from "react";

type Props = {
    children: ReactNode;
}

export default function LazyScroll({children}: Props) {
    const [show, setShow] = useState<boolean>(false);
    const targetRef = useRef<HTMLDivElement | null>(null);

    useEffect((): () => void => {
        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]): void => {
                if (entry.isIntersecting) {
                    setShow(true);
                    observer.disconnect();
                }
            }, {threshold: 0.1}
        );

        if (targetRef?.current) {
            observer.observe(targetRef.current);
        }

        return (): void => {
            observer.disconnect();
        }
    }, []);

    return <div ref={targetRef}>{show && children}</div>;
};