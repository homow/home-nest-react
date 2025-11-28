import type {JSX} from "react";
import {Link} from "react-router";
import {cn} from "@utils/ui-utils";

type MainProps = {
    className?: string;
}

interface Props extends MainProps {
    title: string;
    text: string;
    className?: string;
}

function LeftHeroSectionState({title, text, className = ""}: Props): JSX.Element {
    return (
        <div
            className={
                cn("bg-grey-10 border border-grey-15 rounded-lg p-4 text-center sm:max-w-60 sm:text-start", className)
            }
        >
            <strong className={"text-2xl xl:text-3xl"}>{title}</strong>
            <p className={"text-grey-60 text-sm xl:text-base md:mt-1"}>{text}</p>
        </div>
    )
}

function LeftHeroSectionInfo(): JSX.Element {
    return (
        <div
            className={"mb-10 xl:mb-15"}
        >
            <h1
                className={"font-medium max-w-10/12 xs:max-w-8/12 sm:max-w-6/12 md:max-w-6/12 xl:max-w-125"}
            >
                با آشیانه، رویاهات رو سریع تر پیدا کن
            </h1>
            <p
                className={
                    "text-sm text-grey-60 mt-4 mb-10 sm:max-w-8/12 md:text-base md:max-w-7/12 lg:max-w-5/12 xl:max-w-120 xl:mb-14 xl:mt-6"
                }
            >
                سفرِ پیدا کردن خونه رویایی‌ت از همین‌جا شروع میشه.
                آگهی‌هامون رو بگرد، اون خونه‌ای که تو رویات دیدی رو پیدا کن.
            </p>
            <div
                className={"space-y-4 sm:flex flex-row items-center sm:space-y-0 gap-4"}
            >
                <Link
                    className={"primary-btn block text-center"}
                    to="/properties"
                >
                    دیدن خانه ها
                </Link>
                <a
                    className={"secondary-btn block text-center"}
                    target={"_blank"}
                    href="https://card.homow.ir">
                    اطلاعات بیشتر
                </a>
            </div>
        </div>
    )
}

export default function LeftHeroSection({className}: MainProps): JSX.Element {
    return (
        <div className={`container xl:ml-20 2xl:ml-40 ${className}`}>
            {/* info and title */}
            <LeftHeroSectionInfo/>

            {/* state box hero section */}
            <div className={"grid grid-cols-2 gap-2 sm:flex xl:gap-5"}>
                <LeftHeroSectionState
                    className={"w-full"}
                    title={"+200"}
                    text={"مشتری های راضی"}
                />
                <LeftHeroSectionState
                    className={"w-full"}
                    title={"10هزار"}
                    text={"خانه برای مشتری ها"}
                />
                <LeftHeroSectionState
                    title={"+16"}
                    text={"سال سابقه"}
                    className={"col-span-2 sm:col-span-1 w-full"}
                />
            </div>
        </div>
    );
};