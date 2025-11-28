import type {FormEvent, JSX} from "react";
import Logo from "@ui/Logo";
import Icon from "@ui/icons/Icon";

export default function LinkInput(): JSX.Element {
    return (
        <div>
            <div className={"flex flex-row items-center gap-2 mb-3"}>
                <Logo className={"max-w-10"}/>
            </div>
            <form onSubmit={(e: FormEvent<HTMLFormElement>): void => e.preventDefault()} className="xl:min-w-80">
                <label className="group flex flex-row items-center gap-2 border border-grey-15 rounded-xl px-2 transition-all duration-300 focus-within:border-violet-600">

                    <label htmlFor={"email"} className={"hidden"}></label>
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="ایمیل"
                        autoComplete="email"
                        className="flex-1 w-full outline-none pl-5 py-3 rounded-l-lg focus:border-violet-600 bg-transparent"
                    />
                    <Icon
                        parentClassName={"max-w-max"}
                        icon={"send"}
                    />
                </label>
            </form>
        </div>
    );
};