import { VariantProps, cva } from "class-variance-authority";
import { IconType } from "react-icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { CountUp } from "./count-up";

const boxVariants = cva("rounded-md p-3 shrink-0", {
  variants: {
    variant: {
      default: "bg-blue-500/20",
      success: "bg-emerald-500/20",
      danger: "bg-rose-500/20",
      warning: "bg-yellow-500/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconVariants = cva("size-6", {
  variants: {
    variant: {
      default: "fill-blue-500",
      success: "fill-emerald-500",
      danger: "fill-rose-500",
      warning: "fill-yellow-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type BoxVariant = VariantProps<typeof boxVariants>;
type IconVariant = VariantProps<typeof iconVariants>;

interface DataCardProps extends BoxVariant, IconVariant {
  icon: IconType;
  title: string;
  value?: number;
}

export const DataCard = ({
  icon: Icon,
  title,
  value = 0,
  variant,
}: DataCardProps) => {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between gap-x-4">
        <div className="space-y-2">
          <CardTitle className="text-3xl line-clamp-1">{title}</CardTitle>
          <CardDescription className="line-clamp-1"></CardDescription>
        </div>
        <div className={cn(boxVariants({ variant }))}>
          <Icon className={cn(iconVariants({ variant }))} />
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="font-bold text-2xl mb-2 line-clamp-1 break-all">
          <CountUp preserveValue start={0} end={value} />
        </h1>
        <p></p>
      </CardContent>
    </Card>
  );
};
