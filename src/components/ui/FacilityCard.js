'use client';

import { FaArrowRight } from 'react-icons/fa6';

import Link from 'next/link';

export default function FacilityCard({ facility }) {
    return (
        <article className="flex w-full flex-col gap-3">
            <div className="bg-surface-muted relative aspect-video w-full overflow-hidden rounded-xl">
                <span className="bg-primary text-surface absolute top-4 right-4 rounded-full px-2 py-1 text-xs font-normal">
                    Football
                </span>
            </div>
            <div className="w-full">
                <h3 className="text-primary text-xl font-semibold">Green arena football club</h3>
                <div className="mt-1 flex items-center justify-between gap-4">
                    <p className="text-text-secondary text-sm font-normal">Gulshan, Dhaka</p>
                    <p className="text-text-primary text-base font-semibold">$500</p>
                </div>
                <Link
                    href={'/'}
                    className="text-text-primary hover:text-text-muted group mt-3 inline-flex items-center justify-center gap-1 text-base font-medium transition-all duration-200 ease-linear hover:underline"
                >
                    Book now{' '}
                    <FaArrowRight className="text-xs transition-transform duration-200 ease-linear group-hover:translate-x-1" />
                </Link>
            </div>
        </article>
    );
}
