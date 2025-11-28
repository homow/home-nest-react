import type {JSX} from "react";
import {Link} from "react-router";
import logo from "@/assets/logo.webp";
import {cn} from "@utils/ui-utils";

type Props = {
    className?: string;
}

export default function Logo({className}: Props): JSX.Element {
    return (
        <Link
            className={
                cn("w-full inline-block hover:opacity-100", className)
            }
            to={"/"}
        >
            <img
                className={"w-full"}
                src={`${logo}`} alt="Logo picture"
            />
        </Link>
    );
};