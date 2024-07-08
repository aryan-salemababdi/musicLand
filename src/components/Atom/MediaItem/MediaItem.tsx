"use client";

import { useState } from "react";
import { usePlayer } from './../../../hooks/usePlayer';
import { NextPage } from "next";
import Image from "next/image";
import { Song } from "@/../../types";
import { useLoadImage } from "@/hooks/useLoadImage";

interface MediaItemProps {
    data: Song;
    onClick: (id: string) => void;
    activeSongId?: string | null; 
}

const MediaItem: NextPage<MediaItemProps> = ({
    data,
    onClick,
    activeSongId
}) => {
    const player = usePlayer();
    const imageUrl = useLoadImage(data);

    const handleClick = () => {
        onClick(data.id);
        player.setId(data.id);
    };

    return (
        <>
            <div
                onClick={handleClick}
                className="
                    flex
                    items-center
                    gap-x-3
                    cursor-pointer
                    hover:bg-neutral-800/50
                    w-full
                    p-2
                    rounded-md
                "
            >
                <div
                    className="
                        relative
                        rounded-md 
                        min-h-[48px]
                        min-w-[48px]
                        overflow-hidden
                    "
                >
                    <Image
                        fill
                        src={`https://zxfaokwchdpwczfkmsen.supabase.co/storage/v1/object/public/images/${data.image_path}` || '/images/liked.png'}
                        alt="Media Item"
                        className="object-cover"
                    />
                </div>
                <div
                    className="
                        flex
                        flex-col
                        gap-y-1
                        overflow-hidden
                    "
                >
                    <p className="text-white truncate">{data.title}</p>
                    <p className="text-neutral-400 text-sm truncate">{data.author}</p>
                </div>
            </div>
            {activeSongId === data.id && (
                <audio
                    src={`https://zxfaokwchdpwczfkmsen.supabase.co/storage/v1/object/public/songs/${data.song_path}`}
                    controls
                    style={{ width: "250px" }}
                />
            )}
        </>
    );
}

export default MediaItem;
