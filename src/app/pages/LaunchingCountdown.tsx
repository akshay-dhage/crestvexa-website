import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router";

// Launch date: Today at 1:00 PM (for testing)
// Production: new Date("2026-02-28T01:01:00+05:30")
const today = new Date();
today.setHours(13, 0, 0, 0);
const LAUNCH_DATE = today;

// Animation configuration
const ANIMATION_DURATION = 2500; // 2.5 seconds

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

export function LaunchingCountdown() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLaunched, setIsLaunched] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Generate confetti particles
  const generateParticles = useCallback(() => {
    const colors = ["#e94560", "#0f3460", "#4ade80", "#fbbf24", "#ffffff", "#f472b6"];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < 150; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const speed = 5 + Math.random() * 15;
      newParticles.push({
        id: i,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: Math.cos(angle) * speed * (0.5 + Math.random()),
        vy: Math.sin(angle) * speed * (0.5 + Math.random()) - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 4 + Math.random() * 8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 20,
      });
    }
    setParticles(newParticles);
  }, []);

  // Animation loop for confetti
  useEffect(() => {
    if (!showAnimation || particles.length === 0) return;

    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed >= ANIMATION_DURATION) {
        setShowAnimation(false);
        setShowFlash(true);
        setTimeout(() => navigate("/home"), 500);
        return;
      }

      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy + 0.5,
        vy: p.vy + 0.3,
        rotation: p.rotation + p.rotationSpeed,
        vx: p.vx * 0.99,
      })));

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [showAnimation, particles.length, navigate]);

  // Countdown logic
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        if (!isLaunched) {
          setIsLaunched(true);
          generateParticles();
          setShowAnimation(true);
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [isLaunched, generateParticles]);

  // Create floating particles (background effect)
  useEffect(() => {
    if (particlesRef.current) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.style.cssText = `
          position: absolute;
          width: ${2 + Math.random() * 4}px;
          height: ${2 + Math.random() * 4}px;
          background: rgba(233, 69, 96, ${0.3 + Math.random() * 0.4});
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          animation: float ${15 + Math.random() * 10}s linear infinite;
          animation-delay: ${-Math.random() * 20}s;
        `;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      console.log("Email subscribed:", email);
    }
  };

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  // If launched and animation complete, show flash/redirect
  if (showFlash) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#ffffff",
          animation: "fadeToWhite 0.5s ease forwards",
        }}
      />
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes blast {
            0% { transform: scale(0); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.8; }
            100% { transform: scale(2); opacity: 0; }
          }
          @keyframes ring {
            0% { transform: scale(0.8); opacity: 1; border-width: 20px; }
            100% { transform: scale(2); opacity: 0; border-width: 0px; }
          }
          @keyframes fadeToWhite {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
      
      {/* Background floating particles */}
      <div
        ref={particlesRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          color: "#ffffff",
          fontFamily: "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(233, 69, 96, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(15, 52, 96, 0.3) 0%, transparent 50%)
            `,
            pointerEvents: "none",
          }}
        />

        {/* Launch Animation Overlay */}
        {showAnimation && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 100,
              pointerEvents: "none",
            }}
          >
            {/* Central blast */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(233,69,96,0.9) 0%, rgba(233,69,96,0) 70%)",
                animation: "blast 1s ease-out forwards",
              }}
            />
            
            {/* Expanding ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "20px solid rgba(233, 69, 96, 0.8)",
                animation: "ring 1.5s ease-out forwards",
              }}
            />

            {/* Second ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "15px solid rgba(74, 222, 128, 0.7)",
                animation: "ring 1.2s ease-out 0.2s forwards",
              }}
            />

            {/* Confetti particles */}
            {particles.map((p) => (
              <div
                key={p.id}
                style={{
                  position: "absolute",
                  left: p.x,
                  top: p.y,
                  width: p.size,
                  height: p.size * 0.6,
                  backgroundColor: p.color,
                  borderRadius: p.size > 6 ? "2px" : "50%",
                  transform: `rotate(${p.rotation}deg)`,
                  transition: "left 16ms linear, top 16ms linear",
                  boxShadow: "0 0 6px rgba(233, 69, 96, 0.5)",
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "40px 20px",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          {/* Logo */}
          <div style={{ marginBottom: "30px" }}>
            <h1
              style={{
                fontSize: "clamp(32px, 8vw, 48px)",
                fontWeight: 700,
                letterSpacing: "8px",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #ffffff 0%, #e94560 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
              }}
            >
              CRESTVEXA
            </h1>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #e94560, #0f3460)",
                margin: "15px auto 0",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Heading */}
          <h2 style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 600, margin: "0 0 15px", letterSpacing: "2px" }}>
            Coming Soon
          </h2>
          <p style={{ fontSize: "clamp(14px, 3vw, 18px)", color: "rgba(255, 255, 255, 0.7)", margin: "0 0 40px", lineHeight: 1.6 }}>
            We're building something extraordinary. Stay tuned for our launch.
          </p>

          {/* Countdown */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "clamp(8px, 2vw, 15px)",
              marginBottom: "50px",
            }}
          >
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "clamp(4px, 1vw, 15px)" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "12px",
                    padding: "clamp(12px, 3vw, 20px) clamp(15px, 4vw, 25px)",
                    minWidth: "clamp(60px, 15vw, 90px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(233, 69, 96, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span style={{ fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 700, lineHeight: 1 }}>
                    {formatNumber(item.value)}
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(8px, 2vw, 12px)",
                      color: "rgba(255, 255, 255, 0.7)",
                      marginTop: "8px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                {index < 3 && (
                  <span style={{ fontSize: "clamp(18px, 4vw, 30px)", fontWeight: 700, color: "rgba(255, 255, 255, 0.7)" }}>:</span>
                )}
              </div>
            ))}
          </div>

          {/* Email signup */}
          {!showSuccess && (
            <div style={{ marginBottom: "40px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: "15px", fontSize: "clamp(14px, 3vw, 16px)" }}>
                Get notified when we launch
              </p>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    padding: "15px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "8px",
                    width: "300px",
                    maxWidth: "100%",
                    outline: "none",
                    background: "rgba(255, 255, 255, 0.95)",
                    color: "#1a1a2e",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "15px 30px",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    background: "linear-gradient(135deg, #e94560, #0f3460)",
                    color: "#ffffff",
                    fontFamily: "inherit",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(233, 69, 96, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Notify Me
                </button>
              </form>
            </div>
          )}

          {/* Success message */}
          {showSuccess && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                color: "#4ade80",
                fontSize: "18px",
                marginBottom: "40px",
                animation: "fadeIn 0.5s ease",
              }}
            >
              <span style={{ fontSize: "40px" }}>✓</span>
              <p>Thank you! We'll notify you when we launch.</p>
            </div>
          )}

          {/* Social links */}
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(20px, 5vw, 30px)", marginBottom: "40px" }}>
            <a
              href="https://www.linkedin.com/in/crestvexa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/crestvexa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
            >
              X
            </a>
          </div>

          {/* Footer */}
          <footer style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "14px" }}>
            <p>© 2026 CRESTVEXA. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
