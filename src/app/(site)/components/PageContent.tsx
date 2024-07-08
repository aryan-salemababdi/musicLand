'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import SongItem from '@/components/Atom/SongItem/SongItem';
import { Song } from '@/../../types';

interface PageContentProps {
    songs: Song[];
}

const PageContent: NextPage<PageContentProps> = ({ songs }) => {

    const [activeSongId, setActiveSongId] = useState<string | null>(null);

    const openPlayer = (id: string) => {
        if (activeSongId === id) {
            setActiveSongId(null);
        } else {
            setActiveSongId(id);
        }
    };

    if (songs.length === 0) {
        return <div className="mt-4 text-neutral-400">No songs available</div>;
    }

    return (
        <div
            className="
        grid
        grid-cols-2
        max-[487px]:grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-8
        gap-3
        mt-4
        "
        >
            {songs.map((item) => (
                <SongItem
                    key={item.id}
                    data={item}
                    onClick={() => openPlayer(item.id)}
                    activeSongId={activeSongId}
                />
            ))}
        </div>
    );
};

export default PageContent;