import * as React from "react";

import { cn } from "@/lib/utils";

interface AvatarContextType {
  src?: string;
  alt?: string;
}

const AvatarContext =
  React.createContext<AvatarContextType>({});

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Avatar({
  className,
  children,
  ...props
}: AvatarProps) {
  return (
    <AvatarContext.Provider value={{}}>
      <div
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#18181B]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AvatarContext.Provider>
  );
}

interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function AvatarImage({
  src,
  alt,
  className,
  ...props
}: AvatarImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "h-full w-full object-cover",
        className
      )}
      {...props}
    />
  );
}

interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function AvatarFallback({
  className,
  children,
  ...props
}: AvatarFallbackProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center bg-[#27272A] text-sm font-semibold text-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}