import { RadariteData } from "@type/RadariteData";
import styles from "@styles/components/radar/Shape.module.css";
import { Accessor, createMemo, For, Show } from "solid-js";
import { calculatePoint } from "@lib/calculations/calculatePoint";

type ShapeProps = {
        radarite: Accessor<RadariteData>;
};

export default function Shape({ radarite }: ShapeProps) {
        const fullPoints = createMemo(() => {
                return radarite().metrics.map((stat, i) => {
                        const point = calculatePoint(
                                i,
                                stat.percentage ?? 0,
                                radarite().metrics.length,
                                radarite().appearance.minimal,
                        );
                        return { x: point.x, y: point.y, metric: stat };
                });
        });

        const polygonPoints = createMemo(() => {
                return fullPoints()
                        .map((point) => `${point.x},${point.y}`)
                        .join(" ");
        });

        const gridLines = createMemo(() => {
                const levels = radarite().metrics.length;
                const result = [];
                const shape = radarite().appearance?.shapeStyle ?? "polygon";
                for (let level = 1; level <= levels; level++) {
                        const value = (level / levels) * 100;

                        if (shape === "circle") {
                                result.push({
                                        type: "circle",
                                        radius:
                                                (value / 100) *
                                                (radarite().appearance?.minimal
                                                        ? 190
                                                        : 150),
                                });
                        } else {
                                const points = radarite()
                                        .metrics.map((_, i) => {
                                                const point = calculatePoint(
                                                        i,
                                                        value,
                                                        radarite().metrics
                                                                .length,
                                                        radarite().appearance
                                                                .minimal,
                                                );
                                                return `${point.x},${point.y}`;
                                        })
                                        .join(" ");
                                result.push({
                                        type: "polygon",
                                        points,
                                });
                        }
                }
                return result;
        });

        const axisLines = createMemo(() => {
                return radarite().metrics.map((_, i) => {
                        const point = calculatePoint(
                                i,
                                100,
                                radarite().metrics.length,
                                radarite().appearance.minimal,
                        );
                        return { x1: 200, y1: 200, x2: point.x, y2: point.y };
                });
        });

        const clipPathPoints = createMemo(() => {
                return radarite()
                        .metrics.map((_, i) => {
                                const point = calculatePoint(
                                        i,
                                        100,
                                        radarite().metrics.length,
                                        radarite().appearance.minimal,
                                );
                                return `${point.x},${point.y}`;
                        })
                        .join(" ");
        });

        return (
                <>
                        <svg width="100%" height="100%" viewBox="0 0 400 400">
                                <For each={gridLines()}>
                                        {(shape, index) => {
                                                if (shape.type === "polygon") {
                                                        return (
                                                                <polygon
                                                                        points={
                                                                                shape.points
                                                                        }
                                                                        stroke-width={
                                                                                index() +
                                                                                        1 ===
                                                                                radarite()
                                                                                        .metrics
                                                                                        .length
                                                                                        ? "2"
                                                                                        : "1"
                                                                        }
                                                                        style={{
                                                                                stroke: "var(--secondary-color-40)",
                                                                                fill: "var(--secondary-color-15)",
                                                                        }}
                                                                        fill-opacity="0.5"
                                                                />
                                                        );
                                                } else if (
                                                        shape.type === "circle"
                                                ) {
                                                        return (
                                                                <circle
                                                                        cx="200"
                                                                        cy="200"
                                                                        r={
                                                                                shape.radius
                                                                        }
                                                                        stroke-width={
                                                                                index() +
                                                                                        1 ===
                                                                                radarite()
                                                                                        .metrics
                                                                                        .length
                                                                                        ? "2"
                                                                                        : "1"
                                                                        }
                                                                        style={{
                                                                                stroke: "var(--secondary-color-40)",
                                                                                fill: "var(--secondary-color-15)",
                                                                        }}
                                                                        fill-opacity="0.5"
                                                                />
                                                        );
                                                }
                                        }}
                                </For>
                                <For each={axisLines()}>
                                        {(line) => (
                                                <line
                                                        x1={line.x1}
                                                        y1={line.y1}
                                                        x2={line.x2}
                                                        y2={line.y2}
                                                        style={{
                                                                stroke: "var(--secondary-color-40)",
                                                        }}
                                                        stroke-width="2"
                                                />
                                        )}
                                </For>
                                <polygon
                                        points={polygonPoints()}
                                        fill={`${radarite().appearance?.color}73`}
                                        stroke={radarite().appearance?.color}
                                        stroke-width="2"
                                />
                                <Show when={radarite().appearance?.animate}>
                                        <g>
                                                <defs>
                                                        <clipPath
                                                                id="radarClip"
                                                                clipPathUnits="userSpaceOnUse"
                                                        >
                                                                <polygon
                                                                        points={clipPathPoints()}
                                                                        style={{
                                                                                fill: "white",
                                                                        }}
                                                                />
                                                        </clipPath>
                                                        <linearGradient
                                                                id="fadeGradient"
                                                                x1="0%"
                                                                y1="0%"
                                                                x2="0%"
                                                                y2="100%"
                                                        >
                                                                <stop
                                                                        offset="0%"
                                                                        stop-color={
                                                                                radarite()
                                                                                        .appearance
                                                                                        .color
                                                                        }
                                                                        stop-opacity="0.3"
                                                                />
                                                                <stop
                                                                        offset="50%"
                                                                        stop-color={
                                                                                radarite()
                                                                                        .appearance
                                                                                        .color
                                                                        }
                                                                        stop-opacity="0"
                                                                />
                                                        </linearGradient>
                                                        <mask id="halfMask">
                                                                <rect
                                                                        x="0"
                                                                        y="0"
                                                                        width="200"
                                                                        height="400"
                                                                        fill="white"
                                                                />
                                                        </mask>
                                                </defs>
                                                <LineShadow
                                                        radarite={radarite}
                                                />
                                                <g
                                                        clip-path={
                                                                radarite()
                                                                        .appearance
                                                                        .shapeStyle !==
                                                                "circle"
                                                                        ? "url(#radarClip)"
                                                                        : undefined
                                                        }
                                                >
                                                        {(() => {
                                                                const point =
                                                                        calculatePoint(
                                                                                0,
                                                                                100,
                                                                                radarite()
                                                                                        .metrics
                                                                                        .length,
                                                                                radarite()
                                                                                        .appearance
                                                                                        .minimal,
                                                                        );
                                                                return (
                                                                        <>
                                                                                <line
                                                                                        class={
                                                                                                styles[
                                                                                                        "radar-line"
                                                                                                ]
                                                                                        }
                                                                                        x1="200"
                                                                                        y1="200"
                                                                                        x2={
                                                                                                point.x
                                                                                        }
                                                                                        y2={
                                                                                                point.y
                                                                                        }
                                                                                        style={{
                                                                                                stroke: radarite()
                                                                                                        .appearance
                                                                                                        ?.color,
                                                                                                "stroke-width":
                                                                                                        "2",
                                                                                                filter: `drop-shadow(-4px 0px 15px ${radarite().appearance?.color})`,
                                                                                        }}
                                                                                />
                                                                                <circle
                                                                                        class={
                                                                                                styles[
                                                                                                        "radar-line"
                                                                                                ]
                                                                                        }
                                                                                        cx="200"
                                                                                        cy="200"
                                                                                        r={
                                                                                                radarite()
                                                                                                        .appearance
                                                                                                        .minimal
                                                                                                        ? 190
                                                                                                        : 150
                                                                                        }
                                                                                        fill="url(#fadeGradient)"
                                                                                        mask="url(#halfMask)"
                                                                                />
                                                                        </>
                                                                );
                                                        })()}
                                                </g>
                                        </g>
                                </Show>
                        </svg>
                </>
        );
}

type LineShadowProps = {
        radarite: Accessor<RadariteData>;
};

// nightmare to get this effect to work, still sht.
const LineShadow = ({ radarite }: LineShadowProps) => (
        <defs>
                <filter
                        id="line-shadow"
                        width="700%"
                        height="700%"
                        filterUnits="userSpaceOnUse"
                >
                        <feFlood
                                flood-opacity="1"
                                result="floodFill"
                                flood-color={radarite().appearance.color}
                        />
                        <feComposite
                                in="floodFill"
                                in2="SourceAlpha"
                                operator="in"
                                result="coloredAlpha"
                        />
                        <feGaussianBlur
                                in="coloredAlpha"
                                stdDeviation="10"
                                result="blur"
                        />
                        <feComponentTransfer in="blur" result="boostedGlow">
                                <feFuncA
                                        type="linear"
                                        slope="3"
                                        intercept="0"
                                />
                        </feComponentTransfer>
                        <feMerge>
                                <feMergeNode in="boostedGlow" />
                                <feMergeNode in="SourceGraphic" />
                        </feMerge>
                </filter>
        </defs>
);

