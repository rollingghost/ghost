import { Signal } from "@preact/signals";

interface DropdownProps {
    dropped: Signal<boolean>;
}

export const handler: Handlers = {};

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
                <i class="bi bi-three-dots-vertical"></i>
            </button>
            {drop.dropped.value && (
                <div class="absolute right-0 mt-2 w-48 bg-[#3C3C3B] border border-[#040f16] rounded shadow-lg z-10">
                    <a
                        href="/settings"
                        class="block px-4 py-2 hover:bg-[#040f16]"
                    >
                        Settings
                    </a>

                    {ghostGetCookie("ghost")
                        ? (
                            <a
                                href="/logout"
                                class="block px-4 py-2 hover:bg-[#040f16]"
                            >
                                {ghostGetCookie("ghost")}
                            </a>
                        )
                        : (
                            <a
                                href="/login"
                                class="block px-4 py-2 hover:bg-[#040f16]"
                            >
                                Login | Register
                            </a>
                        )}
                </div>
            )}
        </>
    );
}
