import { MetricData } from "@type/MetricData";
export type RadariteData = {
        /**
         * the list of selected data sources to visualize.
         * Each item maps to a "head" or axis on the radar chart.
         */
        metrics: MetricData[];

        /**
         * Visual appearance settings.
         */
        appearance: {
                /**
                 * this is not used yet.
                 */
                showGrid?: boolean;

                /**
                 * The shape style of the radar chart.
                 */
                shapeStyle: "circle" | "polygon";

                /**
                 * The accent colot.
                 */
                color: string;

                /**
                 * Whether to animate the radar chart, the rotating line visibility.
                 */
                animate: boolean;

                /**
                 * Whether to show the labels or hide them for a cleaner look, you can still see them if you hover over the dots to show the panel.
                 */
                minimal: boolean;
        };

        /**
         * how often to update data (in ms), currently no used but it will someday.
         */
        refreshRate?: number;
};
