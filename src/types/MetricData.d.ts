export type MetricData = {
        /**
         * A unique identifier for this metric.
         */
        id: string;

        /**
         * Human-readable name to display on the radar chart.
         */
        label: string;

        /**
         * A small desciption of this tool.
         */
        description?: string;

        /**
         * Optional tag or filter to narrow the data being measured.
         */
        filter: {
                tags?: string[];
                tools?: string[];
                cards?: string[];
        };

        /**
         * How to calculate the value: count, sum of meta fields, etc.
         */
        computeMethod?: "count" | "sum" | "average";

        /**
         * If using 'sum' or 'average', the meta field to pull values from.
         */
        metaKey?: string;

        /**
         * max value for this metric.
         */
        max: number;

        /**
         * value out of max, value <= max
         */
        value?: number;

        /*
         * the product of ( value * 100 ) / max
         */
        percentage?: number;
};
