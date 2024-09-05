// components/MatrixEffect.tsx
import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";

const MatrixEffect: FunctionalComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = globalThis.innerWidth;
        canvas.height = globalThis.innerHeight;

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops: number[] = new Array(columns).fill(1);

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, index) => {
                const text = letters.charAt(
                    Math.floor(Math.random() * letters.length),
                );
                const x = index * fontSize;
                ctx.fillText(text, x, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[index] = 0;
                }

                drops[index]++;
            });
        }

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ display: "block", background: "black" }}
        />
    );
};

export default MatrixEffect;
