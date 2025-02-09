import NavbarWrapper from "@/app/components/NavbarWrapper";
import type {Metadata} from "next";
import AboutWrapper from "@/app/components/AboutWrapper";
export const metadata: Metadata = {
    title: "About - Tensor Bloom",
    description: "About section of ",
};
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <NavbarWrapper/>
            {/*<AboutWrapper/>*/}
            {children}
        </main>
    )
}