import "./divider.scss";

export const Divider = () => {
  return (
    <div className="divider">
      <p>{"-".repeat(79 / 2)}</p>
    </div>
  );
};
