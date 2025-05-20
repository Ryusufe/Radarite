import { MetricData } from "@type/MetricData";
import { MetricSubmissionData } from "@type/MetricSubmissionData";
import { FormType, HollowEvent } from "hollow-api";
import { Accessor } from "solid-js";

type formsProps = {
        id?: string;
        app: HollowEvent;
        metrics: Accessor<MetricData[]>;
        addMetric: (metric: MetricSubmissionData) => void;
};
export default function forms({ id, app, metrics, addMetric }: formsProps) {
        const target = id && metrics().find((i) => i.id === id);
        const form: FormType = {
                id: id ?? crypto.randomUUID(),
                title: id ? "Update Metric" : "Add Metric",
                submit: addMetric,
                update: !!id,
                options: [
                        {
                                type: "text",
                                placeholder: "e.g., Tasks Completed",
                                label: "Label",
                                key: "label",
                                value: target && target.label,
                        },
                        {
                                type: "longtext",
                                placeholder: "e.g., Number of completed tasks",
                                label: "Description",
                                key: "description",
                                value: target && target.description,
                        },

                        {
                                type: "dropdown",
                                options: ["count", "sum", "average"],
                                label: "Compute Method",
                                description:
                                        "Compute method is how each metric decides its value, by counting entries, adding up numbers, averaging them.",
                                key: "computeMethod",
                                value: target && target.computeMethod,
                        },
                        {
                                type: "text",
                                label: "Meta Key",
                                placeholder: "e.g., duration, points",
                                description:
                                        "metaKey is used only when the compute method is set to sum or average, and it tells which field inside entry.meta holds the number to calculate with.",
                                key: "metaKey",
                                dependsOn: {
                                        key: "computeMethod",
                                        conditions: ["sum", "average"],
                                },
                                value: target && target.metaKey,
                        },
                        {
                                type: "number",
                                label: "Max Value",
                                min: 0,
                                max: 99999,
                                description:
                                        "defines the maximum possible value on this metric.",
                                key: "max",
                                value: target && target.max,
                        },
                        {
                                type: "keywords",
                                placeholder: "e.g., notebook",
                                description:
                                        "Filter entries to include certain tools.",
                                label: "Tools",
                                key: "tool",
                                optional: true,
                                value: target && target.filter?.tools,
                        },
                        {
                                type: "keywords",
                                placeholder: "e.g., cardOne",
                                description:
                                        "Filter entries to include certain cards.",
                                label: "Cards",
                                key: "card",
                                optional: true,
                                value: target && target.filter?.cards,
                        },
                        {
                                type: "keywords",
                                placeholder: "e.g., nature",
                                description:
                                        "Filter entries to include certain tags.",
                                label: "Tags",
                                key: "tag",
                                optional: true,
                                value: target && target.filter?.tags,
                        },
                ],
        };
        app.emit("Form", form);
}
