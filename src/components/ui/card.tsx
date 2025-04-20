type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={`border-1 rounded-xl border-background-base p-4 ${className}`}>{children}</div>;
};
