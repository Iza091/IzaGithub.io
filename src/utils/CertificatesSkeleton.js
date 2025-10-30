const CertificatesSkeleton = () => {
  return (
    <section className="py-20 bg-light-secondaryBg dark:bg-dark-secondaryBg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto animate-pulse"></div>
        </div>

        {/* Botones de categoría skeleton */}
        <div className="flex justify-center mb-8 space-x-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>

        {/* Grid de certificados skeleton */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-light-body dark:bg-dark-body rounded-lg shadow-md overflow-hidden animate-pulse"
            >
              {/* Imagen skeleton */}
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>

              {/* Contenido skeleton */}
              <div className="p-6">
                {/* Título skeleton */}
                <div className="h-6 w-full bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>

                {/* Proyecto skeleton (opcional) */}
                <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>

                {/* Información skeleton */}
                <div className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
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

export default CertificatesSkeleton;
