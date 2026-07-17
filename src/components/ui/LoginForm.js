'use client';

export default function LoginForm() {
    return (
        <div className="w-full">
            <form>
                <div className="space-y-1.5">
                    <label htmlFor="email-address" className="block w-full">
                        <input
                            type="text"
                            id="email-address"
                            placeholder="Email address"
                            className={`w-full rounded-md border p-3 text-base font-normal transition-all duration-200 ease-linear ${false ? 'border-red-500 bg-red-500/5 text-red-500 outline-red-500 placeholder:text-red-500' : 'border-border placeholder:text-text-muted caret-primary text-primary bg-transparent'}`}
                        />
                        <span className="block h-4 text-sm font-normal text-red-500">
                            {/* ! Email is required */}
                        </span>
                    </label>
                    <label htmlFor="user-password" className="block w-full">
                        <input
                            type="password"
                            id="user-password"
                            placeholder="Password"
                            className={`w-full rounded-md border p-3 text-base font-normal transition-all duration-200 ease-linear ${false ? 'border-red-500 bg-red-500/5 text-red-500 outline-red-500 placeholder:text-red-500' : 'border-border placeholder:text-text-muted caret-primary text-primary bg-transparent'}`}
                        />
                        <span className="block h-4 text-sm font-normal text-red-500">
                            {/* ! Email is required */}
                        </span>
                    </label>
                    <button className="bg-primary text-surface hover:bg-primary-hover w-full rounded-full py-3 text-base font-medium transition-all duration-200 ease-linear">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}
