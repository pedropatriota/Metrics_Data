import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { MetricsList } from ".";

const columns = {
  id: true,
  label: true,
  value: true,
  type: true,
  description: true,
  category: true,
};

const metrics = [
  {
    id: "oee",
    label: "oee",
    value: 0.68,
    type: "percentage",
    description: "The overall equipment efficiency in %",
    category: "efficiency",
  },
];

describe("Snapshot test", () => {
  it("Should  represent the component", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const metricsList = render(
      <MetricsList
        columns={columns}
        metrics={metrics}
        expanded={0}
        toggleAccordion={() => console.log("toggled")}
      />
    );

    expect(metricsList).toMatchSnapshot();
  });
});
