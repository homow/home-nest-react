import type {JSX, SyntheticEvent} from "react";
import Icon from "@ui/icons/Icon";
import {cn} from "@utils/ui-utils";

type Props = {
    className?: string;
}

export default function RightHeroSection({className}: Props): JSX.Element {
    return (
        <div
            className={
                cn("relative container xl:p-0 xl:w-full", className)
            }
        >
            {/* image and wave svg */}
            <div
                className={
                    "relative bg-zinc-900 rounded-custom overflow-hidden border border-grey-15 max-w-200 mx-auto xl:max-w-230 xl:mx-0 xl:rounded-none"
                }
            >

                {/* wave svg */}
                <Icon
                    parentClassName={"inline absolute inset-0 opacity-20 dark:opacity-40"}
                    className={"size-full"}
                    icon={"waveField"}
                />

                {/* hero section image */}
                <img
                    decoding={"async"}
                    className={"w-full relative z-10 aspect-square"}
                    src="https://bgwjvtsiajqefdaihrha.supabase.co/storage/v1/object/public/static/home/hero-section-img.webp"
                    onError={(e: SyntheticEvent<HTMLImageElement, Event>): void => {
                        e.currentTarget.style.display = "none";
                        const fallback = document.createElement("div");
                        fallback.className = "min-h-100 min-w-200 flex items-center justify-center bg-zinc-800 text-zinc-400";
                        fallback.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 opacity-60" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7l9-4 9 4-9 4-9-4z"/>
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17l9 4 9-4M3 12l9 4 9-4"/>
                            </svg>`;
                        const target: ParentNode | null = e.currentTarget.parentNode;
                        if (target) target.appendChild(fallback);
                    }}
                    alt="Building Hero section Images"/>
            </div>

            {/* circle svg */}
            <Icon
                parentClassName={
                    "inline absolute z-10 left-[4%] -bottom-[18%] sm:-bottom-[14%] sm:left-[2%] md:-bottom-[10%] lg:left-[11%] lg:-bottom-[8%] xl:bottom-2/3 xl:-left-4"
                }
                className={"size-30"}
                icon={"discoverCircle"}
            />
        </div>
    );
};