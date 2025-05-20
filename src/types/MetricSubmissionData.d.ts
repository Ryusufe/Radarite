export type MetricSubmissionData = {
        /**
         * The unique identifier which is the same as the metric id.
         */
        id: string;

        /**
         * The human-readable name to display on the radar chart.
         */
        label: string;

        /**
         * The method used to compute the metric.
         */
        computedMethod: string;

        /**
         * The meta key to use for the metric.
         */
        metaKey?: string;

        /**
         * The maximum value for the metric.
         */
        max: number;

        /**
         * Filtering options.
         */
        tag?: string[];
        tool?: string[];
        card?: string[];
};
