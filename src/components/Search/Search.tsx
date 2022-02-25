import { useCallback, useEffect, useState } from "react";

import { FilterForm } from "../FilterForm";
import { MetricsList } from "../MetricsList";
import { PieChart } from "../PieChart";
import { ToggleColumns } from "../ToggleColumns";
import * as S from "./Search.styles";

type Values = {
  valueFrom: number | string;
  valueTo: number | string;
};

export type DataContent = {
  id: string;
  label: string;
  value: number;
  type: string;
  description: string;
  category: string;
};

interface DataProps {
  data: DataContent[];
}

export type CategoriesData = {
  category: string;
  data: DataContent[];
};

export const Search = ({ data }: DataProps): JSX.Element => {
  /*States */
  const [valueData, setValueData] = useState<Values>({
    valueFrom: "",
    valueTo: "",
  });

  const [expanded, setExpanded] = useState<number | null>(null);

  const [columns, setColumns] = useState({
    id: true,
    label: true,
    value: true,
    type: true,
    description: true,
    category: true,
  });

  const [dataFromCategories, setDataFromCategories] = useState<
    CategoriesData[]
  >([]);

  const [disabled, setDisabled] = useState<boolean>(false);

  const [displayedMetrics, setDisplayedMetrics] = useState<DataContent[]>(data);

  /*Effects */
  useEffect(() => {
    if (valueData.valueTo !== 0 && valueData.valueTo !== "") {
      setDisabled(false);
    } else {
      setDisplayedMetrics(data);
      setDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueData]);

  useEffect(() => {
    if (displayedMetrics.length) {
      const categoriesArray: string[] = [];
      data.map(({ category }) => {
        if (!categoriesArray.includes(category)) categoriesArray.push(category);
      });

      const categoriesData = [];
      for (let i = 0; i < categoriesArray.length; i++) {
        categoriesData.push({
          category: categoriesArray[i],
          data: displayedMetrics.filter(
            ({ category }) => category === categoriesArray[i]
          ),
        });
      }
      setDataFromCategories(categoriesData);
    }
  }, [data, displayedMetrics]);

  /*Functions */
  const onValueInputChange = useCallback(
    (name: string, value: number | string) => {
      setValueData({
        ...valueData,
        [name]: value,
      });
    },
    [valueData]
  );

  const handleSubmit = useCallback((ev: React.FormEvent) => {
    ev.preventDefault();
  }, []);

  const onCheckboxClick = useCallback(
    (name: string, checked: boolean) => {
      setColumns({
        ...columns,
        [name]: checked,
      });
    },
    [columns]
  );

  const toggleAccordion = useCallback(
    (index: number) => {
      if (expanded === index) return setExpanded(null);
      return setExpanded(index);
    },
    [expanded]
  );

  const filterMetrics = () => {
    const metrics = data.filter((item: DataContent) => {
      return (
        item.value >= valueData.valueFrom && item.value <= valueData.valueTo
      );
    });
    setDisplayedMetrics(metrics);
  };

  return (
    <S.Container>
      <S.WrapperTop>
        <FilterForm
          valueFrom={valueData?.valueFrom}
          valueTo={valueData.valueTo}
          filterMetrics={filterMetrics}
          handleSubmit={handleSubmit}
          disabled={disabled}
          onValueInputChange={onValueInputChange}
        />
        <ToggleColumns columns={columns} onCheckboxClick={onCheckboxClick} />
      </S.WrapperTop>
      <S.WrapperBottom>
        <MetricsList
          metrics={displayedMetrics}
          columns={columns}
          expanded={expanded}
          toggleAccordion={toggleAccordion}
        />
        <S.GraphContainer>
          <PieChart metrics={dataFromCategories} />
        </S.GraphContainer>
      </S.WrapperBottom>
    </S.Container>
  );
};

export default Search;
