const ShowMoreButton = ({ onClick, isExpanded }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 bg-light-link text-white dark:bg-dark-link hover:bg-opacity-90"
      >
        {isExpanded ? "Ver menos" : "Ver más"}
      </button>
    </div>
  );
};

export default ShowMoreButton;
