import {Link} from "react-router";
import Icon from "@ui/icons/Icon";
import {cn} from "@utils/ui-utils";

type Props = {
    img: string;
    title: string;
    description: string;
    features: [number, number, string];
    price: string;
    propertyLink: string;
    className?: string;
}

export default function PropertyCard(
    {
        img,
        title,
        description,
        features,
        price,
        propertyLink,
        className
    }: Props) {

    return (
        <div
            className={cn(
                "max-w-128 border border-grey-15 rounded-xl p-6 space-y-4", className
            )}
        >
            {/* image card */}
            <Link
                className={"block aspect-video hover:opacity-100"}
                to={propertyLink}
            >
                <img
                    className={"w-full object-cover"}
                    loading={"lazy"}
                    src={img}
                    alt={`${title} picture`}
                />
            </Link>

            {/* info card */}
            <div>
                <h3>
                    <Link
                        to={propertyLink}
                        className={"hover:opacity-100"}
                    >
                        {title}
                    </Link>
                </h3>
                <p
                    className={"min-h-10 relative mt-1 text-grey-60 text-sm line-clamp-2"}
                >
                    {description}
                </p>
            </div>

            {/* features card */}
            <div
                className={"flex flex-wrap flex-row gap-1"}
            >
                <p
                    className={"flex flex-row items-start text-sm gap-1 px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}
                >
                    <Icon
                        icon={"buildingFeatures"}
                        className={"size-4"}
                    />
                    {features[0]}-اتاق‌خواب
                </p>

                <p
                    className={"flex flex-row items-start text-sm gap-1 px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}
                >
                    <Icon
                        icon={"bedFeatures"}
                        className={"size-4"}
                    />
                    {features[1]}-حمام
                </p>
                <p
                    className={"flex flex-row items-start text-sm gap-1 px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}>
                    <Icon
                        icon={"bathFeatures"}
                        className={"size-4"}
                    />
                    {features[2]}
                </p>
            </div>

            {/* price and property link */}
            <div
                className={"flex flex-row items-center justify-between"}
            >
                <Link
                    className={"primary-btn"}
                    to={propertyLink}
                >
                    جزئیات بیشتر</Link>
                <p
                    className={"flex flex-col items-start"}
                >
                    <span
                        className={"text-sm text-grey-60"}
                    >
                        قیمت
                    </span>
                    <span
                        className={"text-lg"}>
                        ${price}
                    </span>
                </p>
            </div>
        </div>
    );
};