import Image from "next/image";

type Props = {
  name: string;
  photo?: string;
  size?: "lg" | "md" | "sm";
  accent?: boolean;
};

// Circular portrait. Falls back to a neutral placeholder when a member has no
// photo yet, so the row keeps its shape until an image is dropped in.
export default function MemberAvatar({ name, photo, size = "md", accent = false }: Props) {
  const px = size === "lg" ? 144 : size === "sm" ? 64 : 112;
  const box =
    size === "lg"
      ? "w-28 h-28 sm:w-36 sm:h-36"
      : size === "sm"
        ? "w-14 h-14"
        : "w-24 h-24 sm:w-28 sm:h-28";
  const ring = accent
    ? "ring-teal-100 dark:ring-teal-900"
    : "ring-stone-200 dark:ring-stone-800";

  return (
    <div
      className={`${box} rounded-full ${size === "sm" ? "ring-2" : "ring-4"} ${ring} ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950 overflow-hidden shrink-0 bg-stone-100 dark:bg-stone-800`}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          width={px}
          height={px}
          className="object-cover w-full h-full"
        />
      ) : (
        <div
          className="w-full h-full flex items-end justify-center text-stone-300 dark:text-stone-700"
          aria-hidden="true"
        >
          <svg className="w-2/3 h-2/3" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="8" r="4" />
            <path d="M12 14c-4.1 0-7.5 2.6-7.5 5.8V24h15v-4.2c0-3.2-3.4-5.8-7.5-5.8z" />
          </svg>
        </div>
      )}
    </div>
  );
}
