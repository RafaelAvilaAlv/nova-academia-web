import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";

  const variantStyles =
    variant === "primary"
      ? "bg-[#1E3A5F] text-white hover:opacity-90"
      : "border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </Link>
  );
}