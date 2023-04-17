import { MouseEventHandler } from 'react';
import { SKILLProps } from '.';

export interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export interface TextProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  textCenter?: boolean;
}

export interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export interface LogoProps {
  className?: string;
}

export interface LinkButtonProps {
  buttonProps: ButtonProps;
  href: string;
  className?: string;
}

export interface ButtonProps {
  variant: 'PRIMARY' | 'OUTLINE';
  className?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ProgramCardProps {
  image: string;
  imageAltText: string;
  title: string;
  content: string;
  buttonText: string;
}

export interface PageLayoutProps {
  children: React.ReactNode;
}

export interface SectionHeaderProps {
  heading: string;
  focusText: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export interface CardSectionContainerProps {
  children: React.ReactNode;
  isWidthFull?: boolean;
}

export interface CardGradientContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface SkillCardProps {
  skilledDetails: SKILLProps[];
  title: string;
}

export interface WeGuideDifferentlyCardProps {
  id?: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
}

export interface NotAnotherTechCourseCardProps {
  id?: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
}

export interface FlexContainerProps {
  children: React.ReactNode;
  itemCenter?: boolean;
  justifyCenter?: boolean;
  className?: string;
  direction?: 'row' | 'col';
}

export interface TestimonialCardProps {
  id?: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
}

export interface FooterLinkProps {
  id?: string;
  label: string;
  href: string;
}

export interface FooterLinksContainerProps {
  title: string;
  urls: FooterLinkProps[];
}

export interface MicroCampBGGradientContainerProps {
  children: React.ReactNode;
}

export interface MicroCampFeatureCardProps {
  title: string;
  content: string;
}

export interface TechEducationForEveryoneProps {
  heading: string;
  title: string;
  content: string;
}

export interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface OpportunityCardProps {
  id?: string;
  heading: string;
  title: string;
  content: string;
}
