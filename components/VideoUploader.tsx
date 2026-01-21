"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUploadThing } from "@/utils/uploadthing/uploadthing";

interface VideoUploaderProps {
  currentVideo?: string;
  onUploadComplete: (url: string) => void;
  className?: string;
}

export default function CustomVideoUploader({
  currentVideo,
  onUploadComplete,
  className,
}: VideoUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | undefined>(currentVideo);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { startUpload, isUploading: utIsUploading } =
    useUploadThing("videoUploader");

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const filesArray = Array.from(files);

    setIsUploading(true);
    try {
      const uploaded = await startUpload(filesArray);
      if (uploaded && uploaded[0]?.ufsUrl) {
        const uploadedUrl = uploaded[0].ufsUrl;
        setPreview(uploadedUrl);
        onUploadComplete(uploadedUrl);
      }
    } catch (error) {
      console.error("Video upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={cn("w-full", className)}>
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      <Button
        type="button"
        variant="outline"
        onClick={handleButtonClick}
        disabled={isUploading}
        className="w-full h-48 border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors bg-transparent"
      >
        <div className="flex flex-col items-center gap-3">
          {isUploading ? (
            <>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="text-sm font-medium">Uploading video...</span>
            </>
          ) : preview ? (
            <div className="flex flex-col items-center gap-2">
              <video
                src={preview}
                className="h-32 w-auto object-contain rounded"
                controls
                muted
              />
              <span className="text-xs text-muted-foreground">
                Click to change video
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Upload className="h-6 w-6" />
                <VideoIcon className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium">Upload Your Video</span>
              <span className="text-sm text-muted-foreground">
                Click to browse or drag and drop
              </span>
              <span className="text-xs text-muted-foreground">
                MP4, MOV, AVI up to 128MB
              </span>
            </>
          )}
        </div>
      </Button>
    </div>
  );
}
