import '../globals.css';

export default function AuthLayout({ children }) {
    return (
        <main className="min-h-screen w-full">
            <div className="w-full">{children}</div>
        </main>
    );
}
