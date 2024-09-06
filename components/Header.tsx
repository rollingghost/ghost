export default function Header() {
    return (
        <header class="flex flex-row p-5 font-mono border-b border-b-[#FFFFFF] 
            fixed top-0 left-0 w-full bg-inherit">
            <div class="rounded flex-1">
                <div class="w-fit text-center font-bold cursor-pointer">
                    <a href="/" class="flex flex-row items-center">
                        <img
                            src="logo.svg"
                            width="30"
                            height="30"
                            alt=""
                            style={{ borderRadius: 50 }}
                        />
                        <span class="ml-2">Ghost</span>
                    </a>
                </div>
            </div>
            <div class="cursor-pointer flex flex-row gap-4">
                <div class="cursor-pointer">
                    <a href="/about">About</a>
                </div>
                <div>
                    <button type="button">
                        <i class="bi bi-three-dots-vertical"></i>
                    </button>
                </div>
            </div>
        </header>
    );
}
