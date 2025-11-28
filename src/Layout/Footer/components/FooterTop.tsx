import type {JSX} from "react";
import {Link} from "react-router";
import Icon from "@ui/icons/Icon";
import {cn} from "@utils/ui-utils";

type Props = {
    className?: string;
}

function GrowSpineIcon({className}: Props): JSX.Element {
    return (
        <span
            className={
                cn("-z-10 inline-block max-w-max absolute", className)
            }
        >
            <Icon
                className={"inline size-auto opacity-8 dark:opacity-3 w-72 max-h-max"}
                icon={"growthSpine"}
            />
        </span>
    );
}

export default function FooterTop(): JSX.Element {
    return (
        <div
            className={"relative overflow-hidden border-y border-grey-15"}
        >

            {/* grow spine svg icon */}
            <GrowSpineIcon
                className={"rotate-90 top-0 -left-20 md:bottom-0 md:top-auto md:rotate-0 md:-left-4 md:scale-150"}
            />
            <GrowSpineIcon
                className={"-scale-x-100 -right-4 bottom-0 md:-scale-x-150 md:scale-y-150"}
            />

            <div className={"container py-12 sm:flex flex-row items-center justify-between"}>
                {/* Footer top info */}
                <div className={"space-y-2 mb-7"}>
                    {/* footer top title */}
                    <h5 className={"text-xl max-w-11/12 xs:max-w-9/12"}>شروع مسیر سرمایه‌گذاری در آشیانه را همین امروز آغاز کنید.</h5>

                    <p className={"text-grey-60 text-sm text-balance"}>ملک رؤیایی‌تان تنها یک کلیک فاصله دارد. چه به‌دنبال خانه‌ای تازه باشید یا سرمایه‌گذاری هوشمند، آشیانه در کنار شماست. املاک موجود را ببینید یا برای مشاوره اختصاصی با تیم ما تماس بگیرید.</p>
                </div>
                <div className={"w-full sm:max-w-max"}>
                    {/* footer top link */}
                    <Link
                        className={"primary-btn block text-center w-full"}
                        to="/properties"
                    >
                        دیدن ملک ها
                    </Link>
                </div>
            </div>
        </div>
    );
};