import { NextPage } from 'next'
import Image from 'next/image'

export default function Biography() {
    return (
        <div>
            <h1 className="page-title">I&#39;m Hareign</h1>

            <div className="justify-center flex py-10">
                <Image
                    className="rounded-xl"
                    src="/family.jpg"
                    width={500}
                    height={500}
                    alt="Picture of my Family"
                />
            </div>
        </div>
    )

}