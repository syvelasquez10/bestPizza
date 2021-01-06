import React, { FC, useState } from 'react';
import { Input } from 'antd';

export interface SearchFieldProps {
  elements: any[];
  originalElements: any[];
  setElements: (elements: any) => void;
}

const SearchField: FC<SearchFieldProps> = ({ elements, originalElements, setElements }) => {
  const [field, setField] = useState('');
  const onChangeField = (value: string) => {
    setField(value);
    if (value.length > 2) {
      setElements(elements.filter((element) => element.name.toLowerCase().includes(value.toLowerCase())));
    } else {
      setElements(originalElements);
    }
  };
  return (
    <Input
      style={{ width: '80%', marginBottom: '2vh' }}
      id="standard-search"
      type="search"
      value={field}
      allowClear
      placeholder="Busca las tiendas por su nombre"
      onChange={(e) => onChangeField(e.target.value)}
    />
  );
};

export default SearchField;
