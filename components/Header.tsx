export default function Header() {
    return (
        <header class="flex flex-row p-5 font-mono border-b border-b-[#FFFFFF] 
            fixed top-0 left-0 w-full bg-inherit">
            <div class="rounded flex-1 cursor-not-allowed">
                Ghost
            </div>
            <div class="cursor-pointer">
                <button type="button">
                    <i class="bi bi-three-dots-vertical"></i>
                </button>
            </div>
        </header>
    );
}
