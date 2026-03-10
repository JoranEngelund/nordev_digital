import { useEffect, useState } from "react";
import * as s from "./styledScrollProgress";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <s.ProgressContainer>
      <s.ProgressBar
        $visible={progress > 1}
        style={{ width: `${progress}%` }}
      />
    </s.ProgressContainer>
  );
}
