"use cliet"
import Image from 'next/image';
import React from 'react'

interface Props {
    accountId: string;
    authUserId: string;
    name: string;
    username: string;
    imageUrl: string;
    bio: string;
}

export default function ProfileHeader({ accountId, authUserId, name, username, imageUrl, bio }: Props) {
    return (
        <div className='flex w-full flex-col justify-start'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='relative h-20 w-20 object-cover'>
                        <Image src={imageUrl} alt="Profile Image" className='rounded-full object-cover shadow-2xl text-white' width={24} height={24} />
                    </div>
                </div>
            </div>
        </div>
    );
}

