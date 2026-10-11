import confetti from "canvas-confetti";

const colors = ["#ff4fa3", "#3ec6e0", "#a77bea", "#ffd84d", "#7be0b0", "#ffffff"];

export function celebrate() {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const burst = (x: number) =>
    confetti({ particleCount: 90, spread: 75, startVelocity: 45, origin: { x, y: 0.7 }, colors, scalar: 1.1 });
  burst(0.2);
  setTimeout(() => burst(0.8), 180);
  setTimeout(() => confetti({ particleCount: 60, spread: 120, origin: { y: 0.4 }, colors, shapes: ["circle"] }), 400);
}
