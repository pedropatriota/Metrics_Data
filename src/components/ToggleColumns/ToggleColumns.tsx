import * as S from "./ToggleColumns.styles";

type Columns = {
  label: boolean;
  value: boolean;
  type: boolean;
  description: boolean;
  category: boolean;
};

interface ToggleProps {
  columns: Columns;
  onCheckboxClick: (name: string, checked: boolean) => void;
}

export const ToggleColumns = ({
  columns,
  onCheckboxClick,
}: ToggleProps): JSX.Element => {
  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxClick(e.target.name, e.target.checked);
  };

  return (
    <S.ToggleContainer>
      {(Object.keys(columns) as (keyof Columns)[]).map(
        (column, index: number) => {
          return (
            <S.CheckBoxContainer key={index}>
              <label htmlFor={column}>{column}</label>
              <input
                id={column}
                checked={columns[column]}
                name={column}
                type="checkbox"
                onChange={onCheckboxChange}
              />
            </S.CheckBoxContainer>
          );
        }
      )}
    </S.ToggleContainer>
  );
};
