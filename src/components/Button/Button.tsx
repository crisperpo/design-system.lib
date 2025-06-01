import type { ButtonProps } from './types.d';

const baseClasses = `
  ui:inline-block
  ui:cursor-pointer
  ui:border-0
  ui:rounded-[3em]
  ui:font-bold
  ui:leading-none
  ui:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]
`;
const variantClassMap = {
    primary: 'ui:bg-button-primary-background ui:hover:bg-button-primary-background-hover ui:text-button-primary-foreground',
    secondary: 'ui:bg-button-secondary-background ui:text-button-secondary-foreground',
};
const sizeClassMap = {
    small: 'ui:py-[10px] ui:px-[16px] ui:text-[12px]',
    medium: 'ui:py-[11px] ui:px-[20px] ui:text-[14px]',
    large: 'ui:py-[12px] ui:px-[24px] ui:text-[16px]',
};

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
    const variantClasses = variantClassMap[primary ? 'primary' : 'secondary'];
    const sizeClasses = sizeClassMap[size as keyof typeof sizeClassMap] || sizeClassMap.medium;

    return (
        <button
          type="button"
          className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
          style={{ backgroundColor }}
          {...props}
        >
          {label}
        </button>
      );
};
