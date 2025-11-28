import type {JSX} from "react";

export default function Copyright(): JSX.Element {
    return (
        <div
            className={"flex flex-col items-center justify-center gap-2 md:flex-row md:gap-10"}
        >
            <a
                rel={"noreferrer noopener"}
                target={"_blank"}
                href={"https://card.homow.ir"}
            >
                توسعه داده شده توسط homow.
            </a>
            <a
                rel={"noreferrer noopener"}
                target={"_blank"}
                href={
                    "https://www.figma.com/design/zpwtuKCAGYyYZn0DMDNImy/Real-Estate-Business-Website-UI-Template---Dark-Theme-%7C-Produce-UI--Community-?node-id=139-6238&t=PAe85chdY6gZx8MK-0"
                }
            >
                لینک اصلی طرح
            </a>
        </div>
    );
};