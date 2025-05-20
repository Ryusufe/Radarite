import { EntryData } from "hollow-api";
import { Setter } from "solid-js";
import { MetricData } from "@type/MetricData";
import { RadariteData } from "@type/RadariteData";

export class RadariteManager {
        private entries: Map<string, EntryData>;
        public metrics: MetricData[];
        private save: (nObj: RadariteData) => void;
        private setRadarite: Setter<RadariteData>;

        constructor(
                initialEntries: EntryData[],
                metrics: MetricData[],
                save: (nObj: RadariteData) => void,
                setRadarite: Setter<RadariteData>,
        ) {
                this.entries = new Map(initialEntries.map((e) => [e.id, e]));
                this.metrics = metrics;
                this.save = save;
                this.setRadarite = setRadarite;
                this.computeAll();
        }

        private computeAll() {
                let u = false;
                this.metrics.forEach((metric) => {
                        if (metric.value === undefined) {
                                u = true;
                                metric.value = this.computeMetric(metric);
                                metric.percentage = this.valueInPercentage(
                                        metric.value,
                                        metric.max,
                                );
                        }
                });
                u && this.update();
        }
        private valueInPercentage(
                value: number | undefined,
                max: number,
        ): number | undefined {
                if (!value) {
                        return value;
                }
                return Math.min((value / max) * 100, 100);
        }

        private addEntry(entry: EntryData): void {
                this.entries.set(entry.id, entry);
                this.updateMetricsForEntry([entry]);
        }

        public removeEntry(ids: string[] | undefined): void {
                if (ids) {
                        const targetEntries: EntryData[] = [];
                        ids.forEach((id) => {
                                const entry = this.entries.get(id);
                                if (!entry) return;
                                this.entries.delete(id);
                                targetEntries.push(entry);
                        });
                        this.updateMetricsForEntry(targetEntries);
                }
        }

        private updateEntry(entry: EntryData): void {
                this.entries.set(entry.id, entry);
                this.updateMetricsForEntry([entry]);
        }
        public receiveEntry(entry: EntryData | undefined) {
                if (entry) {
                        if (this.entries.get(entry.id)) {
                                this.updateEntry(entry);
                        } else {
                                this.addEntry(entry);
                        }
                }
        }

        private updateMetricsForEntry(entries: EntryData[]): void {
                entries.forEach((entry) => {
                        for (const metric of this.getAffectedMetrics(entry)) {
                                const value = this.computeMetric(metric);
                                const percentage = this.valueInPercentage(
                                        value,
                                        metric.max,
                                );
                                const target = this.metrics.find(
                                        (i) => i.id === metric.id,
                                );
                                target!!.value = value;
                                target!!.percentage = percentage;
                        }
                });
                this.update();
        }

        private getAffectedMetrics(entry: EntryData): MetricData[] {
                return this.metrics.filter((metric) => {
                        const { filter } = metric;
                        if (!filter) return true;
                        const matchTags =
                                !filter.tags ||
                                filter.tags.some((tag) =>
                                        entry.tags?.includes(tag),
                                );
                        const matchTools =
                                !filter.tools ||
                                filter.tools.includes(entry.source.tool);
                        const matchCards =
                                !filter.cards ||
                                filter.cards.includes(entry.source.card);
                        return matchTags && matchTools && matchCards;
                });
        }

        private computeMetric(metric: MetricData): number | undefined {
                const relevantEntries = [...this.entries.values()].filter(
                        (entry) => {
                                const { filter } = metric;
                                if (!filter) return true;
                                const tagMatch =
                                        !filter.tags ||
                                        filter.tags.some((t) =>
                                                entry.tags?.includes(t),
                                        );
                                const toolMatch =
                                        !filter.tools ||
                                        filter.tools.includes(
                                                entry.source.tool,
                                        );
                                const cardMatch =
                                        !filter.cards ||
                                        filter.cards.includes(
                                                entry.source.card,
                                        );
                                return tagMatch && toolMatch && cardMatch;
                        },
                );
                if (relevantEntries.length === 0) {
                        return undefined;
                }

                switch (metric.computeMethod) {
                        case "count":
                                return relevantEntries.length;

                        case "sum":
                                return relevantEntries.reduce(
                                        (
                                                acc: number,
                                                entry: Record<string, any>,
                                        ) => {
                                                const flattenedEntry =
                                                        this.flattenObject(
                                                                entry,
                                                        );
                                                const raw =
                                                        flattenedEntry[
                                                                metric.metaKey ??
                                                                        ""
                                                        ];
                                                // Consider : instead of counting the length which doesn't make sense
                                                // adding options indicating what to do with the list, something like meta but for meta it self.....
                                                // not really ideal but it's a start.
                                                if (Array.isArray(raw)) {
                                                        return acc + raw.length;
                                                } else if (
                                                        typeof raw === "boolean"
                                                ) {
                                                        return (
                                                                acc +
                                                                (raw ? 1 : 0)
                                                        );
                                                } else {
                                                        const val = Number(raw);
                                                        return (
                                                                acc +
                                                                (isNaN(val)
                                                                        ? 0
                                                                        : val)
                                                        );
                                                }
                                        },
                                        0,
                                );
                        case "average":
                                let total = 0;
                                let count = 0;

                                relevantEntries.forEach(
                                        (entry: Record<string, any>) => {
                                                const flattenedEntry =
                                                        this.flattenObject(
                                                                entry,
                                                        );
                                                const raw =
                                                        flattenedEntry[
                                                                metric.metaKey ??
                                                                        ""
                                                        ];

                                                if (Array.isArray(raw)) {
                                                        total += raw.length;
                                                        count++;
                                                } else if (
                                                        typeof raw === "boolean"
                                                ) {
                                                        total += raw ? 1 : 0;
                                                        count++;
                                                } else {
                                                        const val = Number(raw);
                                                        if (!isNaN(val)) {
                                                                total += val;
                                                                count++;
                                                        }
                                                }
                                        },
                                );
                                return count ? total / count : 0;
                        default:
                                return 0;
                }
        }
        private flattenObject(obj: Record<string, any>): Record<string, any> {
                const result: Record<string, any> = {};

                function recurse(current: any, prop: string): void {
                        if (
                                Object(current) !== current ||
                                Array.isArray(current)
                        ) {
                                result[prop] = current;
                        } else {
                                for (const p in current) {
                                        if (
                                                Object.prototype.hasOwnProperty.call(
                                                        current,
                                                        p,
                                                )
                                        ) {
                                                recurse(
                                                        current[p],
                                                        prop
                                                                ? prop + "." + p
                                                                : p,
                                                );
                                                result[p] = current[p];
                                        }
                                }
                        }
                }

                recurse(obj, "");
                return result;
        }
        public removeMetric(id: string) {
                this.metrics = this.metrics.filter((m) => m.id !== id);
                this.update();
        }

        public modifyMetric(metric: MetricData) {
                const index = this.metrics.findIndex((m) => m.id === metric.id);
                metric.value = this.computeMetric(metric);
                metric.percentage = this.valueInPercentage(
                        metric.value,
                        metric.max,
                );

                if (index !== -1) {
                        this.metrics[index] = metric;
                } else {
                        this.metrics.push(metric);
                }
                this.update();
        }
        private update() {
                this.setRadarite((prev) => {
                        const nObj = {
                                ...prev,
                                metrics: [...this.metrics],
                        };
                        this.save(nObj);
                        return nObj;
                });
        }
}
