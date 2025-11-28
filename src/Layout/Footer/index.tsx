import type {JSX} from "react";
import FooterLink from "./components/FooterLink";
import FooterTop from "./components/FooterTop";
import FooterCopyrightAndSocial from "./components/FooterCopyrightAndSocial"

export default function Footer(): JSX.Element {
    return (
        <footer
            className="mt-18 space-y-12"
        >
            <FooterTop/>
            <FooterLink/>
            <FooterCopyrightAndSocial/>
        </footer>
    )
}