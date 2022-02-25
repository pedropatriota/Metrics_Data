import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { ToggleColumns } from ".";

const columns = {
  label: true,
  value: true,
  type: true,
  description: true,
  category: true,
};

describe("Snapshot test", () => {
  it("Should  represent the component", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const toggleColumns = render(
      <ToggleColumns
        columns={columns}
        onCheckboxClick={() => console.log("clicked")}
      />
    );

    expect(toggleColumns).toMatchSnapshot();
  });
});
