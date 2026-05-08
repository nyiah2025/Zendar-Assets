import { useEffect } from "react";

export default function TopSmilesDemo() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}>
      <iframe
        src="https://top-smiles-demo.replit.app/"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Top Smiles Demo"
        allow="fullscreen"
      />
    </div>
  );
}
