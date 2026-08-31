import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader${hidden ? " loader--hidden" : ""}`} aria-hidden="true">
      <span>{"{"}</span>
      <span>{"}"}</span>
    </div>
  );
}
