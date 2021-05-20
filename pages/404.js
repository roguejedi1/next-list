import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
    return (
        <div className="not-found">
            <h1>Not found</h1>
            <h2>Wrong place jokeman</h2>
            <p>Go <Link href="/">Home</Link></p>
        </div>
    )
}

export default NotFound