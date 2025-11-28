import type {JSX} from "react";
import {Link} from "react-router";
import Icon from "@ui/icons/Icon";

type Props = {
    title: string;
    text: string;
    link?: string;
    linkText?: string;
}

export default function TopTitleSections(
    {
        title,
        text,
        link,
        linkText
    }: Props): JSX.Element {

    return (
        <div
            className={"relative space-y-2"}
        >
            {/* star icon */}
            <span
                className={"absolute -top-1/3 -right-2 -scale-x-100"}
            >
                <Icon
                    parentClassName={"w-12 h-5 lg:w-14 lg:h-6"}
                    icon={"topStarSections"}
                />
            </span>

            {/* title */}
            <h2>{title}</h2>

            {link ? (
                <div
                    className={"relative lg:flex items-start justify-between gap-4 mt-3"}
                >
                    {/* text of title section */}
                    <p
                        className={"text-sm text-grey-60 lg:text-base"}
                    >
                        {text}
                    </p>

                    {/* link of title section */}
                    <Link
                        className={"secondary-btn hidden lg:inline"}
                        to={link}
                    >
                        {linkText}
                    </Link>
                </div>
            ) : (
                // text
                <p
                    className={"text-sm text-grey-60 lg:text-base"}
                >
                    {text}
                </p>
            )}
        </div>
    );
};