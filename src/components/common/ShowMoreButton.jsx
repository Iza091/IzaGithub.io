import { useTraduccion } from "../../TraduccionContext";

const ShowMoreButton = ({ onClick, isExpanded, className = "" }) => {
  const { t } = useTraduccion();
  const handleClick = (e) => {
    const btn = e.currentTarget;
    const wasExpanded = isExpanded;
    const top = btn.getBoundingClientRect().top + window.pageYOffset;

    onClick?.();

    if (wasExpanded) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: Math.max(0, top - 80), behavior: "auto" });
        });
      });
    }
  };

  return (
    <div className={`flex justify-center mt-6 ${className}`}>
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 bg-light-link text-white dark:bg-dark-link hover:bg-opacity-90"
      >
        {isExpanded ? t.comun.verMenos : t.comun.verMas}
      </button>
    </div>
  );
};

export default ShowMoreButton;
