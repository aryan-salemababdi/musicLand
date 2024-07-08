'use client';

import { NextPage } from 'next';
import { Song } from '@/../../types';
import { useLoadImage } from '@/hooks/useLoadImage';
import Image from 'next/image';
import PlayButton from '../PlayButton/PlayButton';

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
    activeSongId: string | null;
}

const SongItem: NextPage<SongItemProps> = ({
    data,
    onClick,
    activeSongId
}) => {

    const imagePath = useLoadImage(data);

    return (
        <div
            className="
        relative 
        group
        flex 
        flex-col
        items-center
        justify-center
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3
        "
        >
            <div
                className="
            relative 
            aspect-square
            w-full
            h-full
            rounded-md
            overflow-hidden
            "
                onClick={() => onClick(data.id)}
            >
                <Image
                    loading="eager"
                    className="object-cover"
                    src={`https://zxfaokwchdpwczfkmsen.supabase.co/storage/v1/object/public/images/${data.image_path}` || '/images/liked.png'}
                    fill
                    alt="Image"
                />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold text-xl truncate w-full">{data.title}</p>
                <p className="text-neutral-400 text-sm pb-4 w-full truncate">By {data.author}</p>
            </div>
            <div className="absolute bottom-24 right-5">
                <PlayButton />
            </div>
            {activeSongId === data.id && (
                <audio
                    src={`https://zxfaokwchdpwczfkmsen.supabase.co/storage/v1/object/public/songs/${data.song_path}`}
                    controls
                    style={{ width: "250px" }}
                />
            )}
        </div>
    );
};

export default SongItem;