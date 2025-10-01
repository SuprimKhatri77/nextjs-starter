"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useUploadThing } from "@/lib/utils/uploadthing/uploadthing";
import Loader from "./Loader";

interface Props {
  currentImage?: string;
  onUploadComplete: (url: string) => void;
  imageUploadName?: string;
}

export default function CustomProfileUploader({
  currentImage,
  onUploadComplete,
  imageUploadName,
}: Props) {
  const [showButton, setShowButton] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { startUpload, isUploading } = useUploadThing("imageUploader");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const filesArray = Array.from(files);

    const uploaded = await startUpload(filesArray);
    if (uploaded && uploaded[0]?.ufsUrl) {
      onUploadComplete(uploaded[0].ufsUrl);
    }
  };

  return (
    <div className="flex gap-4">
      <button
        type="button"
        className={`${
          imageUploadName === "Profile Picture" ? "" : ""
        }transition-all duration-300 text-black text-sm px-2 cursor-pointer rounded-md text-nowrap py-2`}
        onClick={() => inputRef.current?.click()}
        disabled={isUploading}
      >
        {isUploading ? (
          <Loader />
        ) : (
          <div className="flex gap-1">
            {imageUploadName === "Profile Picture" ? (
              !currentImage ? (
                <Image
                  src="https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-full"
                ></Image>
              ) : (
                <Image
                  src={
                    currentImage ||
                    "https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
                  }
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-full"
                ></Image>
              )
            ) : (
              <>
                <Image
                  src="https://5wt23w8lat.ufs.sh/f/4Ina5a0Nyj35BpvnC8GfqH2grxZLMciEXY3e04oTybQNdzD5"
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="rounded-full"
                ></Image>
              </>
            )}
          </div>
        )}
      </button>

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
