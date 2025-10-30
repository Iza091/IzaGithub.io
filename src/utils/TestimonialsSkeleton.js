const TestimonialsSkeleton = () => {
  return (
    <section className="py-16 md:py-20 bg-light-body dark:bg-dark-body">
      <div className="max-w-3xl mx-auto px-4">
        {/* Título skeleton */}
        <div className="text-center mb-8">
          <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg mx-auto mb-4 animate-pulse"></div>
        </div>

        {/* Cards skeleton */}
        <div className="relative h-[550px] sm:h-[500px]">
          <div className="bg-light-body dark:bg-dark-body p-6 md:p-8 rounded-lg shadow-md text-center mx-auto max-w-2xl">
            {/* Avatar skeleton */}
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gray-300 dark:bg-gray-700 mb-4 md:mb-6 border-4 border-gray-200 dark:border-gray-600 animate-pulse"></div>

            {/* Nombre skeleton */}
            <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>

            {/* Profesión skeleton */}
            <div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-1 animate-pulse"></div>

            {/* Rol skeleton */}
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>

            {/* Texto skeleton */}
            <div className="space-y-2 mt-4 px-4">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* Enlace skeleton */}
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mx-auto mt-4 animate-pulse"></div>
          </div>

          {/* Paginación skeleton */}
          <div className="flex justify-center mt-8 space-x-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSkeleton;
