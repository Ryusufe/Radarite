import { HollowEvent } from "hollow-api";
import { createSignal, For, Show } from "solid-js";
import { RadariteManager } from "@lib/managers/RadariteManager";
import { MetricData } from "@type/MetricData";
import { MetricSubmissionData } from "@type/MetricSubmissionData";
import forms from "@hollow/forms";

export default function MetricsEditor(
        app: HollowEvent,
        metrix: MetricData[],
        save: (m: MetricData[]) => void,
        manager: RadariteManager,
) {
        const [metrics, setMetrics] = createSignal<MetricData[]>(metrix);
        const addMetric = (metric: MetricSubmissionData) => {
                const { tag, tool, card, ...miniMetric } = metric;
                const mtrc = {
                        ...miniMetric,
                        filter: { tags: tag, tools: tool, cards: card },
                };
                manager.modifyMetric(mtrc);
                setMetrics([...manager.metrics]);
                save(metrics());
        };
        const removeMetric = (id: string) => {
                setMetrics((prev) => [...prev.filter((i) => i.id !== id)]);
                manager.removeMetric(id);
        };

        const showForm = (id?: string) => {
                forms({ id, app, metrics, addMetric });
        };
        return (
                <div class="flex w-full flex-col gap-5">
                        <div class="flex w-full justify-between">
                                <h1 class="text-lg font-bold">
                                        Metrics Manager
                                </h1>
                                <button
                                        class="button-secondary"
                                        onclick={() => showForm()}
                                >
                                        Add Metric
                                </button>
                        </div>
                        <div>
                                <Show
                                        when={metrics().length !== 0}
                                        fallback={
                                                <div class="bg-secondary-10 w-full rounded-lg py-4">
                                                        <p class="text-secondary-40 m-auto w-fit">
                                                                No metrics
                                                                defined. Click
                                                                "Add Metric" to
                                                                create your
                                                                first metric.
                                                        </p>
                                                </div>
                                        }
                                >
                                        <div
                                                class="bg-secondary-10 w-full gap-5 rounded-lg p-4"
                                                style={{
                                                        display: "grid",
                                                        "grid-template-columns":
                                                                "1fr 1fr 1fr",
                                                }}
                                        >
                                                <For each={metrics()}>
                                                        {(metric) => (
                                                                <div class="bg-secondary-05 border-1 border-secondary-20 rounded p-5">
                                                                        <div class="flex justify-between">
                                                                                <h3 class="text-xl font-bold">
                                                                                        {
                                                                                                metric.label
                                                                                        }
                                                                                </h3>
                                                                                <div class="flex gap-1">
                                                                                        <button
                                                                                                class="button-control"
                                                                                                onclick={() =>
                                                                                                        showForm(
                                                                                                                metric.id,
                                                                                                        )
                                                                                                }
                                                                                        >
                                                                                                <svg
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        width="24"
                                                                                                        height="24"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        fill="none"
                                                                                                        stroke="currentColor"
                                                                                                        stroke-width="2"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"
                                                                                                        class="lucide lucide-square-pen m-auto h-4 w-4"
                                                                                                >
                                                                                                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                                                                        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                                                                                                </svg>
                                                                                        </button>
                                                                                        <button
                                                                                                class="button-control"
                                                                                                onclick={() =>
                                                                                                        removeMetric(
                                                                                                                metric.id,
                                                                                                        )
                                                                                                }
                                                                                        >
                                                                                                <svg
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        width="24"
                                                                                                        height="24"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        fill="none"
                                                                                                        stroke="currentColor"
                                                                                                        stroke-width="2"
                                                                                                        stroke-linecap="round"
                                                                                                        stroke-linejoin="round"
                                                                                                        class="lucide lucide-trash2 m-auto h-4 w-4"
                                                                                                >
                                                                                                        <path d="M3 6h18"></path>
                                                                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                                                                                        <line
                                                                                                                x1="10"
                                                                                                                x2="10"
                                                                                                                y1="11"
                                                                                                                y2="17"
                                                                                                        ></line>
                                                                                                        <line
                                                                                                                x1="14"
                                                                                                                x2="14"
                                                                                                                y1="11"
                                                                                                                y2="17"
                                                                                                        ></line>
                                                                                                </svg>
                                                                                        </button>
                                                                                </div>
                                                                        </div>
                                                                        <div class="mt-3 flex flex-wrap gap-1">
                                                                                <span
                                                                                        class="text-secondary px-1 text-xs font-semibold"
                                                                                        style={{
                                                                                                background: "var(--primary-color)",
                                                                                        }}
                                                                                >
                                                                                        {
                                                                                                metric.computeMethod
                                                                                        }
                                                                                </span>
                                                                                <Show
                                                                                        when={
                                                                                                metric.metaKey
                                                                                        }
                                                                                >
                                                                                        <span
                                                                                                class="text-secondary-90 px-1 text-xs font-semibold"
                                                                                                style={{
                                                                                                        background: "var(--secondary-color-20)",
                                                                                                }}
                                                                                        >
                                                                                                {
                                                                                                        metric.metaKey
                                                                                                }
                                                                                        </span>
                                                                                </Show>
                                                                                <span
                                                                                        class="text-secondary-90 px-1 text-xs font-semibold"
                                                                                        style={{
                                                                                                background: "var(--secondary-color-20)",
                                                                                        }}
                                                                                >
                                                                                        {
                                                                                                "Max: "
                                                                                        }
                                                                                        {
                                                                                                metric.max
                                                                                        }
                                                                                </span>
                                                                                <Show
                                                                                        when={
                                                                                                metric
                                                                                                        .filter
                                                                                                        ?.tools
                                                                                        }
                                                                                >
                                                                                        <span
                                                                                                class="text-secondary-90 px-1 text-xs font-semibold"
                                                                                                style={{
                                                                                                        background: "var(--secondary-color-20)",
                                                                                                }}
                                                                                        >
                                                                                                {
                                                                                                        "Tool: "
                                                                                                }
                                                                                                {
                                                                                                        metric
                                                                                                                .filter
                                                                                                                ?.tools
                                                                                                }
                                                                                        </span>
                                                                                </Show>
                                                                                <Show
                                                                                        when={
                                                                                                metric
                                                                                                        .filter
                                                                                                        ?.tags
                                                                                        }
                                                                                >
                                                                                        <span
                                                                                                class="text-secondary-90 px-1 text-xs font-semibold"
                                                                                                style={{
                                                                                                        background: "var(--secondary-color-20)",
                                                                                                }}
                                                                                        >
                                                                                                {
                                                                                                        "Tag: "
                                                                                                }{" "}
                                                                                                {
                                                                                                        metric
                                                                                                                .filter
                                                                                                                ?.tags
                                                                                                }
                                                                                        </span>
                                                                                </Show>
                                                                        </div>
                                                                        <p class="text-secondary-40 mt-2 text-xs">
                                                                                {
                                                                                        metric.description
                                                                                }
                                                                        </p>
                                                                </div>
                                                        )}
                                                </For>
                                        </div>
                                </Show>
                        </div>
                </div>
        );
}
