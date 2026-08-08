'use client';
import { useCallback, useEffect, useRef, useState } from "react";

const INITIAL_TARGET = 80;
const INITIAL_DURATION = 600;
const FINISH_DURATION = 200;
const FADE_DURATION = 250;
// Safety net for browsers that never emit an LCP entry (e.g. Safari).
const FALLBACK_DELAY = 3000;

export default function LoadingBar() {
	const [progress, setProgress] = useState(0);
	const [visible, setVisible] = useState(true);
	const progressRef = useRef(0);
	const doneRef = useRef(false);
	const rafRef = useRef<number | undefined>(undefined);

	const animateTo = useCallback((target: number, duration: number, onComplete?: () => void) => {
		if (rafRef.current) cancelAnimationFrame(rafRef.current);

		const start = performance.now();
		const from = progressRef.current;

		const tick = (now: number) => {
			const t = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - t, 3);
			const value = from + (target - from) * eased;
			progressRef.current = value;
			setProgress(value);

			if (t < 1) {
				rafRef.current = requestAnimationFrame(tick);
			} else {
				onComplete?.();
			}
		};

		rafRef.current = requestAnimationFrame(tick);
	}, []);

	const finish = useCallback(() => {
		if (doneRef.current) return;
		doneRef.current = true;

		animateTo(100, FINISH_DURATION, () => {
			setTimeout(() => setVisible(false), FADE_DURATION);
		});
	}, [animateTo]);

	useEffect(() => {
		animateTo(INITIAL_TARGET, INITIAL_DURATION);
		const fallback = setTimeout(finish, FALLBACK_DELAY);

		// PerformanceObserver reports as soon as a paint candidate lands, unlike
		// next/web-vitals' onLCP, which only fires once the metric is finalized
		// (tab hidden/pagehide) — too late for a loading indicator.
		let observer: PerformanceObserver | undefined;
		try {
			observer = new PerformanceObserver(finish);
			observer.observe({ type: "largest-contentful-paint", buffered: true });
		} catch {
			// LCP entry type unsupported (e.g. Safari) — fallback timer covers it.
		}

		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			clearTimeout(fallback);
			observer?.disconnect();
		};
	}, [animateTo, finish]);

	if (!visible) return null;

	return (
		<div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden pointer-events-none">
			<div
				className="h-full bg-accent transition-opacity duration-300"
				style={{
					width: `${progress}%`,
					opacity: progress >= 100 ? 0 : 1,
				}}
			/>
		</div>
	);
}
