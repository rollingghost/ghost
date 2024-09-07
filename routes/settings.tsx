export default function Settings() {
    return (
        <h1 class="flex flex-col items-center justify-center h-screen gap-4">
            <div class="flex flex-row gap-4 border-b w-96">
                <div class="font-bold flex-1 text-right">Setting</div>
                <div>:</div>
                <div class="font-bold flex-1">Modifier</div>
            </div>
            <div class="flex flex-row gap-4 w-96">
                <div class="flex-1 text-right">Dark/Light</div>
                <div>:</div>
                <div class="flex-1">Toggle</div>
            </div>
            <div class="flex flex-row gap-4 w-96">
                <div class="flex-1 text-right">Sudo</div>
                <div>:</div>
                <div class="flex-1">Activate</div>
            </div>
            <div class="flex flex-row gap-4 w-96">
                <div class="flex-1 text-right">Theme</div>
                <div>:</div>
                <div class="flex-1">Choose</div>
            </div>
        </h1>
    );
}
