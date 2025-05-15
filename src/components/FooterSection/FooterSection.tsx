import { FooterTop } from "../FooterTop";
import { FooterBottom } from "../FooterBottom";

export function FooterSection() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
      >
        <FooterTop />
      </div>

      <footer
        style={{
          position: "relative",
          zIndex: 1,
          left: 0,
          bottom: 0,
          right: 40,
        }}
      >
        <FooterBottom />
      </footer>
    </div>
  );
}
