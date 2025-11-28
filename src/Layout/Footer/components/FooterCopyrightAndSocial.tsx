import type {JSX} from "react";
import SocialMedia from "../common/SocialMedia";
import Copyright from "../common/Copyright";

export default function FooterCopyrightAndSocial(): JSX.Element {
    return (
        <div className={"bg-grey-10 py-10"}>
            <div className={"container space-y-5 md:flex flex-row justify-between"}>

                {/* footer copy right */}
                <div className={"flex flex-row items-center justify-center gap-2"}>
                    <SocialMedia
                        link={"https://github.com/homow"}
                        icon={"github"}
                    />
                    <SocialMedia
                        link={"https://www.youtube.com/@homow_dev"}
                        icon={"youtube"}
                    />
                    <SocialMedia
                        link={"https://homow.ir/"}
                        icon={"website"}
                    />
                    <SocialMedia
                        link={"https://t.me/homow_dev"}
                        icon={"telegram"}
                    />
                    <SocialMedia
                        link={"https://www.instagram.com/homow_dev"}
                        icon={"instagram"}
                    />
                </div>

                {/* footer social media links */}
                <Copyright/>
            </div>
        </div>
    )
}
