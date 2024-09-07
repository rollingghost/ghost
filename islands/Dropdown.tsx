import { Signal } from "@preact/signals";
import { ghostDeleteCookie, ghostGetCookie } from "../utilities/Cookie.ts";

interface DropdownProps {
    dropped: Signal<boolean>;
}

export default function Droppdown(
    drop: DropdownProps,
) {
    return (
        <>
            <button
                type="button"
                class="px-2"
                onClick={() => drop.dropped.value = !drop.dropped.value}
            >
                <i className="bi bi-three-dots-vertical"></i>
            </button>
            {drop.dropped.value && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <a
                        href="/settings"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Settings
                    </a>

                    {ghostGetCookie("ghost")
                        ? (
                            <a
                                href="/logout"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                onClick={() => ghostDeleteCookie("ghost")}
                            >
                                {ghostGetCookie("ghost")}
                            </a>
                        )
                        : (
                            <a
                                href="/login"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            >
                                Login | Register
                            </a>
                        )}
                </div>
            )}
        </>
    );
}
