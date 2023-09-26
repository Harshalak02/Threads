import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { fetchUser } from '@/lib/actions/user.actions';
import ProfileHeader from '@/components/shared/ProfileHeader';

export default async function page({ params }: { params: { id: string } }) {
    const user = await currentUser();
    if (!user) return null;
    const userInfo = await fetchUser(params.id);
    if (!userInfo?.onboarded) redirect('/onboarding');
    return (
        <div>
            <section className='text-white'>
                <ProfileHeader accountId={userInfo.id} authUserId={user.id} name={userInfo.username} username={userInfo.name} imageUrl={userInfo.imgUrl} bio={userInfo.bio} />
            </section>
        </div>
    )
}
