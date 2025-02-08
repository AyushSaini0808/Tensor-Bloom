import NavbarWrapper from "@/app/components/NavbarWrapper";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: "Submit Problem - Tensor Bloom",
    description: "About section of ",
};
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <NavbarWrapper/>
            {children}
        </main>
    )
}