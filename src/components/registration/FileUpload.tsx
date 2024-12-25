import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface FileUploadProps {
  onFileSelect?: (files: File[]) => void;
  maxFiles?: number;
  acceptedFileTypes?: string[];
  label?: string;
}

const FileUpload = ({
  onFileSelect = () => {},
  maxFiles = 1,
  acceptedFileTypes = ["image/*", ".pdf", ".doc", ".docx"],
  label = "Upload player photo or medical documents",
}: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...files, ...acceptedFiles].slice(0, maxFiles);
      setFiles(newFiles);
      onFileSelect(newFiles);
    },
    [files, maxFiles, onFileSelect],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    accept: acceptedFileTypes.reduce(
      (acc, curr) => ({ ...acc, [curr]: [] }),
      {},
    ),
  });

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onFileSelect(newFiles);
  };

  return (
    <Card className="w-full p-6 bg-white">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-green-400"}`}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-sm text-gray-600 mb-2">{label}</p>
        <p className="text-xs text-gray-400">
          Drag & drop files here, or click to select files
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              <span className="text-sm text-gray-600 truncate max-w-[80%]">
                {file.name}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFile(index)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default FileUpload;
