// import Navbar from "@/app/components/Navbar";
import Landing from "@/app/components/Landing";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            {/*<Navbar/>*/}
            <Landing/>
            {children}
        </main>
    )
}