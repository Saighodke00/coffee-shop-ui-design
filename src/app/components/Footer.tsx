export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1208",
        borderTop: "1px solid rgba(200, 169, 110, 0.12)",
        padding: "60px 0 32px",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
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
            <p
              style={{
                color: "rgba(245, 240, 232, 0.45)",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                maxWidth: "320px",
              }}
            >
              A cozy corner in the heart of New York City, dedicated to serving
              exceptional coffee and creating moments worth savoring.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {["Instagram", "Twitter", "Facebook"].map((social) => (
                <button
                  key={social}
                  style={{
                    backgroundColor: "rgba(200, 169, 110, 0.08)",
                    border: "1px solid rgba(200, 169, 110, 0.2)",
                    borderRadius: "10px",
                    padding: "8px 16px",
                    color: "rgba(245, 240, 232, 0.6)",
                    cursor: "pointer",
                    fontSize: "0.78rem",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "#c8a96e";
                    (e.target as HTMLElement).style.borderColor =
                      "rgba(200, 169, 110, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color =
                      "rgba(245, 240, 232, 0.6)";
                    (e.target as HTMLElement).style.borderColor =
                      "rgba(200, 169, 110, 0.2)";
                  }}
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#f5f0e8",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: "16px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["Home", "Our Menu", "Favourites", "About Us", "Contact"].map(
                (link) => (
                  <button
                    key={link}
                    style={{
                      color: "rgba(245, 240, 232, 0.45)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.88rem",
                      textAlign: "left",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#c8a96e")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(245, 240, 232, 0.45)")
                    }
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                color: "#f5f0e8",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginBottom: "16px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "123 Maple Street, NY",
                "+1 234 567 8900",
                "hello@brewedandco.com",
                "Mon–Sun: 7am – 8pm",
              ].map((info) => (
                <span
                  key={info}
                  style={{
                    color: "rgba(245, 240, 232, 0.45)",
                    fontSize: "0.88rem",
                  }}
                >
                  {info}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(200, 169, 110, 0.1)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              color: "rgba(245, 240, 232, 0.3)",
              fontSize: "0.82rem",
            }}
          >
            © 2026 Brewed & Co. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(245, 240, 232, 0.3)",
              fontSize: "0.82rem",
            }}
          >
            Made with{" "}
            <span style={{ color: "#c8a96e" }}>❤️</span> in New York City
          </p>
        </div>
      </div>
    </footer>
  );
}
