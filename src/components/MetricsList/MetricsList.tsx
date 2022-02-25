import { Fragment } from "react";

import { DataContent } from "../Search";
import * as S from "./MetricsList.styles";

interface MetricsProps {
  metrics: DataContent[];
  columns: {
    id: boolean;
    label: boolean;
    value: boolean;
    type: boolean;
    description: boolean;
    category: boolean;
  };
  expanded: number | null;
  toggleAccordion: (index: number) => void;
}

export const MetricsList = ({
  metrics,
  columns,
  expanded,
  toggleAccordion,
}: MetricsProps): JSX.Element => {
  return (
    <S.Container>
      <header>
        <strong>Metrics Table ({`${metrics?.length} metrics`})</strong>
      </header>
      <table>
        <thead>
          <tr>
            {columns.id && <th>ID</th>}
            {columns.label && <th>Label</th>}
            {columns.type && <th>Type</th>}
            {columns.value && <th>Value</th>}
            {columns.category && <th>Category</th>}
          </tr>
        </thead>
        <tbody>
          {metrics.map(
            ({ id, label, description, type, category, value }, index) => (
              <Fragment key={id}>
                <tr onClick={() => toggleAccordion(index)}>
                  {columns.id && <td>{id}</td>}
                  {columns.label && <td>{label}</td>}
                  {columns.type && <td>{type}</td>}
                  {columns.value && <td>{value}</td>}
                  {columns.category && <td>{category}</td>}
                </tr>
                {expanded === index && columns.description && (
                  <S.Content>
                    <td>
                      <strong>Description:</strong> {description}
                    </td>
                  </S.Content>
                )}
              </Fragment>
            )
          )}
        </tbody>
      </table>
    </S.Container>
  );
};
