const ShowMoreButton = ({ onClick, isExpanded, className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const btn = e.currentTarget;
    const wasExpanded = isExpanded;
    const y = window.scrollY;
    const parentSection = btn.closest("section");

    onClick?.();

    if (wasExpanded) {
      const restore = () => {
        window.scrollTo({ top: y, behavior: "auto" });
        if (parentSection) {
          const sectionTop = parentSection.getBoundingClientRect().top + window.pageYOffset;
          if (y < sectionTop) {
            window.scrollTo({ top: sectionTop - 60, behavior: "auto" });
          }
        }
      };
      setTimeout(restore, 0);
      requestAnimationFrame(() => {
        requestAnimationFrame(restore);
        setTimeout(restore, 50);
      });
    }
  };

  return (
    <div className={`flex justify-center mt-6 ${className}`}>
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 bg-light-link text-white dark:bg-dark-link hover:bg-opacity-90"
      >
        {isExpanded ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default ShowMoreButton;
