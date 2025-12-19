import useDocumentTitle from "@/hooks/useDocumentTitle";
import HeroSection from "./HeroSection/HeroSection";
import LazyWithSuspense from "@ui/lazy/LazyWithSuspense";
import LazyScroll from "@ui/lazy/LazyScroll";

const FeaturedProperty = LazyWithSuspense(() => import("./FeaturedProperty/FeaturedProperty"));

export default function Home() {
    useDocumentTitle("صفحه اصلی | آشیانه");

    return (
        <>
            <HeroSection/>

            <LazyScroll>
                <FeaturedProperty/>
            </LazyScroll>
        </>
    );
};