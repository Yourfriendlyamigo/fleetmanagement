import React, { useEffect, useState } from "react";
import { Truck, Users, Package } from "lucide-react";

// Reusable hook for count-up animation with stronger easing
function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    // stronger ease-out (slower near the end)
    function easeOutQuint(t) {
      return 1 - Math.pow(1 - t, 5);
    }

    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // apply stronger easing
      const easedProgress = easeOutQuint(progress);

      const value = Math.floor(easedProgress * target);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [target, duration]);

  return count;
}

const stats = [
  {
    name: "Trucks",
    value: 4028,
    icon: Truck,
    color: "bg-blue",
  },
  {
    name: "Employees",
    value: 420,
    icon: Users,
    color: "bg-orange-600",
  },
  {
    name: "Active Deliveries",
    value: 655,
    icon: Package,
    color: "bg-green-600",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((item) => {
        const count = useCountUp(item.value, 2500); // longer duration for smoother finish
        return (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center rounded-xl bg-white shadow-md p-8 min-h-[180px] text-center"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-xl text-white ${item.color}`}
            >
              <item.icon className="h-8 w-8" />
            </div>
            <p className="mt-4 text-5xl font-extrabold text-gray-900">
              {count}
            </p>
            <p className="mt-2 text-lg font-medium text-gray-600">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
