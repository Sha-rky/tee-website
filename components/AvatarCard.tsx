import React from "react";
import Image from "next/image";

interface AvatarCardProps {
    src: string;
    alt: string;
    username: string;
    position: string;
}

export default function AvatarCard(props: AvatarCardProps) {
    const { src, alt, username, position } = props;

    return (
        <div className="flex-1 aspect-[3/4] relative">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover w-full h-full rounded-lg"
                sizes="(min-width: 1024px) 33vw, 100vw"
                priority
            />
            {/* Overlapping label */}
            <div className="bg-sky-500 absolute p-2 w-[90%] bottom-[20px] left-1/6 transform translate-y-1/2">
                <p className="text-white text-2xl font-bold">{username}</p>
                <p className="text-white text-sm">{position}</p>
            </div>
        </div>
    );
};
