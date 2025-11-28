import {useRef} from "react";
import ScrollUp from "@ui/ScrollUp";
import TopGlobalBanner from "./components/TopGlobalBanner";
import HeaderBase from "@/Layout/Header/components/HeaderBase";

export default function Header() {
    const refTrigger = useRef<HTMLDivElement>(null);

    return (
        <header>
            <div
                className={"absolute top-0"}
                ref={refTrigger}
            />

            <ScrollUp
                triggerRef={refTrigger}
            />

            <TopGlobalBanner/>
            <HeaderBase/>
        </header>
    );
};