export function ProfileImage() {
  return (
    <div className="relative group flex justify-center">
      <div className="w-full max-w-md rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img
          src="/mspfp.png"
          alt="Profile"
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
        />
      </div>
    </div>
  );
}