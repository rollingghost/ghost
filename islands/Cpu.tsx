import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function Cpu() {
    const cpu = useSignal(0);

    useEffect(() => {
        const interval = setInterval(() => {
            cpu.value = Math.random() * 100;
        }, 1000);

        return () => clearInterval(interval);
    }, [cpu.value]);

    return (
        <div class="text-center p-3">
            CPU:{" "}
            <span
                style={{
                    color: cpu.value > 80
                        ? "red"
                        : cpu.value > 50
                        ? "yellow"
                        : "inherit",
                }}
            >
                {cpu.value.toFixed(2)}%
            </span>
        </div>
    );
}
