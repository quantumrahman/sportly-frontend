import Link from 'next/link';

export default function Logo() {
    return (
        <div className="w-fit">
            <Link href={'/'} className="inline-flex w-fit">
                <h1 className="logo">sportly</h1>
            </Link>
        </div>
    );
}
