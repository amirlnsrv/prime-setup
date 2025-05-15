type Props = {
  className: string;
};

const HeaderArrow = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8332 1.83955L6.99984 7.67289L1.1665 1.83955"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeaderArrow;
