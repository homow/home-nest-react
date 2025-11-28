type Links = {
    tagName: "Link" | "a";
    url: string;
    text: string;
}

type LinkData = {
    title: string;
    links: Links[];
}

export type {LinkData};