import type {SetStateAction, JSX, Dispatch} from 'react';
import {cn} from "@utils/ui-utils";

type Props = {
    flag: boolean;
    setFlag: Dispatch<SetStateAction<boolean>>;
}

export default function Overlay({flag, setFlag}: Props): JSX.Element {
    return (
        <div
            onClick={() => setFlag(false)}
            className={
                cn(
                    flag ? "block" : "hidden",
                    "fixed z-20 inset-0 bg-black/50 w-full h-full"
                )
            }
        />
    );
};