import { FC } from "react";

interface Props {
  type?: string;
  label?: string;
  value: string;
}

const CyberInput: FC<Props> = ({ type = "text", label, value }) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
    />
  </div>
);

export default CyberInput;