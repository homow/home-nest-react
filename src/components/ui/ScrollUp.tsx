import type {RefObject} from "react";
import {useEffect, useState} from "react";
import Icon from "@ui/icons/Icon";
import {cn} from "@utils/ui-utils";

type Props = {
    triggerRef: RefObject<HTMLDivElement | null>;
}

export default function ScrollUp({triggerRef}: Props) {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect((): (() => void) | undefined => {
        const target: HTMLDivElement | null = triggerRef?.current;

        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]): void => {
                setVisible(!entry.isIntersecting);
            }
        );

        observer.observe(target);

        return (): void => {
            observer.disconnect();
        }
    }, [triggerRef]);

    return (
        <a
            id="scroll-up"
            href="#"
            className={
                cn(
                    "fixed left-2.5 bottom-2.5 p-2 rounded-full bg-violet-600 text-white cursor-pointer z-10 hover:opacity-100",
                    visible ? "inline-block" : "hidden"
                )
            }
        >
            <Icon
                parentClassName={"inline"}
                className={"size-4"}
                icon={"upArrow"}
            />
        </a>
    );
};