import type {Dispatch, SetStateAction} from "react";
import {NavLink} from "react-router";
import Logo from "@ui/Logo";
import {cn} from "@utils/ui-utils";

type Props = {
    openMenu: boolean;
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

type NavLinkProps = {
    isActive?: boolean;
    isPending?: boolean;
}

export default function HeaderNav({openMenu, setOpenMenu}: Props) {
    // close menu after click to menu links
    const handleCloseMenu: () => void = (): void => setOpenMenu(false);

    // active style to links
    const linkClass = ({isActive}: NavLinkProps): string => cn("my-0.5 pr-2 py-3 block hover:max-md:bg-black/10 hover:max-md:dark:bg-white/5 active:max-md:bg-black/10 active:max-md:dark:bg-white/5 md:p-0", isActive && "text-violet-500 max-md:bg-black/10 max-md:dark:bg-white/5");

    return (
        <ul
            className={
                cn("flex items-start max-md:nav-mobile md:gap-4",
                    openMenu ? "right-0" : "-right-51")
            }
        >
            <li
                className={"md:hidden w-full cursor-pointer hover:opacity-100 md:max-w-max text-center mb-5"}>
                <Logo className={"max-w-10"}/>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/"}
                    className={linkClass}>
                    صفحه اصلی
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/properties"}
                    className={linkClass}>
                    ملک ها
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/about"}
                    className={linkClass}>
                    درباره ما
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/contact"}
                    className={linkClass}>
                    تماس با ما
                </NavLink>
            </li>
        </ul>
    );
};