import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        backgroundColor: "rgba(15, 10, 6, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200, 169, 110, 0.15)",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "1.4rem" }}>☕</span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#c8a96e",
              fontSize: "1.4rem",
              fontWeight: 700,
            }}
          >
            Brewed & Co.
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", id: "hero" },
            { label: "Menu", id: "menu" },
            { label: "Favourites", id: "favourites" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                color: "#f5f0e8",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.95rem",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#c8a96e")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#f5f0e8")
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo("menu")}
          style={{
            backgroundColor: "#c8a96e",
            color: "#0f0a06",
            border: "none",
            borderRadius: "50px",
            padding: "10px 24px",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            transition: "all 0.2s",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#d4b87a";
            (e.target as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#c8a96e";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }}
          className="hidden md:block"
        >
          Order Now
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#f5f0e8",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#0f0a06",
            borderTop: "1px solid rgba(200, 169, 110, 0.15)",
          }}
          className="md:hidden px-8 py-4 flex flex-col gap-4"
        >
          {[
            { label: "Home", id: "hero" },
            { label: "Menu", id: "menu" },
            { label: "Favourites", id: "favourites" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                color: "#f5f0e8",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
