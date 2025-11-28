import type {JSX} from "react";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import HeroSection from "./HeroSection/HeroSection";
import FeaturedProperty from "./FeaturedProperty/FeaturedProperty";

export default function Home(): JSX.Element {
    useDocumentTitle("صفحه اصلی | آشیانه");

    return (
        <>
            <HeroSection/>
            <FeaturedProperty/>
        </>
    );
};