import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { Search } from ".";

const data = [
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
    const search = render(<Search data={data} />);

    expect(search).toMatchSnapshot();
  });
});
