import '../globals.css';

export default function DashboardLayout({ children }) {
    return (
        <main className="min-h-screen w-full">
            <div>{children}</div>
        </main>
    );
}
