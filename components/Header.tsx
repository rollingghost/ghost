import { useSignal } from "@preact/signals";

export default function Header() {
    const isDropdownVisible = useSignal(false);

    const toggleDropdown = () => {
        isDropdownVisible.value = !isDropdownVisible.value;
    };

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
                    <button
                        type="button"
                        class="px-2"
                        onClick={toggleDropdown}
                    >
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>
                    {isDropdownVisible.value && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                            <a
                                href="/profile"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            >
                                Profile
                            </a>
                            <a
                                href="/settings"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            >
                                Settings
                            </a>
                            <a
                                href="/logout"
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            >
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
