const ESPRESSO_IMG =
  "https://images.unsplash.com/photo-1620300538985-77a2168e90bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHNob3QlMjBjb2ZmZWUlMjBibGFja3xlbnwxfHx8fDE3NzIyOTcwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CAPPUCCINO_IMG =
  "https://images.unsplash.com/photo-1659553653381-d98d2a831b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwZm9hbSUyMGFydCUyMGNhZmV8ZW58MXx8fHwxNzcyMTk2ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const MATCHA_IMG =
  "https://images.unsplash.com/photo-1617892165107-76fb45f50f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGdyZWVuJTIwdGVhJTIwZHJpbmt8ZW58MXx8fHwxNzcyMjk3MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const favourites = [
  {
    name: "Espresso",
    price: "$3.50",
    tag: "Best Seller",
    description: "Bold, rich, and perfectly extracted — our classic single shot.",
    image: ESPRESSO_IMG,
  },
  {
    name: "Cappuccino",
    price: "$4.50",
    tag: "Staff Pick",
    description: "Velvety microfoam over a double shot, smooth and balanced.",
    image: CAPPUCCINO_IMG,
  },
  {
    name: "Matcha Latte",
    price: "$5.00",
    tag: "Fan Favourite",
    description: "Ceremonial grade matcha whisked with oat milk, earthy & sweet.",
    image: MATCHA_IMG,
  },
];

export function FavouritesSection() {
  return (
    <section
      id="favourites"
      style={{
        backgroundColor: "#0f0a06",
        padding: "100px 0",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            style={{
              color: "#c8a96e",
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "12px",
            }}
          >
            ✦ Top Picks ✦
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f0e8",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Our{" "}
            <span style={{ color: "#c8a96e", fontStyle: "italic" }}>
              Favourites
            </span>
          </h2>
          <div
            style={{
              height: "2px",
              width: "60px",
              backgroundColor: "#c8a96e",
              marginTop: "20px",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {favourites.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#1a1208",
                border: "1px solid rgba(200, 169, 110, 0.15)",
                borderRadius: "24px",
                overflow: "hidden",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200, 169, 110, 0.4)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 24px 48px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200, 169, 110, 0.15)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: "260px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.transform = "scale(1)")
                  }
                />
                {/* Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    backgroundColor: "#c8a96e",
                    color: "#0f0a06",
                    borderRadius: "50px",
                    padding: "4px 14px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.tag}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "28px" }}>
                <div className="flex items-start justify-between mb-3">
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#f5f0e8",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#c8a96e",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.price}
                  </span>
                </div>

                <p
                  style={{
                    color: "rgba(245, 240, 232, 0.55)",
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    marginBottom: "20px",
                  }}
                >
                  {item.description}
                </p>

                <button
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "1px solid rgba(200, 169, 110, 0.4)",
                    color: "#c8a96e",
                    borderRadius: "50px",
                    padding: "12px",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    transition: "all 0.25s",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.backgroundColor = "#c8a96e";
                    el.style.color = "#0f0a06";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.target as HTMLElement;
                    el.style.backgroundColor = "transparent";
                    el.style.color = "#c8a96e";
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
