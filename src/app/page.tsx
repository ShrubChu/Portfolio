import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
/* to use created page title: className="page-title"*/
//TODO: add description, add contact me(get in touch button) at the bottom, add photo


export default function Home() {
    return (
        <>
            <h1 className="page-title">Hey, I&#39;m Hareign!</h1>
            <p className="py-5">I&#39;m a Computer Science undergraduate at the University of Nevada, Las Vegas, with a passion for cybersecurity. Alongside my studies I volunteer at my local church, build custom controllers and play the drums/piano. </p>

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