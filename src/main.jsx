import { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const A = "/assets/templates/";

const templateImages = {
  chibi: ["5a59f420e5b11ff8.webp", "f1292f0a0e1fad6e.webp"],
  vinyl: ["2ec45a03d2b046d0.webp", "fbedab5be022b26d.webp"],
  pet: ["5852bac13ade3de8.webp", "6489a39537be7c79.webp"],
  brick: ["df4f9f2bbd9f3329.webp", "174fcdfe0f4ce060.webp"],
  keychain: ["c4950641f6514232.webp", "a5a4af4708f3d62f.webp"],
  lamp: ["9b3437217953eb33.webp", "5e2e5148b7e0fb63.webp"],
  egg: ["0a7ddd3cb0ffb341.webp", "7d0260276d3da6be.webp"],
  collapsible: ["cbcde5e30c52dc13.webp", "396cb8fbd0dcec0a.webp"],
  pixel: ["5ca2f998d508ec76.webp", "43c521d937994cb8.webp"],
  magnet: ["e90567713185abdb.webp", "0cee8834de92000a.webp"],
  plantpot: ["1cfecf663c8eacf3.webp", "9177c19111d270d0.webp"],
  terrain: ["1e0e80f9c4d50abb.webp", "7225b79ba8a78924.webp"],
};

const officialCardImages = {
  "chibi-figure": "/assets/templates/official-cards/live/chibi-figure.webp",
  "low-poly-cartoon-buddy":
    "/assets/templates/official-cards/live/lowpoly-cartoon-buddy.webp",
  "marble-statue-me": "/assets/templates/official-cards/live/marble-me.webp",
  "brick-figure": "/assets/templates/official-cards/live/brick-figure.webp",
  "pet-memorial": "/assets/templates/official-cards/live/pet-memorial.webp",
  "first-home-miniature":
    "/assets/templates/official-cards/live/first-home-miniature.webp",
  "clan-coin": "/assets/templates/official-cards/live/clan-coin.webp",
  "me-and-my-big-pet":
    "/assets/templates/official-cards/live/me-my-big-pet.webp",
  "me-and-my-pet": "/assets/templates/official-cards/live/me-my-pet.webp",
  "vinyl-figure": "/assets/templates/official-cards/live/vinyl-figure.webp",
  "photo-christmas-ornament":
    "/assets/templates/official-cards/live/photo-christmas-ornament.webp",
  "pixel-block-pal":
    "/assets/templates/official-cards/live/pixel-block-pal.webp",
  "fridge-magnet": "/assets/templates/official-cards/live/fridge-magnet.webp",
  "storybook-asset":
    "/assets/templates/official-cards/live/storybook-asset.webp",
  "inside-joke-trophy":
    "/assets/templates/official-cards/live/inside-joke-trophy.webp",
  "chess-piece-me": "/assets/templates/official-cards/live/chess-piece-me.webp",
  "gym-milestone-trophy":
    "/assets/templates/official-cards/live/gym-milestone-trophy.webp",
  "goblin-me": "/assets/templates/official-cards/live/goblin-me.webp",
  "creature-totem-pole":
    "/assets/templates/official-cards/live/creature-totem-pole.webp",
  "graduation-mini-me":
    "/assets/templates/official-cards/live/graduation-mini-me.webp",
  "egg-toy": "/assets/templates/official-cards/live/egg-toy.webp",
};

function officialTemplate(
  id,
  title,
  description,
  imageKey,
  category,
  outcome,
  tag,
  fit,
  accent,
) {
  const [image, hover] = templateImages[imageKey];
  return {
    id,
    title,
    description,
    category,
    outcome,
    tag,
    time: "~2 min",
    credits: "36 credits",
    image: `${A}${image}`,
    hover: `${A}${hover}`,
    fit,
    accent,
  };
}

const templates = [
  officialTemplate(
    "chibi-figure",
    "Chibi Figure",
    "Turn a photo into a blind-box-style chibi collectible figure — big head, cute proportions, your face and outfit kept, print-ready. One photo in, one figure out.",
    "chibi",
    "People",
    "Collectible",
    "3D Printing",
    "One person · full body",
    "#d9ff66",
  ),
  officialTemplate(
    "low-poly-cartoon-buddy",
    "Low-Poly Cartoon Buddy",
    "Turn any character or pet photo into a semi-low-poly cartoon 3D model — clean, solid mesh, vivid colors, big-eyed charm. One photo in, one game-ready model out.",
    "pet",
    "Pets",
    "Game-ready",
    "Game Development",
    "One character or pet",
    "#79b8ff",
  ),
  officialTemplate(
    "marble-statue-me",
    "Marble Statue Me",
    "Turn a selfie into a classical marble bust — Greek statue styling, museum-grade finish, one printable sculpture of you for the shelf.",
    "pet",
    "People",
    "Collectible",
    "3D Printing",
    "One person · clear portrait",
    "#d8d1bf",
  ),
  officialTemplate(
    "brick-figure",
    "Brick Figure",
    "Turn your selfie into a custom buildable-brick minifigure — blocky proportions, printed face, your outfit in solid colors, print-ready. One photo in, one brick figure out.",
    "brick",
    "People",
    "Collectible",
    "3D Printing",
    "One person · simple background",
    "#ffb45e",
  ),
  officialTemplate(
    "pet-memorial",
    "Pet Memorial",
    "Turn a beloved pet's photo into a peaceful memorial — sleeping with eyes closed, cradled in angel wings on a base. Lifelike, gentle, print-ready.",
    "pet",
    "Pets",
    "Gift",
    "3D Printing",
    "One pet · clear profile",
    "#e9d6a8",
  ),
  officialTemplate(
    "first-home-miniature",
    "First Home Miniature",
    "Turn a house photo into a cozy storybook miniature on a nameplate base — the classic first-home keepsake, printable as an ornament or a shelf piece.",
    "terrain",
    "Places",
    "Gift",
    "3D Printing",
    "One building · front view",
    "#d7bd88",
  ),
  officialTemplate(
    "clan-coin",
    "Clan Coin",
    "Forge your emblem or photo into a heavy challenge-coin relief medallion — crest detail, engraved border, collectible metal finish, print-ready.",
    "keychain",
    "Objects",
    "Collectible",
    "3D Printing",
    "Crest, emblem, or logo",
    "#cfa56c",
  ),
  officialTemplate(
    "me-and-my-big-pet",
    "Me & My BIG Pet",
    "The size-swap figurine — your pet becomes the giant, you become the tiny buddy at its paws. Two photos in, one adorable figurine out.",
    "chibi",
    "Pets",
    "Collectible",
    "3D Printing",
    "One person and one pet",
    "#d9ff66",
  ),
  officialTemplate(
    "me-and-my-pet",
    "Me & My Pet",
    "Upload your photo and your pet's photo — get one chibi figurine of the two of you together on a round base, likeness kept for both, print-ready.",
    "chibi",
    "Pets",
    "Collectible",
    "3D Printing",
    "One person and one pet",
    "#c9ff79",
  ),
  officialTemplate(
    "vinyl-figure",
    "Vinyl Figure",
    "Turn your photo into a big-head vinyl collectible figure — stylized proportions, your look kept, print-ready. One photo in, one vinyl figure out.",
    "vinyl",
    "People",
    "Collectible",
    "3D Printing",
    "One person · clear face",
    "#ff8fe5",
  ),
  officialTemplate(
    "photo-christmas-ornament",
    "Photo Christmas Ornament",
    "Turn a family photo into a flat, colored relief Christmas ornament disc — start the new-ornament-every-year tradition.",
    "magnet",
    "People",
    "Gift",
    "3D Printing",
    "One family photo",
    "#e9c66f",
  ),
  officialTemplate(
    "pixel-block-pal",
    "Pixel Block Pal",
    "Voxelize your photo into a retro pixel-block 3D model — chunky cubes, bright palette, retro-game charm, print-ready. One photo in, one blocky model out.",
    "pixel",
    "People",
    "Collectible",
    "3D Printing",
    "One clear subject",
    "#78d8ff",
  ),
  officialTemplate(
    "fridge-magnet",
    "Fridge Magnet",
    "Turn a favorite landscape, pet, or person into a fridge magnet — a framed low-relief plaque in full color with a flat magnet-ready back, print-ready.",
    "magnet",
    "Objects",
    "Gift",
    "3D Printing",
    "People, pets, or places",
    "#8fb1ff",
  ),
  officialTemplate(
    "storybook-asset",
    "Storybook Asset",
    "Turn concept art or a photo into one storybook-style 3D game asset — warm painterly colors, rounded shapes, clean silhouette, game-ready mesh.",
    "terrain",
    "Drawings",
    "Game-ready",
    "Game Development",
    "Concept art or photo",
    "#bbff74",
  ),
  officialTemplate(
    "inside-joke-trophy",
    "Inside Joke Trophy",
    "Turn a friend's photo and a short caption into a joke trophy — gold figure on top, your text on the plinth below. The award your group actually deserves.",
    "chibi",
    "People",
    "Gift",
    "3D Printing",
    "One person and a caption",
    "#f4c454",
  ),
  officialTemplate(
    "chess-piece-me",
    "Chess Piece Me",
    "Turn a portrait into a classical carved chess piece — royal robes, sculpted stone finish, your face unmistakably on the throne. One photo, one piece.",
    "pet",
    "People",
    "Collectible",
    "3D Printing",
    "One clear portrait",
    "#d8d1bf",
  ),
  officialTemplate(
    "gym-milestone-trophy",
    "Gym Milestone Trophy",
    "Turn a gym photo into a chibi lifter trophy — barbell overhead, victory pose, a milestone plate on the base. Flex it forever.",
    "chibi",
    "People",
    "Gift",
    "3D Printing",
    "One gym photo",
    "#ffb45e",
  ),
  officialTemplate(
    "goblin-me",
    "Goblin Me",
    "Turn a portrait photo into a highly detailed fantasy goblin 3D model that still reads as you. Fill in the form and get one printable goblin figure.",
    "chibi",
    "People",
    "Just for Fun",
    "3D Printing",
    "One clear portrait",
    "#8ca45b",
  ),
  officialTemplate(
    "creature-totem-pole",
    "Creature Totem Pole",
    "Turn your photo into a carved totem pole — the subject woven through a cylindrical relief pole, stone-sculpture finish, print-ready.",
    "terrain",
    "Objects",
    "Collectible",
    "3D Printing",
    "One creature or portrait",
    "#aaa095",
  ),
  officialTemplate(
    "graduation-mini-me",
    "Graduation Mini-Me",
    "Turn a photo into a chibi grad figure — cap, gown, and diploma on a nameplate base. The keepsake for graduation season.",
    "chibi",
    "People",
    "Gift",
    "3D Printing",
    "One graduate photo",
    "#e6b65e",
  ),
  officialTemplate(
    "egg-toy",
    "Egg Toy",
    "Turn a photo into a collectible gacha-style 3D egg toy — capsule-toy charm, print-ready. One photo in, one egg toy out.",
    "egg",
    "People",
    "Collectible",
    "3D Printing",
    "One clear portrait",
    "#aa91ff",
  ),
].map((template, index) => ({
  ...template,
  author: "Meshy_Official",
  uses: [
    93, 68, 58, 41, 37, 36, 30, 30, 26, 25, 21, 20, 19, 17, 17, 16, 16, 16, 14,
    14, 4,
  ][index],
  officialCard: officialCardImages[template.id],
}));

const breakfastTemplate = {
  id: "breakfast-magnet",
  title: "Breakfast Magnet",
  description:
    "Turn a favorite breakfast photo into a colorful 3D keepsake — layered food details, hand-painted texture, and a print-ready flat-backed model.",
  category: "Objects",
  outcome: "Gift",
  tag: "3D Printing",
  time: "~2 min",
  credits: "36 credits",
  image: "/assets/templates/tutorial-breakfast-model-glb.png",
  hover: "/assets/templates/tutorial-breakfast-photo.jpg",
  fit: "One plated meal · clear overhead photo",
  accent: "#d9ff66",
  author: "Meshy_Official",
  uses: 12,
};

const categories = ["All", "People", "Pets", "Objects", "Places", "Drawings"];
const outcomes = [
  "All outcomes",
  "3D Print",
  "Gift",
  "Collectible",
  "Game-ready",
  "Just for Fun",
];

function Icon({ name, size = 18 }) {
  const paths = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    upload: (
      <>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 20h14" />
      </>
    ),
    cube: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 7 9 5 9-5" />
        <path d="M12 12v10" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" />
        <path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    check: <path d="m5 12 4 4L19 6" />,
    caret: <path d="m8 10 4 4 4-4" />,
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    saveTemplate: (
      <>
        <path d="M6 3.5h9.5A2.5 2.5 0 0 1 18 6v14l-6-3.5L6 20V3.5Z" />
        <path d="m19 10.5.8 2.1 2.2.9-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.9.8-2.1Z" />
      </>
    ),
    gift: (
      <>
        <path d="M4 10h16v10H4z" />
        <path d="M2.5 6.5h19v4h-19z" />
        <path d="M12 6.5V20" />
        <path d="M12 6.5H8.5a2.5 2.5 0 1 1 2.5-2.5L12 6.5Z" />
        <path d="M12 6.5h3.5A2.5 2.5 0 1 0 13 4L12 6.5Z" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.7 9a2.45 2.45 0 0 1 4.72.9c0 1.8-2.42 2.08-2.42 3.7" />
        <path d="M12 17h.01" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34A1.7 1.7 0 0 0 14 20.93V21h-4v-.08A1.7 1.7 0 0 0 8.94 19.4a1.7 1.7 0 0 0-1.88.34L7 19.8 4.17 17l.06-.06A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3.08 14H3v-4h.08A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.88L4.2 7.06 7.03 4.2l.06.06A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3.08V3h4v.08A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.17.62.74 1 1.56 1H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    printer: (
      <>
        <path d="M6 9V3h12v6" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v7H6z" />
        <path d="M18 12h.01" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function MeshyMark() {
  return (
    <button
      className="brand"
      onClick={() => navigate("/")}
      aria-label="Meshy home"
    >
      <img src="/assets/brand/meshy-wordmark-accent.svg" alt="Meshy" />
    </button>
  );
}

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  const target = path.includes("#") ? path.split("#")[1] : "";
  if (target)
    requestAnimationFrame(() =>
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }),
    );
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

function Header({ route }) {
  return (
    <header className="site-header">
      <MeshyMark />
      <nav className="main-nav" aria-label="Primary">
        <button
          onClick={() => navigate("/templates/all")}
          className={
            route.startsWith("/templates")
              ? "active nav-template"
              : "nav-template"
          }
        >
          <Icon name="sparkle" size={15} />
          Templates
        </button>
        <button onClick={() => navigate("/#community")}>Community</button>
        <button>
          API <Icon name="caret" size={13} />
        </button>
        <button>
          Resources <Icon name="caret" size={13} />
        </button>
        <button>
          Creative Lab <Icon name="caret" size={13} />
        </button>
        <button>
          Shop <span className="shop-badge">NEW</span>
        </button>
      </nav>
      <div className="header-actions">
        <button className="agent-pill">
          <img
            className="agent-orb"
            src="/assets/brand/agent-icon.webp"
            alt=""
          />
          Agent
        </button>
        <div className="workspace-control">
          <button>Workspace</button>
          <button aria-label="Workspace menu">
            <Icon name="caret" size={14} />
          </button>
        </div>
        <div className="credit-control">
          <button className="credit-pill">
            <span className="coin" />
            1,058
          </button>
          <button className="credit-add" aria-label="Add credits">
            <Icon name="plus" size={16} />
          </button>
        </div>
        <button className="header-icon" aria-label="Gifts">
          <Icon name="gift" size={18} />
        </button>
        <button className="header-icon" aria-label="Help">
          <Icon name="help" size={18} />
        </button>
        <button
          className="header-icon notification-button"
          aria-label="Notifications"
        >
          <Icon name="bell" size={18} />
          <span />
        </button>
        <button className="avatar">AS</button>
      </div>
    </header>
  );
}

function TemplateCard({ template, onOpen, compact = false }) {
  const isBreakfast = template.id === "breakfast-magnet";
  return (
    <article
      className={`template-card ${compact ? "compact" : ""} ${isBreakfast ? "breakfast-template-card" : ""}`}
      style={{ "--accent": template.accent }}
    >
      <button
        className="card-media"
        onClick={() => onOpen(template)}
        aria-label={`Open ${template.title}`}
      >
        {isBreakfast ? (
          <>
            <img
              className="template-source"
              src={template.hover}
              alt="Breakfast source photo"
            />
            <img
              className="template-result breakfast-template-model"
              src={template.image}
              alt="Breakfast 3D model"
            />
            <span className="card-tag">{template.tag}</span>
            <span className="template-card-title">{template.title}</span>
          </>
        ) : template.officialCard ? (
          <>
            <img
              className="official-card-image"
              src={template.officialCard}
              alt={`${template.title} official template`}
            />
            <span className="card-tag">{template.tag}</span>
            <span className="template-card-title">{template.title}</span>
          </>
        ) : (
          <>
            <img
              className="template-source"
              src={template.hover}
              alt={`${template.title} source`}
            />
            <img
              className="template-result"
              src={template.image}
              alt={`${template.title} result`}
            />
            <span className="card-tag">{template.tag}</span>
            <span className="template-card-title">{template.title}</span>
          </>
        )}
      </button>
      <div className="template-author-row">
        <span className="template-author">
          <img src="/assets/brand/meshy-mark.webp" alt="" />
          {template.author}
        </span>
        <span className="template-uses">
          <Icon name="saveTemplate" size={17} />
          {template.uses}
        </span>
      </div>
      <div className="template-hover-panel">
        <div className="template-hover-title-row">
          <h3>{template.title}</h3>
          <button type="button" onClick={() => onOpen(template)}>
            <Icon name="sparkle" size={17} />
            Use Template
          </button>
        </div>
        <p>{template.description}</p>
        <div className="template-hover-meta">
          <span className="template-author">
            <img src="/assets/brand/meshy-mark.webp" alt="" />
            {template.author}
          </span>
          <span className="template-uses">
            <Icon name="saveTemplate" size={18} />
            {template.uses}
          </span>
        </div>
      </div>
    </article>
  );
}

function HomePage({ onOpen }) {
  const trackRef = useRef(null);

  const scrollRail = (dir) =>
    trackRef.current?.scrollBy({
      left: dir * Math.max(340, trackRef.current.clientWidth * 0.72),
      behavior: "smooth",
    });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const timer = window.setInterval(() => {
      if (track.matches(":hover") || track.contains(document.activeElement))
        return;
      const card = track.querySelector(".template-card");
      if (!card) return;
      const step = card.getBoundingClientRect().width + 12;
      const atEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - step;
      track.scrollTo({
        left: atEnd ? 0 : track.scrollLeft + step,
        behavior: "smooth",
      });
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="home-hero">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="hero-copy">
          <h1>
            Hi, AISimplify! <strong>What will you create in 3D?</strong>
          </h1>
        </div>
        <div className="quick-generate">
          <div className="mode-row">
            <button className="mode-active">
              <Icon name="sparkle" size={14} />
              Quick Generate
            </button>
            <button>
              <span className="agent-dot" />
              Agent Mode
            </button>
          </div>
          <button className="upload-zone">
            <span className="upload-icon">
              <Icon name="upload" />
            </span>
            <span>
              <strong>Upload an image</strong>
              <small>Click, drop or paste an image here</small>
            </span>
          </button>
          <div className="quick-footer">
            <div className="sample-stack">
              {templates.slice(0, 4).map((t) => (
                <img key={t.id} src={t.image} alt="" />
              ))}
            </div>
            <div className="quick-config">
              <button className="detail-select">
                High Detail <Icon name="caret" size={13} />
              </button>
              <button
                className="config-button"
                aria-label="Generation settings"
              >
                <Icon name="settings" size={18} />
              </button>
              <button className="generate-disabled">Generate</button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-templates section-shell" id="templates">
        <div className="section-heading">
          <h2>Start with a template</h2>
          <button
            className="view-all"
            onClick={() => navigate("/templates/all")}
          >
            View all templates <Icon name="arrow" />
          </button>
        </div>
        <div className="rail-frame">
          <button
            className="rail-arrow rail-arrow-left"
            onClick={() => scrollRail(-1)}
            aria-label="Previous templates"
          >
            <Icon name="chevron" />
          </button>
          <div className="template-rail" ref={trackRef}>
            {templates.slice(0, 21).map((t) => (
              <TemplateCard key={t.id} template={t} onOpen={onOpen} compact />
            ))}
          </div>
          <button
            className="rail-arrow rail-arrow-right"
            onClick={() => scrollRail(1)}
            aria-label="Next templates"
          >
            <Icon name="chevron" />
          </button>
        </div>
      </section>

      <CommunitySection />
    </main>
  );
}

function CommunitySection() {
  const posts = [
    {
      title: "Anime School Uniform Girl",
      author: "danielm.9j",
      image: "/assets/community/anime-school-uniform-girl.png",
      likes: 5,
      stars: 10,
    },
    {
      title: "Aurora Vanguard Gundam",
      author: "1874068952zsw",
      image: "/assets/community/aurora-vanguard-gundam.png",
      likes: 23,
      stars: 7,
    },
    {
      title: "Christ Wilderness Figurine HD",
      author: "erman-01",
      image: "/assets/community/christ-wilderness-figurine.png",
      likes: 16,
      stars: 9,
    },
    {
      title: "Ronnie the cat",
      author: "saqo1995s",
      image: "/assets/community/ronnie-the-cat.png",
      likes: 8,
      stars: 4,
    },
    {
      title: "Jennie The Cat",
      author: "San3we4ria",
      image: "/assets/community/jennie-the-cat.png",
      likes: 55,
      stars: 18,
    },
    {
      title: "Emeraldscale Dragon",
      author: "cyber_fox",
      image: "/assets/community/emeraldscale-dragon.png",
      likes: 60,
      stars: 22,
    },
    {
      title: "Midnight Elegance",
      author: "xavalon",
      image: "/assets/community/midnight-elegance.png",
      likes: 35,
      stars: 12,
    },
    {
      title: "Cloudmane",
      author: "cyber_fox",
      image: "/assets/community/cloudmane.png",
      likes: 30,
      stars: 15,
    },
    {
      title: "Wolf Cub",
      author: "cyber_fox",
      image: "/assets/community/wolf-cub.webp",
      likes: 131,
      stars: 42,
    },
    {
      title: "The Yelling Goblins",
      author: "PICKTURA",
      image: "/assets/community/yelling-goblins.webp",
      likes: 129,
      stars: 38,
    },
    {
      title: "Ember Fox",
      author: "cyber_fox",
      image: "/assets/community/ember-fox.webp",
      likes: 108,
      stars: 35,
    },
    {
      title: "Green Urban Woman",
      author: "kaesar3d",
      image: "/assets/community/green-urban-woman.webp",
      likes: 83,
      stars: 27,
    },
    {
      title: "Gothic Black Dress",
      author: "kaesar3d",
      image: "/assets/community/gothic-black-dress.webp",
      likes: 61,
      stars: 20,
    },
    {
      title: "Low Poly Mountain Rocks",
      author: "a.balanyuk",
      image: "/assets/community/low-poly-mountain.webp",
      likes: 56,
      stars: 18,
    },
    {
      title: "Sakura Bonsai",
      author: "Aiko",
      image: "/assets/community/sakura-bonsai.webp",
      likes: 50,
      stars: 16,
    },
    {
      title: "Purple Prism Tree",
      author: "abaddonant",
      image: "/assets/community/purple-prism-tree.webp",
      likes: 46,
      stars: 15,
    },
  ];

  return (
    <section
      className="community community-original section-shell"
      id="community"
    >
      <div className="community-toolbar">
        <h2>Community</h2>
        <nav className="community-tabs" aria-label="Community categories">
          <button className="selected">Recommended</button>
          <button>3D Printing</button>
          <button>Game Development</button>
          <span className="toolbar-rule" />
          <button>🏆 #MemoryToHold</button>
          <button aria-label="Games">🎮</button>
          <span className="toolbar-rule" />
          <button aria-label="Grid view">▦</button>
          <span className="toolbar-rule" />
          <button className="community-search">
            <Icon name="search" size={17} />
            Search
          </button>
        </nav>
        <button className="new-post">＋ New Post</button>
      </div>
      <div className="community-post-grid">
        {posts.map((post) => (
          <article className="community-post" key={post.title}>
            <button
              className="community-post-media"
              aria-label={`Open ${post.title}`}
            >
              <img
                className="community-artwork"
                src={post.image}
                alt={post.title}
              />
              <strong>{post.title}</strong>
            </button>
            <div className="community-post-footer">
              <span className="creator-avatar">
                {post.author[0].toUpperCase()}
              </span>
              <span>{post.author}</span>
              <span className="post-reactions">
                <span>♡ {post.likes}</span>
                <span>☆ {post.stars}</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function OutcomeFilter({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className={`outcome-filter ${open ? "open" : ""}`} ref={dropdownRef}>
      <button
        className="outcome-select"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{value}</span>
        <Icon name="caret" size={15} />
      </button>
      {open && (
        <div
          className="outcome-menu"
          role="listbox"
          aria-label="Filter by outcome"
        >
          {outcomes.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              <span className="outcome-check">
                {value === option && <Icon name="check" size={15} />}
              </span>
              <span>{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function TemplatesPage({ onOpen }) {
  const [category, setCategory] = useState("All");
  const [outcome, setOutcome] = useState("All outcomes");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      templates.filter((t) => {
        const matchesCategory = category === "All" || t.category === category;
        const matchesOutcome =
          outcome === "All outcomes" || t.outcome === outcome;
        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q ||
          `${t.title} ${t.description} ${t.category} ${t.outcome}`
            .toLowerCase()
            .includes(q);
        return matchesCategory && matchesOutcome && matchesQuery;
      }),
    [category, outcome, query],
  );

  return (
    <main className="templates-page">
      <section
        className="template-tutorial section-shell"
        aria-label="How it works"
      >
        <div className="tutorial-heading">
          <div className="eyebrow green">
            <span />
            How it works
          </div>
          <p>
            Pick a style, add your photo, and get a 3D model ready to preview
            and print.
          </p>
        </div>
        <ol className="tutorial-steps">
          <li>
            <span className="tutorial-number">01</span>
            <div className="tutorial-step-head">
              <span className="tutorial-icon">
                <Icon name="sparkle" size={21} />
              </span>
              <div>
                <h2>Choose a template</h2>
                <p>Find the style that fits what you want to make.</p>
              </div>
            </div>
            <div
              className="tutorial-example example-templates"
              aria-label="Official template examples"
            >
              {[templates[3], breakfastTemplate, templates[11]].map(
                (template, index) => (
                  <div
                    className={`mini-template mini-template-${index + 1} ${template.id === "breakfast-magnet" ? "mini-breakfast-template" : ""}`}
                    key={template.id}
                  >
                    {template.id === "breakfast-magnet" ? (
                      <>
                        <img
                          className="mini-breakfast-source"
                          src={template.hover}
                          alt="Breakfast source photo"
                        />
                        <img
                          className="mini-breakfast-model"
                          src={template.image}
                          alt="Breakfast 3D model"
                        />
                      </>
                    ) : (
                      <img src={template.officialCard} alt={template.title} />
                    )}
                    <span>{template.title}</span>
                  </div>
                ),
              )}
            </div>
          </li>
          <li>
            <span className="tutorial-number">02</span>
            <div className="tutorial-step-head">
              <span className="tutorial-icon">
                <Icon name="upload" size={21} />
              </span>
              <div>
                <h2>Upload your photo</h2>
                <p>Use one clear image of your person, pet, or object.</p>
              </div>
            </div>
            <div className="tutorial-example example-upload-flow">
              <div className="tutorial-upload-target">
                <span className="tutorial-upload-icon">
                  <Icon name="upload" size={21} />
                </span>
                <strong>Upload image here</strong>
                <small>JPG, PNG or WEBP</small>
              </div>
              <div className="tutorial-upload-photo breakfast-photo">
                <img
                  src="/assets/templates/tutorial-breakfast-photo.jpg"
                  alt="Breakfast photo uploaded for the 3D model"
                />
              </div>
              <span className="upload-flow-arrow">
                <Icon name="arrow" size={26} />
              </span>
            </div>
          </li>
          <li>
            <span className="tutorial-number">03</span>
            <div className="tutorial-step-head">
              <span className="tutorial-icon">
                <Icon name="printer" size={21} />
              </span>
              <div>
                <h2>Preview &amp; print</h2>
                <p>Review the result, then download it for 3D printing.</p>
              </div>
            </div>
            <div className="tutorial-example example-preview">
              <div className="preview-status">
                <span className="live-dot" />
                3D preview
              </div>
              <img
                className="breakfast-glb-render"
                src="/assets/templates/tutorial-breakfast-model-glb.png"
                alt="Breakfast GLB model in the 3D preview"
              />
              <div className="preview-floor" />
              <div className="print-ready">
                <Icon name="printer" size={14} />
                <span>
                  <strong>Print ready</strong>
                  <small>STL · OBJ</small>
                </span>
              </div>
            </div>
          </li>
        </ol>
      </section>

      <section className="catalog section-shell">
        <div className="catalog-sticky">
          <div className="search-box">
            <Icon name="search" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search templates, styles, or outcomes"
            />
            <kbd>⌘ K</kbd>
          </div>
          <div className="filter-row">
            <div className="category-tabs">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={category === c ? "selected" : ""}
                >
                  {c}
                </button>
              ))}
            </div>
            <OutcomeFilter value={outcome} onChange={setOutcome} />
          </div>
        </div>

        <div className="catalog-title">
          <div>
            <span className="catalog-kicker">
              {category === "All" ? "Explore all" : category}
            </span>
            <h2>{filtered.length} templates</h2>
          </div>
          <span className="results-note">Curated for reliable results</span>
        </div>
        {filtered.length ? (
          <div className="template-grid">
            {filtered.map((t) => (
              <TemplateCard key={t.id} template={t} onOpen={onOpen} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>
              <Icon name="search" size={28} />
            </span>
            <h3>No templates found</h3>
            <p>Try a broader search or clear a filter.</p>
            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
                setOutcome("All outcomes");
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function DetailModal({ template, initialCreate, onClose }) {
  const [stage, setStage] = useState(initialCreate ? "create" : "detail");
  const [uploaded, setUploaded] = useState(null);
  const [fileError, setFileError] = useState("");
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    dialog
      ?.querySelector("button:not([disabled]), input:not([disabled])")
      ?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialog) return;

      const focusable = [
        ...dialog.querySelectorAll(
          "button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])",
        ),
      ].filter((element) => !element.hidden && element.getClientRects().length);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  useEffect(() => {
    if (!uploaded?.isObjectUrl) return undefined;
    return () => URL.revokeObjectURL(uploaded.url);
  }, [uploaded]);

  useEffect(() => {
    if (stage !== "generating") return;
    const steps = [
      [700, 34],
      [1500, 62],
      [2300, 86],
      [3200, 100],
    ];
    const timers = steps.map(([ms, val]) =>
      setTimeout(() => setProgress(val), ms),
    );
    timers.push(setTimeout(() => setStage("result"), 3700));
    return () => timers.forEach(clearTimeout);
  }, [stage]);

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setFileError("Choose an image smaller than 10 MB.");
      e.target.value = "";
      return;
    }
    setFileError("");
    setUploaded({
      url: URL.createObjectURL(file),
      name: file.name,
      isObjectUrl: true,
    });
  };

  const sample = () => {
    setFileError("");
    setUploaded({
      url: template.hover,
      name: "Sample photo",
      isObjectUrl: false,
    });
  };
  const beginGeneration = () => {
    setProgress(12);
    setStage("generating");
  };
  const progressLabel =
    progress < 36
      ? "Analyzing your image"
      : progress < 70
        ? "Applying the template style"
        : "Building your 3D model";

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        className={`detail-modal stage-${stage}`}
        role="dialog"
        aria-modal="true"
        aria-label={`${template.title} template`}
      >
        {stage === "detail" ? (
          <div className="detail-toolbar">
            <button aria-label="Previous template">
              <Icon name="chevron" size={15} />
            </button>
            <button aria-label="Next template">
              <Icon name="chevron" size={15} />
            </button>
            <span />
            <button className="detail-close" onClick={onClose}>
              <Icon name="close" size={15} />
              Close
            </button>
          </div>
        ) : (
          <button className="modal-close" onClick={onClose}>
            <Icon name="close" />
          </button>
        )}
        {stage === "detail" && (
          <>
            <section className="official-preview-panel">
              <div className="model-stage">
                <div className="case-rail" aria-label="Example variants">
                  <button aria-label="Previous examples">
                    <Icon name="chevron" size={14} />
                  </button>
                  <span className="case-placeholder active" />
                  <span className="case-placeholder" />
                  <span className="case-placeholder" />
                  <button aria-label="Next examples">
                    <Icon name="chevron" size={14} />
                  </button>
                </div>
                <div
                  className="model-placeholder"
                  aria-label="3D model placeholder"
                >
                  <span>
                    <Icon name="cube" size={28} />
                  </span>
                  <small>3D model preview</small>
                </div>
              </div>
              <button
                className="official-upload-box"
                onClick={() => setStage("create")}
              >
                <Icon name="upload" size={22} />
                <span>Click / Drag & Drop / Paste Image</span>
              </button>
              <div className="official-preview-footer">
                <span>Want more control?</span>
                <button className="agent-link">
                  <span className="agent-dot" />
                  Open in Agent <Icon name="arrow" size={13} />
                </button>
                <button
                  className="official-generate"
                  onClick={() => setStage("create")}
                >
                  <Icon name="sparkle" size={16} />
                  Generate
                </button>
              </div>
            </section>
            <aside className="official-info-panel">
              <div className="official-info-image">
                <img
                  src={template.officialCard || template.image}
                  alt={`${template.title} template example`}
                />
              </div>
              <div className="official-info-copy">
                <div className="official-title-row">
                  <h2>{template.title}</h2>
                  <span>{template.tag}</span>
                </div>
                <p>{template.description}</p>
                <div className="official-save-count">
                  <Icon name="saveTemplate" size={17} />
                  <strong>{template.uses}</strong>
                </div>
                <div className="official-author-row">
                  <span className="official-author">
                    <img src="/assets/brand/meshy-mark.webp" alt="" />
                    <strong>Meshy_Official</strong>
                  </span>
                  <button>
                    <Icon name="sparkle" size={16} />
                    Follow
                  </button>
                </div>
              </div>
            </aside>
          </>
        )}
        {stage === "create" && (
          <div className="create-panel">
            <div className="create-head">
              <span className="step-chip">1 of 2</span>
              <h2>Start with your image</h2>
              <p>
                Choose one clear photo. We’ll preview how it works with{" "}
                <strong>{template.title}</strong>.
              </p>
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              hidden
              onChange={onFile}
            />
            <button
              className={`drop-zone ${uploaded ? "has-image" : ""}`}
              onClick={() => inputRef.current?.click()}
            >
              {uploaded ? (
                <>
                  <img src={uploaded.url} alt="Uploaded preview" />
                  <span className="replace-badge">Replace image</span>
                </>
              ) : (
                <>
                  <span className="large-upload">
                    <Icon name="upload" size={26} />
                  </span>
                  <strong>Drop an image here, or click to browse</strong>
                  <small>PNG, JPG or WEBP · Up to 10MB</small>
                </>
              )}
            </button>
            {fileError && (
              <p className="file-error" role="alert">
                {fileError}
              </p>
            )}
            <div className="sample-row">
              <span>Don’t have one ready?</span>
              <button onClick={sample}>Try a sample image</button>
            </div>
            <div className="create-footer">
              <button
                className="secondary-button"
                onClick={() => setStage("detail")}
              >
                Back
              </button>
              <button
                disabled={!uploaded}
                className="primary-button"
                onClick={beginGeneration}
              >
                <Icon name="sparkle" />
                Generate preview
              </button>
            </div>
          </div>
        )}
        {stage === "generating" && (
          <div className="generating-panel">
            <div className="generation-orb">
              <img
                src={uploaded?.url || template.image}
                alt="Input being processed"
              />
              <div className="scan-line" />
            </div>
            <span className="step-chip">Simulated generation</span>
            <h2>{progressLabel}</h2>
            <p>Creating your {template.title.toLowerCase()} preview…</p>
            <div className="progress-track">
              <span style={{ width: `${progress}%` }} />
            </div>
            <strong className="progress-number">{progress}%</strong>
          </div>
        )}
        {stage === "result" && (
          <div className="result-panel">
            <div className="result-visual">
              <img src={template.image} alt={`Generated ${template.title}`} />
              <div className="result-chip">
                <span className="live-dot" />
                Preview ready
              </div>
            </div>
            <div className="result-content">
              <span className="step-chip">2 of 2</span>
              <h2>
                Your {template.title}
                <br />
                is ready to explore.
              </h2>
              <p>
                This is a pre-generated result used to demonstrate the
                end-to-end product experience.
              </p>
              <div className="result-actions">
                <button
                  className="primary-button"
                  onClick={() => {
                    setStage("create");
                    setUploaded(null);
                  }}
                >
                  Try another photo
                </button>
                <button className="secondary-button" onClick={onClose}>
                  Explore templates
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState(window.location.pathname);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  useEffect(() => {
    if (route === "/templates") {
      requestAnimationFrame(() =>
        document
          .getElementById("templates")
          ?.scrollIntoView({ behavior: "smooth" }),
      );
    }
  }, [route]);
  const openTemplate = (template, initialCreate = false) =>
    setModal({ template, initialCreate });
  return (
    <div className="app-shell">
      <Header route={route} />
      {route === "/templates/all" ? (
        <TemplatesPage onOpen={openTemplate} />
      ) : (
        <HomePage onOpen={openTemplate} />
      )}
      <footer className="site-footer">
        <MeshyMark />
        <span>Independent product concept for template discovery.</span>
        <span>Demo · 2026</span>
      </footer>
      {modal && (
        <DetailModal
          template={modal.template}
          initialCreate={modal.initialCreate}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
