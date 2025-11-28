import type {JSX} from "react";
import Icon from "@ui/icons/Icon";

type Props = {
    link: string;
    icon: string;
}

export default function SocialMedia({link, icon}: Props): JSX.Element {
    return (
        <a
            href={link}
            className={
                "inline-block bg-primary-bg rounded-full p-3 hover:opacity-100 hover:bg-violet-600 hover:*:text-white max-md:active:bg-violet-600 max-md:active:*:text-white"
            }
        >
            <Icon
                parentClassName={"inline"}
                className={"size-6"}
                icon={icon}
            />
        </a>
    );
};