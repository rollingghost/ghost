export default function About() {
    // About the company ghost
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-[#3C3C3B] text-[#00FF00]">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-2">
                    Welcome to Ghost, the company dedicated to providing the
                    best services in the industry.
                </p>
                <p className="text-lg mb-2">
                    Our mission is to innovate and lead the market with our
                    cutting-edge solutions.
                </p>
                <p className="text-lg mb-2">
                    We value our customers and strive to exceed their
                    expectations in every project.
                </p>
                <p className="text-lg">
                    Thank you for choosing Ghost. We look forward to working
                    with you.
                </p>
            </div>
        </>
    );
}
