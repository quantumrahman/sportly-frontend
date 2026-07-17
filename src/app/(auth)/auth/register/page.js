'use client';

import { FaGoogle } from 'react-icons/fa6';

import Logo from '@/components/ui/Logo';
import RegisterForm from '@/components/ui/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
    return (
        <section className="bg-background flex min-h-screen w-full items-center justify-center">
            <div className="flex flex-2 items-center justify-center px-5 md:px-6 lg:px-7">
                <div className="mx-auto w-full max-w-[450px]">
                    <div className="flex items-center justify-center">
                        <Logo />
                    </div>
                    <div className="mt-7 flex w-full flex-col items-center justify-center space-y-2 text-center">
                        <h2 className="text-primary text-[32px] font-semibold">Create Account</h2>
                        <p className="text-text-muted w-full max-w-[400px] text-base leading-6 font-normal">
                            Create your SportNest account to book your favorite sports facilities
                            anytime.
                        </p>
                    </div>
                    <button className="border-border group hover:bg-surface-muted mt-10 flex w-full items-center justify-center gap-2.5 rounded-full border bg-transparent p-3 transition-all duration-200 ease-linear">
                        <FaGoogle className="text-xl" />
                        <span className="text-primary text-base font-semibold transition-all duration-200 ease-linear">
                            Continue with Google
                        </span>
                    </button>
                    <div className="my-5 flex w-full items-center justify-center gap-2">
                        <div className="bg-border h-px w-full"></div>
                        <span className="text-text-muted text-base font-normal">or</span>
                        <div className="bg-border h-px w-full"></div>
                    </div>
                    <RegisterForm />
                    <p className="mt-3 text-center text-xs">
                        By continuing, you agree to Sportly <span className="underline">Terms</span>{' '}
                        of Service and <span className="underline">Privacy Policy</span>.
                    </p>
                    <p className="text-primary mt-5 text-center text-sm font-medium">
                        Already have an account?{' '}
                        <Link href={'/auth/login'} className="hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <div className="hidden min-h-screen flex-1 bg-[url('/img/auth.webp')] bg-cover bg-center bg-no-repeat md:block"></div>
        </section>
    );
}
