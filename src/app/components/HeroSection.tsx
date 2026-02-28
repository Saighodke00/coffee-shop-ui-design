const HERO_IMAGE =
  "https://images.unsplash.com/photo-1763473821509-9a383b480844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjI5NzA0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center"
      style={{
        backgroundColor: "#0f0a06",
        paddingTop: "80px",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <span
                style={{
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  border: "1px solid rgba(200, 169, 110, 0.3)",
                  color: "#c8a96e",
                  borderRadius: "50px",
                  padding: "6px 16px",
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                ✦ Est. 2015 · New York
              </span>
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(56px, 6vw, 96px)",
                color: "#f5f0e8",
                lineHeight: 1.08,
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Brewed{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#c8a96e",
                }}
              >
                With
              </span>
              <br />
              Love
            </h1>

            {/* Subtext */}
            <p
              style={{
                color: "rgba(245, 240, 232, 0.65)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: "440px",
              }}
            >
              Freshly roasted coffee, served with care every morning. Every cup
              tells a story of craft, passion, and community.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => scrollTo("menu")}
                style={{
                  backgroundColor: "#c8a96e",
                  color: "#0f0a06",
                  border: "none",
                  borderRadius: "50px",
                  padding: "16px 36px",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  transition: "all 0.25s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#d4b87a";
                  (e.target as HTMLElement).style.transform = "translateY(-2px)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 12px 32px rgba(200, 169, 110, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#c8a96e";
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              >
                Explore Menu
              </button>

              <button
                onClick={() => scrollTo("contact")}
                style={{
                  backgroundColor: "transparent",
                  color: "#f5f0e8",
                  border: "1px solid rgba(245, 240, 232, 0.25)",
                  borderRadius: "50px",
                  padding: "16px 36px",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  transition: "all 0.25s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor =
                    "rgba(200, 169, 110, 0.5)";
                  (e.target as HTMLElement).style.color = "#c8a96e";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor =
                    "rgba(245, 240, 232, 0.25)";
                  (e.target as HTMLElement).style.color = "#f5f0e8";
                }}
              >
                Visit Us
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-4">
              {[
                { value: "200+", label: "Menu Items" },
                { value: "10K+", label: "Happy Customers" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#c8a96e",
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "rgba(245, 240, 232, 0.5)",
                      fontSize: "0.82rem",
                      marginTop: "2px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(200, 169, 110, 0.12) 0%, transparent 70%)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />

            {/* Image frame */}
            <div
              style={{
                position: "relative",
                width: "min(480px, 90vw)",
                height: "min(560px, 70vh)",
                borderRadius: "240px 240px 200px 200px",
                overflow: "hidden",
                border: "2px solid rgba(200, 169, 110, 0.2)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              }}
            >
              <img
                src={HERO_IMAGE}
                alt="Coffee cup with latte art"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(15,10,6,0.6) 100%)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "60px",
                left: "-10px",
                backgroundColor: "#1a1208",
                border: "1px solid rgba(200, 169, 110, 0.3)",
                borderRadius: "16px",
                padding: "14px 20px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  color: "#c8a96e",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "4px",
                }}
              >
                Today's Special
              </div>
              <div
                style={{
                  color: "#f5f0e8",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
              >
                Caramel Macchiato
              </div>
              <div
                style={{
                  color: "#c8a96e",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                }}
              >
                $4.50
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
