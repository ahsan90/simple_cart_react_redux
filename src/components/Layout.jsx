

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="main_content">
        <div className="grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Simple Shopping Cart - React with Redux
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">{children}</div>
      </div>
    </div>
  );
}
