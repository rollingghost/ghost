import { useSignal } from "@preact/signals";
import Droppdown from "../islands/Dropdown.tsx";

export default function Header() {
    const dropped = useSignal(false);

    return (
        <header className="flex flex-row p-5 font-mono border-b border-b-[#FFFFFF] 
            fixed top-0 left-0 w-full bg-inherit">
            <div className="rounded flex-1">
                <div className="w-fit text-center font-bold cursor-pointer">
                    <a href="/" className="flex flex-row items-center">
                        <img
                            src="logo.svg"
                            width="30"
                            height="30"
                            alt=""
                            style={{ borderRadius: 50 }}
                        />
                        <span className="ml-2">Ghost</span>
                    </a>
                </div>
            </div>
            <div className="cursor-pointer flex flex-row gap-4">
                <div className="cursor-pointer">
                    <a href="/about">About</a>
                </div>
                <div className="relative">
                    <Droppdown dropped={dropped} />
                </div>
            </div>
        </header>
    );
}
