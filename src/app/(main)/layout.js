import '../globals.css';

export default function MainLayout({ children }) {
    return (
        <main className="min-h-screen w-full">
            <div className="flex w-full flex-col justify-between">{children}</div>
        </main>
    );
}
