import { getTechnologyIcon } from '../utils/getTechnologyIcon';

interface TechnologyIconProps {
  name: string;
  className?: string;
}

export default function TechnologyIcon({ name, className = '' }: TechnologyIconProps) {
  const { technologyName, technologyIcon, technologyImageSrc } = getTechnologyIcon(name);

  if (technologyImageSrc) {
    return (
      <img
        src={technologyImageSrc}
        alt={technologyName}
        className={className}
      />
    );
  }

  return (
    <i className={`${technologyIcon} ${className}`} title={technologyName}></i>
  );
}
