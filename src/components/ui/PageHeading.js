'use client';

export default function PageHeading({ title, paragraph }) {
    return (
        <section className="border-border w-full border-b py-15 md:py-20 lg:py-30">
            <div className="mx-auto w-full max-w-7xl space-y-2">
                <h1 className="text-primary text-center text-[32px] leading-tight font-semibold md:text-[44px] lg:text-[56px]">
                    {title}
                </h1>
                <p className="text-text-muted mx-auto max-w-[450px] text-center text-sm font-normal md:text-base">
                    Discover top-rated venues for every game.
                </p>
            </div>
        </section>
    );
}
