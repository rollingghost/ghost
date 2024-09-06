export default function Footer() {
    return (
        <>
            <footer class="fixed bottom-0 left-0 w-full flex flex-row">
                <div class="flex-1 px-5 py-2">
                    <span class="text-xs">
                        <i class="bi bi-c-circle"></i>
                    </span>
                    <span>{"  " + new Date().getFullYear()} | Ghost</span>
                </div>
                <div class="px-5 py-2 flex flex-row gap-3">
                    <div class="cursor-pointer">
                        <a
                            href="https://www.linkedin.com/in/achira-jacob/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <div class="cursor-pointer">
                        <a
                            href="https://github.com/rollingghost"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bi bi-github"></i>
                        </a>
                    </div>
                    <div class="cursor-pointer">
                        <a
                            href="https://x.com/AchitraJacobs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i class="bi bi-twitter-x"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
