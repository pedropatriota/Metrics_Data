import * as S from "./FilterForm.styles";

interface FilterProps {
  valueFrom: number | string;
  valueTo: number | string;
  disabled: boolean;
  filterMetrics: () => void;
  onValueInputChange: (name: string, value: number) => void;
  handleSubmit: (ev: React.FormEvent) => void;
}

export const FilterForm = ({
  valueFrom,
  valueTo,
  filterMetrics,
  onValueInputChange,
  handleSubmit,
  disabled,
}: FilterProps): JSX.Element => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueInputChange(e.target.name, parseFloat(e.target.value));
  };
  console.log({ disabled });
  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.InputContainer>
        <label htmlFor="valueFrom">Value From:</label>
        <input
          type="number"
          id="valueFrom"
          value={valueFrom ?? ""}
          name="valueFrom"
          placeholder="Value from..."
          onChange={inputChange}
        />
      </S.InputContainer>
      <S.InputContainer>
        <label htmlFor="valueTo">Value To:</label>
        <input
          type="number"
          id="valueTo"
          value={valueTo ?? ""}
          name="valueTo"
          placeholder="Value to..."
          onChange={inputChange}
        />
      </S.InputContainer>

      <button type="submit" disabled={disabled} onClick={filterMetrics}>
        filter
      </button>
    </S.FormContainer>
  );
};
