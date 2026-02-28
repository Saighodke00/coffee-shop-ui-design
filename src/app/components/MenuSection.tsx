import { useState } from "react";

const AMERICANO_IMG =
  "https://images.unsplash.com/photo-1611065855673-fe8ae91ff456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbm8lMjBibGFjayUyMGNvZmZlZSUyMG11ZyUyMG92ZXJoZWFkfGVufDF8fHx8MTc3MjI5NzA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const GREEN_TEA_IMG =
  "https://images.unsplash.com/photo-1695746999130-17bc94e000e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlYSUyMGN1cCUyMGNlcmFtaWMlMjBqYXBhbmVzZXxlbnwxfHx8fDE3NzIyOTcwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CROISSANT_IMG =
  "https://images.unsplash.com/photo-1592026895200-230660d34e3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBiYWtlcnklMjBmbGFreXxlbnwxfHx8fDE3NzIyOTcwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CHAI_IMG =
  "https://images.unsplash.com/photo-1586427705464-122357380e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFpJTIwbGF0dGUlMjBzcGljZWQlMjB0ZWElMjBtaWxrfGVufDF8fHx8MTc3MjI5NzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const MUFFIN_IMG =
  "https://images.unsplash.com/photo-1767634480773-37e4b962fa1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlYmVycnklMjBtdWZmaW4lMjBiYWtlcnklMjBjYWZlfGVufDF8fHx8MTc3MjI5NzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const COLD_BREW_IMG =
  "https://images.unsplash.com/photo-1570470752239-78e3fe00c416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYnJldyUyMGljZWQlMjBjb2ZmZWUlMjBnbGFzc3xlbnwxfHx8fDE3NzIyOTcwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const menuItems = [
  {
    name: "Americano",
    description: "Rich espresso diluted with hot water — smooth and bold.",
    price: "$3.00",
    category: "Coffee",
    image: AMERICANO_IMG,
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped for 18 hours, silky smooth and naturally sweet.",
    price: "$4.50",
    category: "Coffee",
    image: COLD_BREW_IMG,
  },
  {
    name: "Green Tea",
    description: "Delicate Japanese sencha, hand-picked and lightly steamed.",
    price: "$3.50",
    category: "Tea",
    image: GREEN_TEA_IMG,
  },
  {
    name: "Chai Latte",
    description: "Spiced black tea with warm milk — cozy and aromatic.",
    price: "$4.00",
    category: "Tea",
    image: CHAI_IMG,
  },
  {
    name: "Butter Croissant",
    description: "Flaky, golden, and buttery — baked fresh every morning.",
    price: "$2.50",
    category: "Pastries",
    image: CROISSANT_IMG,
  },
  {
    name: "Blueberry Muffin",
    description: "Fluffy muffin bursting with juicy blueberries and lemon zest.",
    price: "$3.00",
    category: "Pastries",
    image: MUFFIN_IMG,
  },
];

const tabs = ["All", "Coffee", "Tea", "Pastries"];

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeTab);

  return (
    <section
      id="menu"
      style={{
        backgroundColor: "#1a1208",
        padding: "100px 0",
        borderTop: "1px solid rgba(200, 169, 110, 0.1)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span
            style={{
              color: "#c8a96e",
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "12px",
            }}
          >
            ✦ What We Serve ✦
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
            <span style={{ color: "#c8a96e", fontStyle: "italic" }}>Menu</span>
          </h2>
          <div
            style={{
              height: "2px",
              width: "60px",
              backgroundColor: "#c8a96e",
              marginTop: "20px",
              borderRadius: "2px",
              marginBottom: "40px",
            }}
          />

          {/* Tabs */}
          <div
            style={{
              backgroundColor: "rgba(15, 10, 6, 0.8)",
              border: "1px solid rgba(200, 169, 110, 0.15)",
              borderRadius: "50px",
              padding: "6px",
              display: "flex",
              gap: "4px",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  backgroundColor:
                    activeTab === tab ? "#c8a96e" : "transparent",
                  color: activeTab === tab ? "#0f0a06" : "rgba(245, 240, 232, 0.6)",
                  border: "none",
                  borderRadius: "50px",
                  padding: "10px 24px",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: activeTab === tab ? 700 : 500,
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) {
                    (e.target as HTMLElement).style.color = "#f5f0e8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) {
                    (e.target as HTMLElement).style.color =
                      "rgba(245, 240, 232, 0.6)";
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              style={{
                backgroundColor: "#0f0a06",
                border: "1px solid rgba(200, 169, 110, 0.12)",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200, 169, 110, 0.35)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200, 169, 110, 0.12)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: "220px",
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
                    ((e.target as HTMLElement).style.transform = "scale(1.08)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.transform = "scale(1)")
                  }
                />
                {/* Category badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    backgroundColor: "rgba(15, 10, 6, 0.85)",
                    border: "1px solid rgba(200, 169, 110, 0.3)",
                    color: "#c8a96e",
                    borderRadius: "50px",
                    padding: "4px 12px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <div className="flex items-start justify-between mb-2">
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#f5f0e8",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{
                      color: "#c8a96e",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginLeft: "8px",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(245, 240, 232, 0.5)",
                    fontSize: "0.85rem",
                    lineHeight: 1.65,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
