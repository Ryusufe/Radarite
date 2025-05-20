import MetricsEditor from "@components/radar/MetricsEditor";
import { RadariteManager } from "@lib/managers/RadariteManager";
import { MetricData } from "@type/MetricData";
import { RadariteData } from "@type/RadariteData";
import { DataBase, HollowEvent, ToolOptions } from "hollow-api";
import { Accessor, Setter } from "solid-js";

type settingsProps = {
        cardName: string;
        db: DataBase;
        app: HollowEvent;
        radarite: Accessor<RadariteData>;
        setRadarite: Setter<RadariteData>;
        manager: Accessor<RadariteManager>;
};
export default function settings({
        cardName,
        db,
        app,
        radarite,
        setRadarite,
        manager,
}: settingsProps) {
        const settings: ToolOptions = {
                tool: "Radarite",
                card: cardName,
                save: () => {
                        db.putData(cardName, radarite());
                },
                options: [
                        {
                                type: "color",
                                label: "Accent Color",
                                description: "Change The Radar's Accent Color",
                                value: radarite().appearance?.color,
                                onChange: (c: string) =>
                                        setRadarite((prev) => ({
                                                ...prev,
                                                appearance: {
                                                        ...prev.appearance,
                                                        color: c,
                                                },
                                        })),
                        },
                        {
                                type: "dropdown",
                                label: "Shape",
                                description:
                                        "This defines how the main metric shape",
                                value: radarite().appearance?.shapeStyle,
                                options: ["polygon", "circle"],
                                onChange: (v: "circle" | "polygon") =>
                                        setRadarite((prev) => ({
                                                ...prev,
                                                appearance: {
                                                        ...prev.appearance,
                                                        shapeStyle: v,
                                                },
                                        })),
                        },
                        {
                                type: "boolean",
                                label: "Minimal",
                                description: "Display with minimal text.",
                                value: radarite().appearance?.minimal,
                                onChange: (v: boolean) => {
                                        setRadarite((prev) => ({
                                                ...prev,
                                                appearance: {
                                                        ...prev.appearance,
                                                        minimal: v,
                                                },
                                        }));
                                },
                        },
                        {
                                type: "boolean",
                                label: "Animation",
                                description: "Display with animation.",
                                value: radarite().appearance?.animate,
                                onChange: (v: boolean) => {
                                        setRadarite((prev) => ({
                                                ...prev,
                                                appearance: {
                                                        ...prev.appearance,
                                                        animate: v,
                                                },
                                        }));
                                },
                        },
                        {
                                type: "custom",
                                render: () =>
                                        MetricsEditor(
                                                app,
                                                radarite().metrics,
                                                (metx: MetricData[]) => {
                                                        setRadarite((prev) => ({
                                                                ...prev,
                                                                metrics: metx,
                                                        }));
                                                },
                                                manager(),
                                        ),
                        },
                ],
        };
        app.emit("tool-settings", settings);
}
