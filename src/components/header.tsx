import Link from 'next/link'
import Navigation from './navigation'

export default function CustomHeader() {
    return (
        // to justify-center requires flex box: 'flex'
        //attach styles using Class: className
        <div className="flex justify-between py-4">
            <Navigation />

            <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/hareign-casaclang-881519258/"
                    target="_blank">LinkedIn</Link>
                <Link href="https://github.com/ShrubChu"
                    target="_blank">GitHub</Link>
            </div>
        </div>
    )
}