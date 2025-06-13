import * as React from "react";

import { Button } from "kf-shadcnui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const bannerVariants = cva(
  "flex flex-col md:flex-row shrink-0 grow-0 rounded-lg bg-blue-200 max-h-[400px] h-full items-stretch overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        right: "",
        full: "",
      },
      color: {
        default: "bg-blue-200",
        red: "bg-red-200",
        green: "bg-green-200",
        orange: "bg-orange-200",
        purple: "bg-purple-200",
        grey: "bg-grey-200",
      },
    },
    defaultVariants: {
      variant: "default",
      color: "default",
    },
  }
);

function Banner({
  variant,
  color,
  className,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof bannerVariants>) {
  return (
    <div
      data-slot="banner"
      className={cn(bannerVariants({ variant, color, className }))}
      {...props}
    >
      <img
        src="https://picsum.photos/400/400"
        data-variant={variant}
        className="relative w-full h-full object-cover data-[variant=right]:order-2"
        alt="Banner"
      />

      <div
        data-variant={variant}
        className="p-10 h-full flex flex-col gap-4 data-[variant=right]:order-1"
      >
        <h3 className="text-2xl font-bold">Banner</h3>
        <p className="text-sm">
          Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
          Text. Text. Text. Text. Text. Text. Text. Text. Text. Text. Text.
          Text. Text.
        </p>
        <div className="flex gap-2">
          <Button data-color={color} className="data-[color=red]:bg-red-500">
            Button
          </Button>
          <Button
            data-color={color}
            className="data-[color=red]:border-red-500"
            variant="outline"
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}
export { Banner };
