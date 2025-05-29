import type { CardProps } from './types.d';

export const Card = ({ title, description }: CardProps) => {
    return (
        <div className='ui'>
            <div className='ui:bg-white ui:rounded-lg ui:shadow-lg ui:overflow-hidden ui:sm:max-w-xs ui:lg:max-w-sm ui:xl:max-w-md'>
                <div className='ui:px-6 ui:py-4'>
                    <h2 className='ui:text-heading ui:font-bold ui:text-xl ui:mb-2'>{title}</h2>
                    <p className='ui:text-foreground ui:bg-white ui:border-none ui:rounded-none ui:font-sans ui:text-base'>{description}</p>
                </div>
            </div>
        </div>
    );
};
