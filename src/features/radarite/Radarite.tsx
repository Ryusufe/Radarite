import styles from "@styles/components/radar/Radarite.module.css";
import { DataBase, HollowEvent, ICard, EntryData } from "hollow-api";
import { RadariteData } from "@type/RadariteData";
import { calculatePoint } from "@lib/calculations/calculatePoint";
import {
    createMemo,
    createSignal,
    For,
    onCleanup,
    onMount,
    Show,
} from "solid-js";
import { RadariteManager } from "@lib/managers/RadariteManager";
import settings from "@hollow/settings";
import Panel from "@components/radar/Panel";
import { MetricData } from "@type/MetricData";
import Shape from "@components/radar/Shape";

type RadariteProps = {
    card: ICard;
    app: HollowEvent;
    db: DataBase;
    data: RadariteData;
};

export default function Radarite({ card, app, db, data }: RadariteProps) {
    const [radarite, setRadarite] = createSignal(data);
    const [selected, setSelected] = createSignal<{
        left: string;
        top: string;
        offSet?: string;
        metric: MetricData;
    } | null>(null);
    
    const manager = createMemo(
        () =>
            new RadariteManager(
                app.getCurrentData("entries") ?? [],
                data.metrics,
                (nObj) => {
                    db.putData(card.name, nObj);
                },
                setRadarite,
            ),
    );

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

    const labelPositions = createMemo(() => {
        return radarite().metrics.map((metric, i) => {
            const point = calculatePoint(
                i,
                105,
                radarite().metrics.length,
                radarite().appearance.minimal,
            );
            return {
                metric: metric,
                x: point.x,
                y: point.y,
            };
        });
    });

    const showSettings = createMemo(() => () => {
        settings({
            cardName: card.name,
            db,
            app,
            radarite,
            setRadarite,
            manager,
        });
    });

    const onReceiveEntry = createMemo(() => (e: EntryData | undefined) => {
        manager().receiveEntry(e);
    });

    const onRemoveEntry = createMemo(() => (id: string | string[] | undefined) => {
        manager().removeEntry(typeof id === "string" ? [id] : id);
    });

    const createDotEnterHandler = createMemo(() => (point: { x: number; y: number; metric: MetricData }) => {
        return (l: string, t: string, offSet: string) => {
            radarite().appearance.minimal &&
                setSelected({
                    left: l,
                    top: t,
                    offSet: offSet,
                    metric: point.metric,
                });
        };
    });

    onMount(() => {
        app.on(`radarite-${card.name}-settings`, showSettings());
        app.on("receive-entry", onReceiveEntry());
        app.on("remove-entry", onRemoveEntry());
    });

    onCleanup(() => {
        app.off(`radarite-${card.name}-settings`, showSettings());
        app.off("receive-entry", onReceiveEntry());
        app.off("remove-entry", onRemoveEntry());
    });

    return (
        <div
            class={`${styles.container} relative flex h-full w-full flex-col items-center justify-center`}
        >
            <div class={styles.shape}>
                <Shape radarite={radarite} />
                <For each={fullPoints()}>
                    {(point) => {
                        const onEnter = createDotEnterHandler()(point);
                        const percentX = (point.x / 400) * 100;
                        const percentY = (point.y / 400) * 100;
                        return (
                            <div
                                class={styles.dotContainer}
                                style={{
                                    left: `${percentX}%`,
                                    top: `${percentY}%`,
                                    transform: "translate(-5px, -5px)",
                                }}
                                onMouseEnter={() => {
                                    onEnter(
                                        `${percentX}%`,
                                        `${percentY}%`,
                                        "translate(8px, 8px)",
                                    );
                                }}
                            >
                                <span class={`relative flex gap-3`}>
                                    <span
                                        class={`${styles["dot-ping"]} absolute inline-flex rounded-full opacity-75`}
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            "background-color": radarite().appearance.color,
                                        }}
                                    />
                                    <span
                                        class="relative inline-flex rounded-full"
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            "background-color": radarite().appearance.color,
                                        }}
                                    />
                                </span>
                            </div>
                        );
                    }}
                </For>
                <Show when={!radarite().appearance?.minimal}>
                    <For each={labelPositions()}>
                        {(pack) => {
                            const percentX = (pack.x / 400) * 100;
                            const percentY = (pack.y / 400) * 100;

                            const translateX =
                                percentX < 50
                                    ? "100%"
                                    : percentX > 50
                                    ? "0%"
                                    : "50%";
                            const translateY =
                                percentY < 50
                                    ? "100%"
                                    : percentY > 50
                                    ? "0%"
                                    : "50%";
                            const onClick = () => {
                                setSelected({
                                    metric: pack.metric,
                                    left: `${percentX}%`,
                                    top: `${percentY}%`,
                                    offSet: `translate(-${translateX}, -${translateY})`,
                                });
                            };
                            return (
                                <h1
                                    class="absolute whitespace-nowrap text-sm font-bold"
                                    style={{
                                        left: `${percentX}%`,
                                        top: `${percentY}%`,
                                        transform: `translate(-${translateX}, -${translateY})`,
                                        color: "var(--secondary-color-70)",
                                    }}
                                    onClick={onClick}
                                >
                                    {pack.metric.label}
                                </h1>
                            );
                        }}
                    </For>
                </Show>
                <Show when={selected()}>
                    {(sel) => (
                        <Panel
                            accent={radarite().appearance?.color}
                            metric={sel().metric}
                            left={sel().left}
                            top={sel().top}
                            offset={sel().offSet}
                            hide={() => setSelected(null)}
                        />
                    )}
                </Show>
            </div>
        </div>
    );
} 