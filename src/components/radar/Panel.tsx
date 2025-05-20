import { MetricData } from "@type/MetricData";
import { createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import styles from "@styles/components/radar/Panel.module.css";

type PanelProps = {
        metric: MetricData;
        accent: string;
        left: string;
        top: string;
        offset: string | undefined;
        hide: () => void;
};

export default function Panel({
        metric,
        accent,
        left,
        top,
        offset,
        hide,
}: PanelProps) {
        let panelRef: HTMLDivElement | undefined;
        const [expand, setExpand] = createSignal(false);


        const filterEntries = createMemo(() => 
                Object.entries(metric.filter)
                        .filter((f) => f[1].length > 0)
        );


        const progressStyle = createMemo(() => ({
                background: `linear-gradient(to right, ${accent} ${metric.percentage}%, var(--secondary-color-20) ${Math.min((metric.percentage ?? 0) + 10, 100)}%)`,
                transition: 'background 0.3s ease-in-out'
        }));

        const handleClickOutside = (e: PointerEvent) => {
                if (panelRef && !panelRef.contains(e.target as Node)) {
                        hide();
                }
        };

        onMount(() => {
                document.addEventListener("pointerdown", handleClickOutside);
        });

        onCleanup(() => {
                document.removeEventListener("pointerdown", handleClickOutside);
        });

        return (
                <div
                        ref={panelRef}
                        class={`${styles.panel} panel-transition`}
                        style={{
                                left: left,
                                top: top,
                                transform: offset,
                        
                        }}
                        role="dialog"
                        aria-labelledby="panel-title"
                >
                        <div class="flex flex-col gap-2 p-2">
                                <div class="flex w-full items-center justify-between">
                                        <h1
                                                id="panel-title"
                                                class={`${styles.title} text-lg font-bold`}
                                        >
                                                {metric.label}
                                        </h1>
                                        <button
                                                class="button-control hover:bg-secondary-20 rounded-full p-1 transition-colors"
                                                onclick={() => setExpand(!expand())}
                                                aria-expanded={expand()}
                                                aria-label={expand() ? "Collapse details" : "Expand details"}
                                        >
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class={`${styles.downIcon} transition-transform duration-300`}
                                                        style={{
                                                                transform: expand() ? "rotate(180deg)" : "rotate(0deg)"
                                                        }}
                                                >
                                                        <path d="m6 9 6 6 6-6" />
                                                </svg>
                                        </button>
                                </div>
                                <h3 class={`${styles.des} text-sm text-secondary-70`}>
                                        {metric.description}
                                </h3>

                                <div class="flex items-center justify-between text-sm">
                                        <span class="font-medium" style={{ color: accent }}>
                                                {metric.percentage ?? 0}%
                                        </span>
                                        <span class="text-secondary-70">
                                                {metric.value} / {metric.max}
                                        </span>
                                </div>

                                        <div
                                                class={styles.progressBar}
                                                style={progressStyle()}
                                            
                                        />
         

                                <div 
                                        class="overflow-hidden transition-all duration-300 ease-in-out"
                                        style={{
                                                "max-height": expand() ? '500px' : '0',
                                                opacity: expand() ? '1' : '0'
                                        }}
                                >
                                        <div class="flex flex-col gap-3 pt-2">
                                                <div class={styles.propertyContainer}>
                                                        <div class="flex items-center gap-2">
                                                                <svg
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill={accent}
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        <path d="M7 12.75V11.25H9.38563L10.7931 6.00266C10.797 5.98811 10.8013 5.97377 10.806 5.95965L10.8102 5.94389L10.8146 5.92986C11.1634 4.81245 12.2058 4 13.44 4C14.9588 4 16.19 5.23122 16.19 6.75C16.19 6.91899 16.1747 7.08506 16.1451 7.24669L16.1396 7.2767L15.8408 8.39079L14.392 8.0022L14.6741 6.9505C14.6845 6.88564 14.69 6.81871 14.69 6.75C14.69 6.05964 14.1304 5.5 13.44 5.5C12.8852 5.5 12.413 5.86199 12.2504 6.36445L10.9394 11.25H12V12.75H10.5368L9.48551 16.6678L9.48495 16.6699L9.41212 16.9414C9.4089 16.9535 9.4054 16.9653 9.40164 16.977L9.38363 17.0435L9.38013 17.0549C9.03607 18.1802 7.98975 19 6.75 19C5.23122 19 4 17.7688 4 16.25C4 15.8992 4.08642 15.5956 4.14978 15.373L4.16503 15.3192L4.30629 14.7925L4.38192 14.5349L5.8212 14.9573L5.75052 15.1981L5.6104 15.7206C5.53143 16.0018 5.5 16.1153 5.5 16.25C5.5 16.9404 6.05964 17.5 6.75 17.5C7.30821 17.5 7.78276 17.1335 7.94256 16.6264L8.03671 16.2792L8.03726 16.2772L8.98331 12.75H7Z" />
                                                                </svg>
                                                                <h2
                                                                        class="text-sm font-medium"
                                                                        style={{ color: accent }}
                                                                >
                                                                        Compute Method
                                                                </h2>
                                                        </div>
                                                        <div class="flex items-center gap-2">
                                                                <span class={styles.propertyValue}>
                                                                        {metric.computeMethod}
                                                                </span>
                                                                <Show when={metric.computeMethod !== "count"}>
                                                                        <span
                                                                                class="rounded px-2 py-1 text-xs font-medium"
                                                                                style={{
                                                                                        background: `${accent}20`,
                                                                                        color: accent
                                                                                }}
                                                                        >
                                                                                {metric.metaKey?.toUpperCase()}
                                                                        </span>
                                                                </Show>
                                                        </div>
                                                </div>

                                                <Show when={filterEntries().some((f) => f[1].length > 0)}>
                                                        <hr class={styles.divider} />
                                                        <div class="flex flex-col gap-2">
                                                                <For each={filterEntries()}>
                                                                        {(list) => (
                                                                                <div class="flex items-center gap-2">
                                                                                        {(() => {
                                                                                                switch (list[0]) {
                                                                                                        case "tools":
                                                                                                                return toolSvg;
                                                                                                        case "cards":
                                                                                                                return cardSvg;
                                                                                                        case "tags":
                                                                                                                return tagSvg;
                                                                                                }
                                                                                        })()}
                                                                                        <h3
                                                                                                class="truncate text-sm text-secondary-70"
                                                                                                title={list[1].join(", ")}
                                                                                        >
                                                                                                {list[1].join(", ")}
                                                                                        </h3>
                                                                                </div>
                                                                        )}
                                                                </For>
                                                        </div>
                                                </Show>

                                                <hr class={styles.divider} />
                                                <span class="text-xs text-secondary-50">
                                                        ID: {metric.id}
                                                </span>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

const toolSvg = (
        <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--secondary-color-70)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
        >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
);

const cardSvg = (
        <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--secondary-color-70)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
        >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <path d="M3 9h18" />
        </svg>
);

const tagSvg = (
        <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--secondary-color-70)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
        >
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                <path d="M7 7h.01" />
        </svg>
);
