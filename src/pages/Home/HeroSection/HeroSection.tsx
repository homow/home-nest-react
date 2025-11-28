import type {JSX} from "react";
import RightHeroSection from "./RightHeroSection";
import LeftHeroSection from "./LeftHeroSection";
import BottomHeroSection from "./BottomHeroSection";

export default function HeroSection(): JSX.Element {
    return (
        <section
            id="hero-section"
            className={"space-y-4 2xl:space-y-0"}
        >
            <div
                className={"space-y-20 xl:space-y-1 xl:flex flex-row items-center gap-10 2xl:-mt-10"}
            >
                <RightHeroSection
                    className={"basis-1/2"}
                />
                <LeftHeroSection
                    className={"basis-1/2"}
                />
            </div>
            <BottomHeroSection/>
        </section>
    );
};