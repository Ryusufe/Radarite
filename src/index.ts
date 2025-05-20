import { DataBase, HollowEvent, ICard, IPlugin } from "hollow-api";
import { createRoot } from "solid-js";
import { render } from "solid-js/web";
import Radarite from "@features/radarite/Radarite";
import { RadariteData } from "./types/RadariteData";

export default class RadariteMain implements IPlugin {
        private db: DataBase;
        private roots: Map<string, () => void> = new Map();

        constructor(db: DataBase) {
                this.db = db;
        }

        async onCreate(name: string): Promise<boolean> {
                const iniRadariteData: RadariteData = {
                        metrics: [
                                {
                                        id: "notes-count",
                                        label: "Notes",
                                        description:
                                                "Counts the number of notes from the notebook tool.",
                                        filter: { tools: ["notebook"] },
                                        computeMethod: "count",
                                        max: 5,
                                },
                                {
                                        id: "tags-count",
                                        label: "Tags Used",
                                        description:
                                                "Counts the number of tags used",
                                        filter: {},
                                        computeMethod: "sum",
                                        metaKey: "tags",
                                        max: 10,
                                },
                                {
                                        id: "tasks-completed",
                                        label: "Tasks Done",
                                        description:
                                                "Counts the number of tasks done.",
                                        filter: {
                                                tools: ["kanban"],
                                                cards: ["done"],
                                        },
                                        computeMethod: "count",
                                        max: 10,
                                },
                        ],
                        appearance: {
                                showGrid: true,
                                shapeStyle: "polygon",
                                color: "#4A90E2",
                                animate: true,
                                minimal: false,
                        },
                };

                this.db.putData(name, iniRadariteData);
                return true;
        }

        async onDelete(name: string): Promise<boolean> {
                this.db.deleteData(name);
                return true;
        }

        async onLoad(card: ICard, app: HollowEvent): Promise<boolean> {
                const targetContainer = document.getElementById(
                        card.containerID,
                );
                const data: RadariteData | undefined = await this.db.getData(
                        card.name,
                );
                if (targetContainer && !this.roots.has(card.name) && data) {
                        const dispose = createRoot((dispose) => {
                                render(
                                        () =>
                                                Radarite({
                                                        card,
                                                        app,
                                                        db: this.db,
                                                        data,
                                                }),
                                        targetContainer,
                                );
                                return dispose;
                        });

                        this.roots.set(card.name, dispose);
                }

                return true;
        }

        onUnload(name: string): void {
                const dispose = this.roots.get(name);
                if (dispose) {
                        dispose();
                        this.roots.delete(name);
                }
        }
}
