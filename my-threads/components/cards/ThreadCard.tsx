import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    id: string,
    currentUserId: string,
    parentId: string | null,
    content: string,
    author: {
        name: string;
        image: string,
        id: string
    },
    community: {
        id: string;
        name: string;
    } | null,
    createdAt: string,
    comments: {
        author: {
            image: string;

        };

    }[];
    isComment?: boolean;

}
export default function ThreadCard(
    { id,
        currentUserId,
        parentId,
        content,
        author,
        community,
        createdAt,
        comments,
        isComment,
    }: Props
) {
    return (
        <article className={`flex w-full flex-col gap-2 rounded-xl  ${isComment ? 'px-0 xs:px-7' : 'bg-dark-2 p-7'}`}>
            <div className='flex items-start justify-between'>
                <div className='flex w-full flex-1 flex-row gap-4'>
                    <div className='flex flex-col items-center'>
                        <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
                            <Image src={author.image} alt="Profile Image" className="cursor-pointer rounded-full" width={24} height={24} />
                        </Link>
                        <div className='thread-card_bar' />
                    </div>
                    <div className='flex w-full flex-col'>
                        <Link href={`/profile/${author.id}`} className="w-fit">
                            <h4 className=' ps-0 mx-0 cursor-pointer text-base-semibold text-light-1'>
                                {author.name}
                            </h4>
                        </Link>
                        <p className='mt-2 text-regular text-light-2'>{content}</p>
                        <div className='mt-5 flex flex-row gap-3'>
                            <div className='flex  gap-3.5'></div>
                            <Image src="/assets/heart-gray.svg" alt="heart" width={24} height={24} className='cursor-pointer object-contain hover' />
                            <Link href={`/thread/${id}`}>
                                <Image src="/assets/reply.svg" alt="heart" width={24} height={24} className='cursor-pointer object-contain hover' />
                            </Link>
                            <Image src="/assets/repost.svg" alt="heart" width={24} height={24} className='cursor-pointer object-contain hover' />
                            <Image src="/assets/share.svg" alt="heart" width={24} height={24} className='cursor-pointer object-contain hover' />

                        </div>
                        {/* {isComment && comments.length > 0 && (
                            <Link href={`/thread/${id}`}>
                                <p className='mt-1 text-subtle-medium'>{comments.length}replies</p>
                            </Link>
                        )} */}
                    </div>
                </div>
            </div>



        </article>
    )
}
