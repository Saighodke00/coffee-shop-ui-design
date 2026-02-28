import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(15, 10, 6, 0.8)",
    border: "1px solid rgba(200, 169, 110, 0.2)",
    borderRadius: "12px",
    padding: "14px 18px",
    color: "#f5f0e8",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#0f0a06",
        padding: "100px 0",
        borderTop: "1px solid rgba(200, 169, 110, 0.1)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Visit Info */}
          <div>
            <span
              style={{
                color: "#c8a96e",
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                display: "block",
                marginBottom: "12px",
              }}
            >
              ✦ Come Say Hello ✦
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f5f0e8",
                fontSize: "clamp(32px, 3.5vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
            >
              Visit{" "}
              <span style={{ color: "#c8a96e", fontStyle: "italic" }}>Us</span>
            </h2>
            <div
              style={{
                height: "2px",
                width: "60px",
                backgroundColor: "#c8a96e",
                borderRadius: "2px",
                marginBottom: "48px",
              }}
            />

            {/* Info Cards */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value: "123 Maple Street, New York, NY 10001",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+1 234 567 8900",
                },
                {
                  icon: "🕐",
                  label: "Hours",
                  value: "Mon–Fri: 7am – 8pm\nSat–Sun: 8am – 6pm",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "hello@brewedandco.com",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "20px 24px",
                    backgroundColor: "#1a1208",
                    border: "1px solid rgba(200, 169, 110, 0.12)",
                    borderRadius: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      flexShrink: 0,
                      borderRadius: "12px",
                      backgroundColor: "rgba(200, 169, 110, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#c8a96e",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "4px",
                        fontWeight: 600,
                      }}
                    >
                      {info.label}
                    </div>
                    <div
                      style={{
                        color: "#f5f0e8",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div
            style={{
              backgroundColor: "#1a1208",
              border: "1px solid rgba(200, 169, 110, 0.15)",
              borderRadius: "24px",
              padding: "48px 40px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#f5f0e8",
                fontSize: "1.6rem",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              Send Us a Message
            </h3>
            <p
              style={{
                color: "rgba(245, 240, 232, 0.5)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                marginBottom: "32px",
              }}
            >
              Have a question, special request, or just want to say hi? We'd love
              to hear from you.
            </p>

            {sent && (
              <div
                style={{
                  backgroundColor: "rgba(200, 169, 110, 0.12)",
                  border: "1px solid rgba(200, 169, 110, 0.4)",
                  borderRadius: "12px",
                  padding: "14px 20px",
                  color: "#c8a96e",
                  fontSize: "0.9rem",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                ✓ Message sent! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  style={{
                    display: "block",
                    color: "rgba(245, 240, 232, 0.7)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    marginBottom: "8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "#c8a96e")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      "rgba(200, 169, 110, 0.2)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "rgba(245, 240, 232, 0.7)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    marginBottom: "8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "#c8a96e")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      "rgba(200, 169, 110, 0.2)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "rgba(245, 240, 232, 0.7)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    marginBottom: "8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "130px",
                  }}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "#c8a96e")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor =
                      "rgba(200, 169, 110, 0.2)")
                  }
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#c8a96e",
                  color: "#0f0a06",
                  border: "none",
                  borderRadius: "50px",
                  padding: "16px",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  transition: "all 0.25s",
                  letterSpacing: "0.02em",
                  marginTop: "4px",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#d4b87a";
                  (e.target as HTMLElement).style.transform = "translateY(-2px)";
                  (e.target as HTMLElement).style.boxShadow =
                    "0 12px 32px rgba(200, 169, 110, 0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "#c8a96e";
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              >
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
