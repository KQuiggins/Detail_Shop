import { GiCarWheel } from "react-icons/gi";

export function Logo() {
  return (
    <div className="flex items-center">
      <GiCarWheel className="text-4xl" />
      <img src="/cc_white.png" alt="Clean Cars" className="h-16" />
    </div>
  );
}
