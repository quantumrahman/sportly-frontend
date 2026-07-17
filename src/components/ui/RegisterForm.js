'use client';

export default function RegisterForm() {
    return (
        <div className="w-full">
            <form>
                <div className="space-y-1.5">
                    <div className="flex w-full flex-col items-center justify-center space-y-1.5 sm:flex-row sm:gap-4 sm:space-y-0">
                        <label htmlFor="user-name" className="block w-full">
                            <input
                                type="text"
                                id="user-name"
                                placeholder="Full name"
                                className={`w-full rounded-md border p-3 text-base font-normal transition-all duration-200 ease-linear ${false ? 'border-red-500 bg-red-500/5 text-red-500 outline-red-500 placeholder:text-red-500' : 'border-border placeholder:text-text-muted caret-primary text-primary bg-transparent'}`}
                            />
                            <span className="block h-4 text-sm font-normal text-red-500">
                                {/* ! Email is required */}
                            </span>
                        </label>
                        <label htmlFor="user-image" className="block w-full">
                            <input
                                type="text"
                                id="user-image"
                                placeholder="Photo"
                                className={`w-full rounded-md border p-3 text-base font-normal transition-all duration-200 ease-linear ${false ? 'border-red-500 bg-red-500/5 text-red-500 outline-red-500 placeholder:text-red-500' : 'border-border placeholder:text-text-muted caret-primary text-primary bg-transparent'}`}
                            />
                            <span className="block h-4 text-sm font-normal text-red-500">
                                {/* ! Email is required */}
                            </span>
                        </label>
                    </div>
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
