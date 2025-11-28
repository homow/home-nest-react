import type {JSX} from "react";
import Icon from "@ui/icons/Icon";

type Props = {
    text: string;
    icon: string;
}

function BottomHeroSectionBox({text, icon}: Props): JSX.Element {
    return (
        <div
            className={
                "relative bg-grey-10 rounded-custom border border-grey-15 text-center flex flex-col items-center py-5 px-3.5 text-sm md:text-base md:py-6 lg:py-7"
            }
        >
            <div
                className={"absolute right-4 top-4"}
            >
                <Icon
                    className={"text-gray-30"}
                    icon={"longArrow"}
                />
            </div>

            <Icon
                className={"size-15"}
                icon={icon}
            />
            <p>{text}</p>
        </div>
    )
}

export default function BottomHeroSection(): JSX.Element {
    return (
        <div
            className={
                "container grid grid-cols-2 gap-2.5 border border-grey-15 rounded-xl p-2.5 shadow-custom-no-blur md:grid-cols-4 md:max-w-none"
            }
        >
            <BottomHeroSectionBox
                text={"خونه رویایی‌تو پیدا کن"}
                icon={"purpleSun"}
            />
            <BottomHeroSectionBox
                text={"ارزش خونه‌تو آزاد کن"}
                icon={"purpleBuilding"}
            />
            <BottomHeroSectionBox
                text={"مدیریت خونه و ملک بدون دردسر"}
                icon={"purpleCircleCart"}
            />
            <BottomHeroSectionBox
                text={"سرمایه‌گذاری هوشمند، تصمیم‌گیری حساب‌شده"}
                icon={"purpleHouse"}
            />
        </div>
    );
};