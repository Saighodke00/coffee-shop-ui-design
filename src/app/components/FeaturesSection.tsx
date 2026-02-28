const features = [
  {
    icon: "☕",
    title: "Fresh Roasted Daily",
    description:
      "Our beans are roasted in small batches every morning to guarantee peak freshness and unmatched flavour in every single cup.",
  },
  {
    icon: "🌿",
    title: "Organic Ingredients",
    description:
      "We source only certified organic, sustainably grown ingredients from trusted farmers around the world — for you and the planet.",
  },
  {
    icon: "❤️",
    title: "Made With Love",
    description:
      "Each drink is crafted by passionate baristas who take pride in the art of coffee — because great coffee deserves great care.",
  },
];

export function FeaturesSection() {
  return (
    <section
      style={{
        backgroundColor: "#1a1208",
        padding: "80px 0",
        borderTop: "1px solid rgba(200, 169, 110, 0.1)",
        borderBottom: "1px solid rgba(200, 169, 110, 0.1)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(15, 10, 6, 0.6)",
                border: "1px solid rgba(200, 169, 110, 0.15)",
                borderRadius: "20px",
                padding: "40px 36px",
                transition: "all 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200, 169, 110, 0.4)";
                el.style.backgroundColor = "rgba(200, 169, 110, 0.05)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200, 169, 110, 0.15)";
                el.style.backgroundColor = "rgba(15, 10, 6, 0.6)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  marginBottom: "24px",
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f0e8",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "rgba(245, 240, 232, 0.55)",
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                }}
              >
                {feature.description}
              </p>

              {/* Gold accent line */}
              <div
                style={{
                  height: "2px",
                  width: "40px",
                  backgroundColor: "#c8a96e",
                  marginTop: "24px",
                  borderRadius: "2px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
