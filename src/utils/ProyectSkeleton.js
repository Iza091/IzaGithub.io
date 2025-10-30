const ProjectsSkeleton = () => {
  return (
    <section className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto animate-pulse"></div>
        </div>

        {/* Grid de proyectos skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-light-body dark:bg-dark-body rounded-lg shadow-lg overflow-hidden animate-pulse"
            >
              {/* Imagen skeleton */}
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>

              {/* Contenido skeleton */}
              <div className="p-6">
                {/* Título del proyecto skeleton */}
                <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

                {/* Descripción skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más skeleton */}
        <div className="mt-8 flex justify-center">
          <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkeleton;
