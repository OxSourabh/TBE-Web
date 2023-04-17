import { FlexContainer } from '@/components';
import { CardSectionContainerProps } from '@/interfaces';

const CardSectionContainer = ({
  children,
  isWidthFull = true,
}: CardSectionContainerProps) => {
  return (
    <FlexContainer
      itemCenter={false}
      className={`${isWidthFull && 'w-full'} gap-4 pt-4`}
    >
      {children}
    </FlexContainer>
  );
};

export default CardSectionContainer;
