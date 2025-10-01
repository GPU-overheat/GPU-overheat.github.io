import { useEffect, useState } from "react";


const OfflineBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="flex justify-center items-center h-[100vh] text-[2rem] bg-white text-black text-center">
        Looks like you're in airplane mode. Or a submarine.
      </div>
    );
  }

  return <>{children}</>;
};

export default OfflineBoundary;
