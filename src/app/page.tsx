import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
/* to use created page title: className="page-title"*/
//TODO: add description

export default function Home() {
    return (
        <>
            <h1 className="page-title">Hello ✋🤓</h1>
            <p>Description...</p>

            <div className="py-8">
                <Link
                    href="/Casaclang_Resume.pdf"
                    //target: opens in a new tab
                    target="_blank"
                    className="primary-button"
                >
                    Resume
                </Link>

            </div>
        </>
    )

}