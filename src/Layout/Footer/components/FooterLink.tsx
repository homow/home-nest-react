import type {JSX} from "react";
import type {LinkData} from "@/types/footer.types";
import LinkBox from "../common/LinkBox";
import LinkInput from "../common/LinkInput";

const footerLinkData: LinkData[] = [
    {
        title: "صفحه اصلی",
        links: [
            {tagName: "Link", url: "/#hero-section", text: "بخش اصلی"},
            {tagName: "Link", url: "/#featured-property", text: "ملک های جدید"}
        ],
    },
    {
        title: "درباره ما",
        links: [
            {tagName: "Link", url: "/about", text: "داستان ما"},
            {tagName: "Link", url: "/about", text: "کارهای ما"}
        ],
    },
    {
        title: "پورتفولیو",
        links: [
            {tagName: "a", url: "https://homow.ir", text: "وبسایت اصلی"},
            {tagName: "a", url: "https://card.homow.ir", text: "ارتباط با من"},
            {tagName: "a", url: "https://t.me/homow_portfolio", text: "نمونه کارها"}
        ],
    },
    {
        title: "راه های ارتباطی",
        links: [
            {tagName: "a", url: "https://github.com/homow", text: "گیتهاب"},
            {tagName: "a", url: "tel:+989210629512", text: "شماره تلفن"},
            {tagName: "a", url: "https://www.youtube.com/@homow_dev", text: "یوتیوب آموزشِ فرانت"},
        ]
    }
];

export default function FooterLinks(): JSX.Element {
    return (
        <div className={"container space-y-12 xl:flex flex-row-reverse items-start justify-between"}>
            <LinkInput/>

            <div className={"grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 xl:gap-20"}>
                {footerLinkData && (
                    footerLinkData.map(link =>
                        <LinkBox
                            key={link.title}
                            linkData={link}
                        />
                    )
                )}
            </div>
        </div>
    );
};