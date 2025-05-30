import React, { useState } from "react";

/*
  PUBLIC_INTERFACE
  Slideshow component for "Di Maria's Homecoming: The Rosario Central Return"
  - Slides: Hero, Career Highlights, Return Announcement, Impact, Future Prospects
  - Theme: light; Colors: primary #0033A0, secondary #FFD700, accent #FFFFFF
  - Modern, visually engaging layout with bold headings, big images, and navigation
*/
const COLORS = {
  primary: "#0033A0",
  secondary: "#FFD700",
  accent: "#FFFFFF",
  background: "#F5F8FF"
};

const slides = [
  {
    key: "hero",
    bg: COLORS.primary,
    content: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: 440, justifyContent: "center"}}>
        <div
          style={{
            marginBottom: 24,
            borderRadius: 16,
            overflow: "hidden",
            width: 320,
            height: 320,
            background: COLORS.secondary,
            border: `6px solid ${COLORS.accent}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 32px #000a  "
          }}
        >
          {/* Hero Image Placeholder */}
          <img
            src="https://placehold.co/320x320/0033A0/FFD700?text=Di+Maria+Hero"
            alt="Hero: Di Maria in Rosario Central"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.03) brightness(1.03)" }}
          />
        </div>
        <h1
          style={{
            color: COLORS.accent,
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: 16,
            textShadow: "0 2px 6px #002"
          }}
        >
          Di Maria's Homecoming
        </h1>
        <div style={{ color: COLORS.secondary, fontWeight: 600, fontSize: 18, marginBottom: 16 }}>
          The Rosario Central Return
        </div>
        <p
          style={{
            maxWidth: 540,
            color: COLORS.accent,
            fontSize: "1.15rem",
            fontWeight: 400,
            textAlign: "center",
            opacity: 0.97
          }}
        >
          After conquering the world stage, Ángel Di María returns to his beloved Rosario Central.
          Relive his storied journey, the emotional announcement, and what this moment means for the Canalla and its fans.
        </p>
      </div>
    ),
  },

  {
    key: "career-highlights",
    bg: COLORS.background,
    content: (
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", minHeight: 420, padding: 24 }}>
        <div style={{ flex: 1, minWidth: 260, maxWidth: 390, display: "flex", justifyContent: "center" }}>
          <img
            src="https://placehold.co/340x340/FFD700/0033A0?text=Di+Maria+Career"
            alt="Di Maria Career Highlights"
            style={{ borderRadius: 16, boxShadow: "0 2px 24px #0033A088", width: 240, height: 240, objectFit: "cover", marginRight: 32 }}
          />
        </div>
        <div style={{ flex: 2, minWidth: 260, maxWidth: 480 }}>
          <h2 style={{ color: COLORS.primary, fontWeight: 800, fontSize: "2rem", marginBottom: 12 }}>
            Career Highlights
          </h2>
          <ul style={{fontSize: "1.1rem", color: "#222", fontWeight: 500, listStyle: "square", paddingLeft: 18, marginBottom: 16 }}>
            <li>
              Champions League Winner — Real Madrid
            </li>
            <li>
              Olympic Gold Medalist for Argentina (2008)
            </li>
            <li>
              Copa América & World Cup Winner with Argentina
            </li>
            <li>
              Successful stints at Benfica, PSG, Manchester United, Juventus
            </li>
          </ul>
          <blockquote style={{
            margin: "16px 0 0 0",
            padding: "12px 20px",
            background: COLORS.secondary,
            color: COLORS.primary,
            borderLeft: `6px solid ${COLORS.primary}`,
            fontWeight: 600,
            fontSize: 17,
            borderRadius: 8,
            boxShadow: "0 1px 7px #aaa3"
          }}>
            “Rosario Central shaped me. The world saw me grow, but my heart always remained here.” <span style={{fontWeight: 400}}>- Di María</span>
          </blockquote>
        </div>
      </div>
    ),
  },

  {
    key: "return-announcement",
    bg: COLORS.primary,
    content: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: 420, padding: 36 }}>
        <h2 style={{ color: COLORS.secondary, fontWeight: 800, fontSize: "2rem", marginBottom: 16, textAlign: "center" }}>
          The Announcement
        </h2>
        <img
          src="https://placehold.co/340x180/0033A0/FFD700?text=Official+Announcement"
          alt="Official Return Announcement"
          style={{ borderRadius: 12, marginBottom: 22, boxShadow: "0 2px 20px #FFD700bb", width: 340, objectFit: "cover", border: `3px solid ${COLORS.secondary}` }}
        />
        <p style={{ color: COLORS.accent, fontSize: 18, fontWeight: 500, textAlign: "center", maxWidth: 540, marginBottom: 14 }}>
          Rosario Central made it official: Di María, the prodigal son, is coming home.<br/>
          The global football community, supporters, and local media erupted with excitement and pride.
        </p>
        <blockquote style={{
          background: COLORS.accent,
          color: COLORS.primary,
          fontWeight: 700,
          fontSize: 16,
          padding: "10px 18px",
          borderLeft: `6px solid ${COLORS.secondary}`,
          borderRadius: 8,
          maxWidth: 440,
          margin: "0 auto"
        }}>
          “¡Bienvenido, Fideo! Rosario is your home, today and forever.” <span style={{fontWeight: 400}}>- Fan Banner at Gigante de Arroyito</span>
        </blockquote>
      </div>
    ),
  },

  {
    key: "impact",
    bg: COLORS.secondary,
    content: (
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", minHeight: 420, padding: 24, justifyContent: "center" }}>
        <div style={{ flex: 2, minWidth: 260, maxWidth: 480, marginBottom: 12 }}>
          <h2 style={{ color: COLORS.primary, fontWeight: 800, fontSize: "2rem", marginBottom: 10 }}>
            Impact on Rosario Central
          </h2>
          <p style={{ color: COLORS.primary, fontSize: "1.11rem", fontWeight: 500, marginBottom: 8 }}>
            Di María’s return electrifies the club’s ambitions, unites fans, and shines a global spotlight on Rosario Central. Stadium tickets soar, and a new generation of players dreams bigger than ever.
          </p>
          <blockquote style={{
            fontWeight: 700,
            fontSize: 16,
            background: COLORS.accent,
            color: COLORS.primary,
            borderLeft: `6px solid ${COLORS.primary}`,
            padding: "10px 18px",
            borderRadius: 6,
            marginTop: 10,
            boxShadow: "0 1px 6px #1114"
          }}>
            “This is more than football. It’s hope reborn for Rosario.” <span style={{ fontWeight: 400 }}>- Supporters’ Association</span>
          </blockquote>
        </div>
        <div style={{ flex: 1, minWidth: 240, maxWidth: 350, display: "flex", justifyContent: "center", marginTop: 10 }}>
          <img
            src="https://placehold.co/240x240/0033A0/FFD700?text=Rosario+Impact"
            alt="Impact on Rosario Central"
            style={{ borderRadius: 16, width: 200, height: 200, objectFit: "cover", border: `3px solid ${COLORS.primary}`, boxShadow: "0 2px 16px #0033A066" }}
          />
        </div>
      </div>
    ),
  },

  {
    key: "future-prospects",
    bg: COLORS.primary,
    content: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: 420, justifyContent: "center", padding: 32 }}>
        <h2 style={{ color: COLORS.secondary, fontWeight: 800, fontSize: "2rem", marginBottom: 14 }}>
          Future Prospects
        </h2>
        <img
          src="https://placehold.co/320x170/FFD700/0033A0?text=Future+Vision"
          alt="Future Prospects"
          style={{ borderRadius: 14, marginBottom: 17, border: `3px solid ${COLORS.accent}`, width: 320, objectFit: "cover", boxShadow: "0 2px 14px #0027" }}
        />
        <p style={{ color: COLORS.accent, fontWeight: 500, fontSize: "1.07rem", textAlign: "center", maxWidth: 540 }}>
          With Di María’s leadership, Rosario Central eyes greater heights and continental dreams. His legacy will inspire homegrown talent and invigorate the club’s future.
        </p>
      </div>
    ),
  },
];

// PUBLIC_INTERFACE
function Slideshow() {
  const [index, setIndex] = useState(0);

  // Slide navigation handlers (looping)
  const goPrev = () => setIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  const goNext = () => setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  const goTo = (i) => setIndex(i);

  return (
    <section
      style={{
        width: "100%",
        minHeight: 520,
        background: slides[index].bg,
        transition: "background 0.4s cubic-bezier(.68,-0.55,.27,1.55)",
        borderRadius: 28,
        margin: "40px auto 48px auto",
        boxShadow: "0 6px 56px #0033A022",
        position: "relative",
        maxWidth: 900,
        overflow: "hidden",
      }}
      aria-label="Di Maria Homecoming Slideshow"
    >
      <div>
        {slides[index].content}
      </div>
      {/* Navigation Arrows */}
      <button
        aria-label="Previous slide"
        onClick={goPrev}
        style={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: COLORS.background,
          borderRadius: "50%",
          border: "none",
          width: 44,
          height: 44,
          cursor: "pointer",
          boxShadow: "0 1px 6px #0033A022",
          opacity: 0.94,
          transition: "background 0.2s",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        tabIndex={0}
      >
        <span style={{
            color: COLORS.primary,
            fontSize: 32,
            lineHeight: 1
          }}>
          {"‹"}
        </span>
      </button>
      <button
        aria-label="Next slide"
        onClick={goNext}
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: COLORS.background,
          borderRadius: "50%",
          border: "none",
          width: 44,
          height: 44,
          cursor: "pointer",
          boxShadow: "0 1px 6px #0033A022",
          opacity: 0.94,
          transition: "background 0.2s",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        tabIndex={0}
      >
        <span style={{
            color: COLORS.primary,
            fontSize: 32,
            lineHeight: 1
          }}>
          {"›"}
        </span>
      </button>
      {/* Slide Dots */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 11,
        padding: 16,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0
      }}>
        {slides.map((slide, i) => (
          <button
            key={slide.key}
            aria-label={`Go to slide ${i+1}`}
            onClick={() => goTo(i)}
            style={{
              width: index === i ? 18 : 12,
              height: index === i ? 18 : 12,
              borderRadius: "50%",
              background: index === i ? COLORS.secondary : COLORS.accent,
              border: index === i ? `3px solid ${COLORS.primary}` : `2px solid ${COLORS.secondary}`,
              margin: 2,
              cursor: "pointer",
              transition: "all 0.19s"
            }}
            tabIndex={0}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Slideshow;
