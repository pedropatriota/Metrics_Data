import { render } from "@testing-library/react";

import { FilterForm } from ".";

describe("Snapshot test", () => {
  it("Should  represent the component", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const filterForm = render(
      <FilterForm
        valueFrom={0}
        valueTo={10}
        filterMetrics={() => console.log("filtered")}
        handleSubmit={() => console.log(`submit`)}
        disabled={false}
        onValueInputChange={() => console.log(`' onChange`)}
      />
    );

    expect(filterForm).toMatchSnapshot();
  });
});
