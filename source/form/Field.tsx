import cn from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import type { FieldsetProps } from '../types/field';

const Field: FC<PropsWithChildren & FieldsetProps> = props => {
  const { label, children, error, status, description, required } = props;

  return (
    <fieldset className={cn(status, { required })}>
      {Boolean(label) && <legend>{label}</legend>}
      {children}
      {error?.length > 0 && <small>{error}</small>}
      {description}
    </fieldset>
  );
};

export default Field;
