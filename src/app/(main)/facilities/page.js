'use client';

import PageHeading from '@/components/ui/PageHeading';
import FacilitiesSection from '@/components/modules/facilities/FacilitiesSection';

export default function FacilitiesPage() {
    return (
        <div className="bg-background min-h-screen w-full px-5 md:px-6 lg:px-8">
            <PageHeading
                title={'Browse Facilities'}
                paragraph={'Discover top-rated venues for every game.'}
            />
            <FacilitiesSection />
        </div>
    );
}
