const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-red-500 mb-4"></div>
        <p className="text-gray-600 text-lg">Loading products...</p>
      </div>
    </div>
  );
};

export default Loading;
