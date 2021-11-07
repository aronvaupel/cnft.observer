import React from 'react';
import Chart from 'react-apexcharts';

export const ChartProps = {
  placeholder: string;
  id: string,
  label: string,
  value?: string,
  onChange: (value) => void
};

const DescriptionField = ({
  placeholder,
  id,
  label,
  onChange,
}) => {
  return (
    <div className="wrapper">
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        className={styles.DescriptionField}
        required
        placeholder={placeholder}
        id={id}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default DescriptionField;