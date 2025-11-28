import type {JSX} from "react";
import type {LinkData} from "@/types/footer.types";
import {Link} from "react-router";

type Props = {
    linkData: LinkData;
}

export default function LinkBox({linkData}: Props): JSX.Element {
    return (
        <div>
            <h6
                className={
                    "text-grey-60 mb-4 md:text-lg"
                }
            >
                {linkData.title}
            </h6>

            <ul
                className={"flex flex-col gap-2 md:gap-2.5"}
            >
                {linkData.links && linkData.links.map((link, i): JSX.Element =>
                    <li
                        key={i}
                        className={"*:text-sm *:font-normal md:*:text-base"}
                    >
                        {link.tagName === "Link" ? (
                            <Link
                                to={link.url}
                            >
                                {link.text}
                            </Link>
                        ) : (
                            <a
                                target="_blank"
                                href={link.url}
                            >
                                {link.text}
                            </a>
                        )}
                    </li>
                )}
            </ul>
        </div>
    );
};