'use client';
import { NextPage } from 'next';

import  MediaItem  from '@/components/Atom/MediaItem/MediaItem';

import { Song } from '@/../../types';

interface SearchContentProps {
  songs: Song[];
}

export const SearchContent:NextPage<SearchContentProps> = ({ songs }) => {

  if (songs.length === 0) {
    return (
      <div
        className="
            flex
            flex-col
            gap-y-2
            w-full
            px-6
            text-neutral-400
            "
      ></div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={()=>{}} data={song} />
          </div>
        </div>
      ))}
    </div>
  );
};