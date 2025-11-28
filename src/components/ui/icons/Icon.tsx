import {type JSX} from "react";
import {cn} from "@/lib/utils/ui-utils";

type Props = {
    icon: string;
    className?: string;
    parentClassName?: string;
}

export default function Icon(
    {icon, className, parentClassName}: Props,
): JSX.Element {
    return (
        <span
            className={
                cn("inline-block", parentClassName)
            }
        >
            <svg
                role="img"
                aria-label={icon}
                className={
                    cn("size-6", className)
                }
            >
                <use
                    href={`#${icon}-icon`}
                />
            </svg>
        </span>
    );
};