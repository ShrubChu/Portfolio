"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * 
 * SSR - Server Side Rendering - HTML gets generated from the server THEN sends back to the client
 * CSR - Client Side Rendering - HTML gets generated frmo the client
 * 
 */
export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav>
            <div className="flex gap-4 text-gray-400">
                <Link href="/" className={`${pathname === "/" && "text-white"}`}>Home</Link>
                <Link href="/portfolio" className={`${pathname === "/portfolio" && "text-white"}`}>Portfolio</Link>
                <Link href="/certifications" className={`${pathname === "/certifications" && "text-white"}`}>Certifications</Link>
                <Link href="/biography" className={`${pathname === "/biography" && "text-white"}`}>About Me</Link>

            </div>
        </nav>
    )
}