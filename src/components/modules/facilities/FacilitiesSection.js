'use client';

import FacilityCard from '@/components/ui/FacilityCard';

export default function FacilitiesSection() {
    return (
        <section className="w-full py-15">
            <div className="mx-auto w-full max-w-5xl">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                </div>
            </div>
        </section>
    );
}
