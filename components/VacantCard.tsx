// Placeholder for an unfilled slot, so a tier with one person does not read as
// a half-empty grid. The count in the tier heading still reflects real members.
export default function VacantCard() {
  return (
    <div className="flex flex-col items-center text-center border border-dashed border-stone-300 dark:border-stone-700 rounded-2xl px-5 py-7">
      <div
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-stone-300 dark:border-stone-700 shrink-0 flex items-center justify-center text-stone-300 dark:text-stone-600"
        aria-hidden="true"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={1.8} d="M12 6v12M6 12h12" />
        </svg>
      </div>
      <p className="mt-5 text-sm font-semibold text-stone-400 dark:text-stone-500 leading-snug">
        Vacant
      </p>
    </div>
  );
}
