import type { FC, MouseEventHandler, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
};

const Button: FC<ButtonProps> = props => {
  const { onClick, children, title } = props;

  return (
    <button onClick={onClick} title={title}>
      {children || title}
    </button>
  );
};

export default Button;
