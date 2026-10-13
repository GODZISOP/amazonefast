"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./AccordionGallery.css";

interface PanelData {
  idx: string;
  spine: string;
  titlePrimary: string;
  titleEm: string;
  desc: string;
  img: string;
  alt: string;
  meta: [string, string, string];
}

const panelsData: PanelData[] = [
  {
    idx: "01",
    spine: "Ali Waris Shoro",
    titlePrimary: "Ali Waris",
    titleEm: "Shoro",
    desc: "Amazon Fast Service offers reliable e-commerce services with professional and responsive client handling. Highly recommended.",
    img: "/review-1.png",
    alt: "Ali Waris Shoro - Verified Recommendation",
    meta: ["6 January", "Amazon Wholesale", "Review 01/04"],
  },
  {
    idx: "02",
    spine: "Bilal Jameel",
    titlePrimary: "Bilal",
    titleEm: "Jameel",
    desc: "I have been using Amazon Wholesale services for the last 6 months, and I can honestly say it has been a positive experience. Highly professional, responsive and supportive.",
    img: "/review-2.png",
    alt: "Bilal Jameel - 6-Month Partner",
    meta: ["19 July", "Wholesale FBA", "Review 02/04"],
  },
  {
    idx: "03",
    spine: "Executive Review",
    titlePrimary: "Executive",
    titleEm: "Feedback",
    desc: "The management supports innovation, ongoing improvement, and employee growth, fostering a reliable, dependable, and trustworthy partnership for scaling businesses.",
    img: "/review-3.png",
    alt: "Verified Client Feedback",
    meta: ["Verified Client", "Service Standards", "Review 03/04"],
  },
  {
    idx: "04",
    spine: "Wholesale Partner",
    titlePrimary: "Wholesale",
    titleEm: "Results",
    desc: "I placed my trust in their team, and they have remained professional, responsive, and supportive throughout the process. Highly recommended.",
    img: "/review-4.png",
    alt: "Wholesale Client Feedback",
    meta: ["Amazon Wholesale", "Active Account", "Review 04/04"],
  },
];

export default function AccordionGallery() {
  const rootRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (root.dataset.vsReady === "1") return;
    root.dataset.vsReady = "1";

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const smooth = (a: number, b: number, v: number) => {
      const t = clamp((v - a) / (b - a), 0, 1);
      return t * t * (3 - 2 * t);
    };
    const K = 170; // stiffness, shared by every panel to keep sum of weights = 1

    const q = (el: HTMLElement, s: string) => el.querySelector<HTMLElement>(".vs-accordion-gallery-" + s);
    const panelEls = Array.from(root.querySelectorAll<HTMLElement>(".vs-accordion-gallery-panel"));

    const panels = panelEls.map((el) => {
      const copy = q(el, "copy");
      return {
        el,
        win: q(el, "win")!,
        body: q(el, "body")!,
        img: q(el, "img") as HTMLImageElement,
        dim: q(el, "dim")!,
        shade: q(el, "shade")!,
        spine: q(el, "spine")!,
        hit: q(el, "hit") as HTMLButtonElement,
        bits: copy ? Array.from(copy.children) as HTMLElement[] : [],
        meta: q(el, "meta"),
        w: { x: 0, v: 0, t: 0 },
        pr: { x: 0, v: 0, t: 0 },
      };
    });

    const n = panels.length;
    if (!n) return;

    let active = clamp(Number(root.dataset.open) || 0, 0, n - 1);
    let raf = 0;
    let last = 0;
    let seen: string | null = null;
    let L = 0;
    let E = 0;
    let Ew = 0;
    let c = 74;
    let g = 10;
    let axis: "x" | "y" = "x";
    let C = 20;
    let drift = 14;
    let visible = true;
    let interacted = false;
    let hoverT: NodeJS.Timeout | number = 0;

    const px = { x: 0, v: 0, t: 0 };
    const sp = { x: 0, y: 0, t: 0, speed: 0 };

    panels[active].w.x = panels[active].w.t = 1;

    const css = (k: string, d: number) => {
      const v = parseFloat(getComputedStyle(root).getPropertyValue(k));
      return Number.isFinite(v) ? v : d;
    };

    const readProps = () => {
      const b = clamp(css("--vs-accordion-gallery-bounce", 0.45), 0, 1);
      C = 2 * (1 - 0.62 * b) * Math.sqrt(K);
      drift = css("--vs-accordion-gallery-drift", 14);
    };

    const sizes = new Float64Array(64);

    const render = () => {
      const m = c * 0.5;
      const target = E + (n - 1) * c;
      let sum = 0;
      let big = 0;

      for (let i = 0; i < n; i++) {
        const s = Math.min(c + Math.max(0, panels[i].w.x) * (E - c), Ew);
        sizes[i] = s;
        sum += s;
        if (s > sizes[big]) big = i;
      }

      const share = (sum - target) / (n - 1);
      sum = 0;
      for (let i = 0; i < n; i++) {
        if (i !== big) sizes[i] = Math.max(m, sizes[i] - share);
        sum += sizes[i];
      }
      sizes[big] = clamp(sizes[big] + target - sum, m, Ew);

      const dpr = window.devicePixelRatio || 1;
      const snap = (v: number) => Math.round(v * dpr) / dpr;
      const T = axis === "x" ? (v: number) => `translate3d(${snap(v)}px,0,0)` : (v: number) => `translate3d(0,${snap(v)}px,0)`;

      let pos = 0;
      for (let i = 0; i < n; i++) {
        const p = panels[i];
        const at = snap(pos);
        const size = snap(pos + sizes[i]) - at;
        const hide = Ew - size;
        const w = clamp(p.w.x, 0, 1);
        const pr = p.pr.x;

        p.el.style.transform = T(at);
        p.win.style.transform = T(-hide);
        p.body.style.transform = T(hide);

        const d = axis === "x" ? px.x * drift * w : 0;
        if (p.img) {
          p.img.style.opacity = (0.72 + 0.28 * w).toFixed(3);
          p.img.style.transform = axis === "x" ? `translate3d(${d.toFixed(2)}px,0,0)` : `translate3d(0,0,0)`;
        }

        p.dim.style.opacity = (0.46 * (1 - w) + 0.18 * pr).toFixed(3);
        p.shade.style.opacity = (0.5 + 0.5 * w).toFixed(3);
        p.spine.style.opacity = (1 - smooth(0.02, 0.28, w)).toFixed(3);

        p.bits.forEach((b, k) => {
          const o = smooth(0.5 + k * 0.1, 0.92 + k * 0.04, w);
          b.style.opacity = o.toFixed(3);
          b.style.transform = `translate3d(0,${((1 - o) * (16 + k * 6)).toFixed(2)}px,0)`;
        });

        if (p.meta) {
          p.meta.style.setProperty("--vs-accordion-gallery-rule", smooth(0.8, 1, w).toFixed(3));
        }

        pos += sizes[i] + g;
      }
    };

    const measure = () => {
      readProps();
      axis = root.clientWidth < css("--vs-accordion-gallery-stack-at", 768) ? "y" : "x";
      root.classList.toggle("is-stacked", axis === "y");
      c = axis === "x" ? css("--vs-accordion-gallery-closed", 74) : css("--vs-accordion-gallery-closed-y", 60);
      g = css("--vs-accordion-gallery-gap", 10);

      if (axis === "y") {
        E = Math.round(root.clientWidth * css("--vs-accordion-gallery-open-y", 1.15));
        L = E + (n - 1) * (c + g);
        if (root.style.height !== L + "px") root.style.height = L + "px";
      } else {
        if (root.style.height) root.style.height = "";
        L = root.clientWidth;
        E = L - (n - 1) * (c + g);
      }

      Ew = Math.round(E + (E - c) * 0.35);
      root.style.setProperty("--vs-accordion-gallery-slack", (axis === "y" ? Ew - E : 0) + "px");
      root.style.setProperty("--vs-accordion-gallery-open", E + "px");

      for (const p of panels) {
        p.el.style.width = axis === "x" ? Ew + "px" : "100%";
        p.el.style.height = axis === "y" ? Ew + "px" : "100%";
      }

      seen = root.getAttribute("style");
      render();
    };

    const springs = () => {
      const a = [px];
      for (const p of panels) a.push(p.w, p.pr);
      return a;
    };

    const settled = (s: { x: number; v: number; t: number }) =>
      Math.abs(s.x - s.t) < 1e-4 && Math.abs(s.v) < 1e-3;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const steps = Math.max(1, Math.ceil(dt * 240));
      const h = dt / steps;

      for (let i = 0; i < steps; i++) {
        for (const p of panels) {
          const s = p.w;
          s.v += (-K * (s.x - s.t) - C * s.v) * h;
          s.x += s.v * h;

          const r = p.pr;
          r.v += (-600 * (r.x - r.t) - 40 * r.v) * h;
          r.x += r.v * h;
        }
        px.v += (-60 * (px.x - px.t) - 15.5 * px.v) * h;
        px.x += px.v * h;
      }

      render();

      const all = springs();
      if (!visible || all.every(settled)) {
        all.forEach((s) => {
          s.x = s.t;
          s.v = 0;
        });
        render();
        raf = 0;
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    const kick = () => {
      if (reduce.matches) {
        springs().forEach((s) => {
          s.x = s.t;
          s.v = 0;
        });
        render();
        return;
      }
      if (!raf && visible) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const mark = () =>
      panels.forEach((p, j) => {
        p.el.classList.toggle("is-open", j === active);
        p.hit.setAttribute("aria-expanded", String(j === active));
        p.hit.tabIndex = j === active ? 0 : -1;
      });

    const open = (i: number) => {
      i = clamp(i, 0, n - 1);
      if (i === active && panels[i].w.t === 1) return;
      active = i;
      panels.forEach((p, j) => {
        p.w.t = j === i ? 1 : 0;
      });
      mark();
      kick();
      root.dispatchEvent(new CustomEvent("vs-accordion-gallery:open", { detail: { index: i } }));
    };

    (root as any).vsOpen = open;

    // Pointer event handlers
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const now = performance.now();
      const dtm = Math.max(1, now - sp.t);
      const dist = Math.hypot(e.clientX - sp.x, e.clientY - sp.y);
      sp.speed = sp.speed * 0.6 + (dist / dtm) * 1000 * 0.4;
      sp.x = e.clientX;
      sp.y = e.clientY;
      sp.t = now;
      const r = root.getBoundingClientRect();
      px.t = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1) * -1;
      if (drift) kick();
    };

    const onPointerLeave = () => {
      px.t = 0;
      clearTimeout(hoverT);
      kick();
    };

    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerleave", onPointerLeave);

    const cleanupFns: Array<() => void> = [];

    panels.forEach((p, i) => {
      const onMouseEnter = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        clearTimeout(hoverT);
        const fire = () => {
          if (performance.now() - sp.t < 45 && sp.speed > 900) {
            hoverT = setTimeout(fire, 45);
            return;
          }
          interacted = true;
          open(i);
        };
        hoverT = setTimeout(fire, 50 + clamp((sp.speed - 600) * 0.08, 0, 170));
      };

      const onMouseLeave = () => clearTimeout(hoverT);

      const onPointerDown = () => {
        p.pr.t = 1;
        kick();
      };

      const up = () => {
        if (p.pr.t) {
          p.pr.t = 0;
          kick();
        }
      };

      const onClick = () => {
        interacted = true;
        clearTimeout(hoverT);
        open(i);
      };

      const onKeyDown = (e: KeyboardEvent) => {
        const nextMap: Record<string, number> = {
          ArrowRight: i + 1,
          ArrowDown: i + 1,
          ArrowLeft: i - 1,
          ArrowUp: i - 1,
          Home: 0,
          End: n - 1,
        };
        const next = nextMap[e.key];
        if (next === undefined) return;
        e.preventDefault();
        interacted = true;
        const j = clamp(next, 0, n - 1);
        panels[j].hit.focus({ preventScroll: true });
        open(j);
      };

      p.el.addEventListener("pointerenter", onMouseEnter);
      p.el.addEventListener("pointerleave", onMouseLeave);
      p.el.addEventListener("pointerdown", onPointerDown);
      p.el.addEventListener("pointerup", up);
      p.el.addEventListener("pointercancel", up);
      p.hit.addEventListener("click", onClick);
      p.hit.addEventListener("keydown", onKeyDown);

      cleanupFns.push(() => {
        p.el.removeEventListener("pointerenter", onMouseEnter);
        p.el.removeEventListener("pointerleave", onMouseLeave);
        p.el.removeEventListener("pointerdown", onPointerDown);
        p.el.removeEventListener("pointerup", up);
        p.el.removeEventListener("pointercancel", up);
        p.hit.removeEventListener("click", onClick);
        p.hit.removeEventListener("keydown", onKeyDown);
      });
    });

    mark();

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) kick();
    });
    io.observe(root);

    const every = Number(root.dataset.autoplay) || 0;
    let autoplayLoop: NodeJS.Timeout | null = null;
    if (every > 0 && !reduce.matches) {
      autoplayLoop = setInterval(() => {
        if (interacted) {
          if (autoplayLoop) clearInterval(autoplayLoop);
          return;
        }
        if (visible && !root.matches(":hover")) {
          open((active + 1) % n);
        }
      }, every);
    }

    const ro = new ResizeObserver(measure);
    ro.observe(root);

    const mo = new MutationObserver(() => {
      if (root.getAttribute("style") !== seen) measure();
    });
    mo.observe(root, { attributes: true, attributeFilter: ["style"] });

    measure();

    // Cleanup on unmount
    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(hoverT);
      if (autoplayLoop) clearInterval(autoplayLoop);

      io.disconnect();
      ro.disconnect();
      mo.disconnect();

      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);

      cleanupFns.forEach((fn) => fn());
      delete (root as any).vsOpen;
      delete root.dataset.vsReady;
    };
  }, []);

  return (
    <ul
      ref={rootRef}
      className="vs-accordion-gallery"
      aria-label="Amazon Fast Services Client Success Stories"
      data-open="0"
      data-autoplay="6500"
    >
      {panelsData.map((panel, idx) => (
        <li key={panel.idx} className="vs-accordion-gallery-panel">
          <div className="vs-accordion-gallery-win">
            <div className="vs-accordion-gallery-body">
              {/* Image using native img with className as requested by vividsites */}
              <img
                className="vs-accordion-gallery-img"
                src={panel.img}
                alt={panel.alt}
                draggable={false}
                loading={idx < 2 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="vs-accordion-gallery-dim" />
              <div className="vs-accordion-gallery-shade" />
              <div className="vs-accordion-gallery-lift" />
              
              <span className="vs-accordion-gallery-idx" aria-hidden="true">
                {panel.idx}
              </span>
              
              <div className="vs-accordion-gallery-spine" aria-hidden="true">
                <span>{panel.spine}</span>
              </div>
              
              <div className="vs-accordion-gallery-copy">
                <h3>
                  {panel.titlePrimary} <em>{panel.titleEm}</em>
                </h3>
                <p>{panel.desc}</p>
                <div className="vs-accordion-gallery-meta">
                  <span>{panel.meta[0]}</span>
                  <span>{panel.meta[1]}</span>
                  <span>{panel.meta[2]}</span>
                </div>
              </div>

              <div className="vs-accordion-gallery-ringL" />
              <button
                className="vs-accordion-gallery-hit"
                type="button"
                aria-expanded={idx === 0 ? "true" : "false"}
                aria-label={`${panel.spine}, stop ${idx + 1} of ${panelsData.length}`}
              />
            </div>
            <div className="vs-accordion-gallery-edge" />
            <div className="vs-accordion-gallery-ringR" />
          </div>
        </li>
      ))}
    </ul>
  );
}
