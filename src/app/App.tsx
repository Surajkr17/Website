import { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, BookOpen, ChevronDown } from "lucide-react";

// ─── COMPANY CONFIG ──────────────────────────────────────────────────────────
const COMPANY = {
  name: "Suntek Stationers Pvt Ltd",
  tagline: "Your Trusted Distribution Partner",
  description:
    "We are authorised distributors supplying quality products across brands to retailers, stores, and businesses. Browse our brand catalogues below to discover the products we carry.",
  phone: "+91 9148408844",
  email: "suntekblr@gmail.com",
  address: "Suntek Stationers Pvt ltd, Bangalore, India",
  mapsUrl: "https://maps.app.goo.gl/mCNHKup3ktUm3KPp7",
  whatsapp: "919148408844",
};

// ─── BRANDS CONFIG ───────────────────────────────────────────────────────────
// Replace `catalogueUrl` with the actual Google Drive PDF link for each brand.
// Replace `logo` with an image URL or leave empty to show initials.
const BRANDS = [
  {
    id: 1,
    name: "Casio",
    category: "Personal Care",
    description: "Premium personal care & hygiene products",
    catalogueUrl: "https://drive.google.com/file/d/1pX3ZVu0J9616H1j5ed302h7gVync_ztr/view?usp=sharing",
    color: "#1a56db",
    textColor: "#ffffff",
    logo: "/casio_logo.png",
  },
  {
    id: 2,
    name: "Kangaro",
    category: "Home Care",
    description: "Household cleaning & maintenance solutions",
    catalogueUrl: "https://drive.google.com/file/d/1fkewtFZrosi3OqMqDZW_673PqvuSE4XF/view?usp=sharing",
    color: "#0e9f6e",
    textColor: "#ffffff",
    logo: "/kangaro_logo.png",
  },
  {
    id: 3,
    name: "Classmate",
    category: "Food & Beverages",
    description: "Quality food & beverage essentials",
    catalogueUrl: "https://drive.google.com/file/d/1tafxqAWn9rAtRvmQxgKyBh4NYVd4wu2j/view?usp=sharing",
    color: "#ff5a1f",
    textColor: "#ffffff",
    logo: "/classmate_logo.png",
  },
  {
    id: 4,
    name: "Montblanc",
    category: "Healthcare",
    description: "Health & wellness products",
    catalogueUrl: "https://drive.google.com/file/d/1h-MxhBlUgwSPwp5C1tXDHycqCPKihaad/view?usp=sharing",
    color: "#7e3af2",
    textColor: "#ffffff",
    logo: "/montblanc_logo.png",
  },
  {
    id: 5,
    name: "Solo",
    category: "Stationery",
    description: "Office & stationery supplies",
    catalogueUrl: "https://drive.google.com/file/d/11yM3zW5WZwGyjngGmmeQQ_6CWflwa0RE/view?usp=sharing",
    color: "#c27803",
    textColor: "#ffffff",
    logo: "/solo_logo.png",
  },
  {
    id: 6,
    name: "Omega",
    category: "Electronics",
    description: "Consumer electronics & accessories",
    catalogueUrl: "https://drive.google.com/file/d/1KP0ZtyZiXW2Z6txg5JZx4YVVxF5KdQCJ/view?usp=sharing",
    color: "#1f2937",
    textColor: "#ffffff",
    logo: "/omega_logo.png",
  },
  {
    id: 7,
    name: "Parker",
    category: "Apparel",
    description: "Clothing & fashion accessories",
    catalogueUrl: "https://drive.google.com/file/d/1E8IyEqMp7IJiRF95qEWr1_yLVKLaDcBl/view?usp=sharing",
    color: "#be185d",
    textColor: "#ffffff",
    logo: "/parker_logo.png",
  },
  {
    id: 8,
    name: "Cross",
    category: "Kitchenware",
    description: "Kitchen tools & cookware solutions",
    catalogueUrl: "https://drive.google.com/file/d/1GLCTlJeBMIavGYR_aTwZeZWrnFRRzC-M/view?usp=sharing",
    color: "#0f766e",
    textColor: "#ffffff",
    logo: "/cross_logo.png",
  },
  {
    id: 9,
    name: "Polo",
    category: "Sports & Fitness",
    description: "Sports equipment & fitness gear",
    catalogueUrl: "https://drive.google.com/file/d/1Cx7BSfbK-cHXJMg4lyWZcHjQ3ntyt5MH/view?usp=sharing",
    color: "#b45309",
    textColor: "#ffffff",
    logo: "/polo_logo.png",
  },
  {
    id: 10,
    name: "Submarine",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/173Q_pmc_hakDwfs-U0hYTTx58_XJw_pM/view?usp=sharing",
    color: "#0369a1",
    textColor: "#ffffff",
    logo: "/submarine_logo.png",
  },
  {
    id: 11,
    name: "Sheaffer",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/1pRvI--Pid0vM9E5jFT65dbtZttMUuVkz/view?usp=sharing",
    color: "#065f46",
    textColor: "#ffffff",
    logo: "/sheaffer_logo.png",
  },
  {
    id: 12,
    name: "Scholar",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/13Eq-OX-ivkBjzTKMnYgtC5_K55gM_Tp5/view?usp=sharing",
    color: "#7c3aed",
    textColor: "#ffffff",
    logo: "/scholar_logo.png",
  },
  {
    id: 13,
    name: "Scotch",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/14vtmoENc9_AwpY4YbLjWwK_efGOAGCr_/view?usp=sharing",
    color: "#be123c",
    textColor: "#ffffff",
    logo: "/scotch_logo.png",
  },
  {
    id: 14,
    name: "Munix",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/1ir3WchGMGCrpJQg914kDOeDe_1tymlkp/view?usp=sharing",
    color: "#b45309",
    textColor: "#ffffff",
    logo: "/munix_logo.png",
  },
  {
    id: 15,
    name: "Nightingale",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/1RN2zG4Gr5iCBU_U5HhoB0sJ9lpEXbilM/view?usp=sharing",
    color: "#0f766e",
    textColor: "#ffffff",
    logo: "/nightingale_logo.png",
  },
  {
    id: 16,
    name: "Uniball",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/1lKkJZvuBYPvPIswgwhcnH7sPyx-eHJZl/view?usp=sharing",
    color: "#ea580c",
    textColor: "#ffffff",
    logo: "/uniball_logo.png",
  },
  {
    id: 17,
    name: "3M",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/1Iu1VXiV3YXTs0JSmisTjHsorT7Qa9hEK/view?usp=sharing",
    color: "#2563eb",
    textColor: "#ffffff",
    logo: "/3m_logo.png",
  },
  {
    id: 18,
    name: "Uppercase",
    category: "",
    description: "",
    catalogueUrl: "https://drive.google.com/file/d/1itKxMlCTwgQDgfVO5JTB4RU3X-_IWeeZ/view?usp=sharing",
    color: "#d97706",
    textColor: "#ffffff",
    logo: "/uppercase_logo.png",
  },
];

// ─── BRAND CARD ──────────────────────────────────────────────────────────────
function BrandCard({ brand }: { brand: (typeof BRANDS)[0] }) {
  const [hovered, setHovered] = useState(false);

  const initials = brand.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleClick = () => {
    window.open(brand.catalogueUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center justify-between rounded-2xl p-6 cursor-pointer transition-all duration-300 text-left w-full"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${brand.color}ee, ${brand.color}bb)`
          : `linear-gradient(135deg, ${brand.color}, ${brand.color}cc)`,
        color: brand.textColor,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 40px ${brand.color}55`
          : `0 4px 15px ${brand.color}33`,
      }}
    >
      {/* Top: Logo / Initials */}
      <div className="w-full flex flex-col items-center gap-4 mb-4">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-300"
          style={{
            background: "rgba(255,255,255,0.2)",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        >
          {brand.logo ? (
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-14 h-14 object-contain"
            />
          ) : (
            <span
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: brand.textColor,
              }}
            >
              {initials}
            </span>
          )}
        </div>

        <div className="text-center">
          
          <h3
            className="leading-tight"
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: brand.textColor,
            }}
          >
            {brand.name}
          </h3>
          
        </div>
      </div>

      {/* Bottom: CTA */}
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.2)",
          fontSize: "0.8rem",
          fontWeight: 600,
        }}
      >
        <BookOpen size={14} />
        <span>View Catalogue</span>
        <ExternalLink size={13} />
      </div>
    </button>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#f0f4f8" }}>
      {/* ── HERO / COMPANY HEADER ── */}
      <header
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1a56db 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 rounded-full opacity-10"
          style={{
            width: 500,
            height: 500,
            background: "#1a56db",
            transform: "translate(150px, -150px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full opacity-10"
          style={{
            width: 300,
            height: 300,
            background: "#1a56db",
            transform: "translate(-100px, 100px)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-14 flex flex-col items-center text-center gap-5">
          {/* Company Logo Placeholder */}
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.2)" }}
          >
            <img src="suntek_logo.png" alt="Suntek Stationers Logo" className="w-20 h-20 object-contain rounded-2xl" />
          </div>

          <div>
            <h1
              className="text-white"
              style={{ fontSize: "2.4rem", fontWeight: 800, lineHeight: 1.2 }}
            >
              {COMPANY.name}
            </h1>
            <p
              className="mt-2"
              style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.7)" }}
            >
              {COMPANY.tagline}
            </p>
          </div>

          <p
            className="max-w-xl leading-relaxed"
            style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}
          >
            {COMPANY.description}
          </p>

          {/* Contact Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.82rem",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Phone size={13} />
              {COMPANY.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(37,211,102,0.2)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.82rem",
                textDecoration: "none",
                border: "1px solid rgba(37,211,102,0.3)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.82rem",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Mail size={13} />
              {COMPANY.email}
            </a>
            <a
              href={COMPANY.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.82rem",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <MapPin size={13} />
              {COMPANY.address}
            </a>
          </div>

          {/* Scroll cue */}
          <div
            className="mt-6 flex flex-col items-center gap-1 animate-bounce"
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}
          >
            <span>Browse our brands</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </header>

      {/* ── BRANDS SECTION ── */}
      <main className="max-w-5xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.3,
            }}
          >
            Our Brand Portfolio
          </h2>
          <p
            className="mt-2"
            style={{ fontSize: "0.9rem", color: "#64748b" }}
          >
            Click any brand to open its product catalogue
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {BRANDS.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>

        {/* Empty state hint */}
        <p
          className="text-center mt-10"
          style={{ fontSize: "0.78rem", color: "#94a3b8" }}
        >
          Don't see what you're looking for?{" "}
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a56db", textDecoration: "none" }}
          >
            Contact us on WhatsApp
          </a>{" "}
          and we'll help you out.
        </p>
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="text-center py-8 px-6"
        style={{
          background: "#0f172a",
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.78rem",
        }}
      >
        <p>
          © {new Date().getFullYear()} {COMPANY.name} · All rights reserved
        </p>
        <p className="mt-1">
          Built to make catalogues accessible for our customers
        </p>
      </footer>
    </div>
  );
}