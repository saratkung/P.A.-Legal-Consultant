import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const EASE = "power3.out";
export const EASE_EXPO = "expo.out";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fade + rise reveal for a set of elements within a scope, triggered on scroll.
 */
export function revealUp(scope, targets, opts = {}) {
  const els = gsap.utils.toArray(targets, scope);
  if (!els.length) return;

  if (prefersReducedMotion()) {
    gsap.set(els, { opacity: 1, y: 0, clearProps: "transform" });
    return;
  }

  gsap.fromTo(
    els,
    { opacity: 0, y: opts.y ?? 36 },
    {
      opacity: 1,
      y: 0,
      duration: opts.duration ?? 1.1,
      ease: opts.ease ?? EASE,
      stagger: opts.stagger ?? 0.12,
      scrollTrigger: {
        trigger: opts.trigger ?? scope,
        start: opts.start ?? "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Draw a horizontal/vertical gold line from 0 width/height to full.
 */
export function drawLine(scope, target, opts = {}) {
  const el = gsap.utils.toArray(target, scope)[0];
  if (!el) return;

  const prop = opts.axis === "height" ? "height" : "width";
  const to = opts.to ?? (opts.axis === "height" ? 60 : 80);

  if (prefersReducedMotion()) {
    gsap.set(el, { [prop]: to });
    return;
  }

  gsap.fromTo(
    el,
    { [prop]: 0 },
    {
      [prop]: to,
      duration: opts.duration ?? 1.2,
      ease: EASE_EXPO,
      scrollTrigger: {
        trigger: opts.trigger ?? el,
        start: opts.start ?? "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/**
 * Scale an image from a slightly zoomed state down to 1 as it enters view.
 */
export function imageReveal(scope, target, opts = {}) {
  const el = gsap.utils.toArray(target, scope)[0];
  if (!el) return;

  if (prefersReducedMotion()) {
    gsap.set(el, { scale: 1, clipPath: "inset(0% 0% 0% 0%)" });
    return;
  }

  gsap.fromTo(
    el,
    { scale: opts.from ?? 1.12, clipPath: "inset(6% 6% 6% 6%)" },
    {
      scale: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      duration: opts.duration ?? 1.4,
      ease: EASE_EXPO,
      scrollTrigger: {
        trigger: opts.trigger ?? el,
        start: opts.start ?? "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}
