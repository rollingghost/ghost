import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Layout({ Component }: PageProps) {
    // Doing something with state here
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
                >
                </link>
            </Head>
            <Header />
            <div class="layout bg-[#3C3C3B] container mx-auto">
                <Component />
            </div>
            <Footer />
        </>
    );
}
