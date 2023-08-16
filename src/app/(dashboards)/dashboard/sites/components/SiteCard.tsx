import React from "react";
import Image from "next/image";
import defaultSiteImage from "@/assets/images/site-card-image.jpg";
import Link from "next/link";

interface Props {
  name: string;
  thumbnailUrl?: string;
  description: string;
}
function SiteCard(props: Props) {
  return (
    <Link href="/site/1">
      <div className="max-w-sm overflow-auto rounded-lg shadow bg-secondary-100 transition hover:scale-105">
        <Image
          width={500}
          height={300}
          className="rounded-t-lg h-[200px]"
          src={props.thumbnailUrl || defaultSiteImage}
          alt="site-default-image"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white_text">
            {props.name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default SiteCard;
