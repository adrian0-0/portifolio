import React, { Suspense } from "react";

type IconName = keyof typeof import("react-icons/si");

interface LazyIconProps {
  iconName: IconName;
  key: string;
  size?: string;
  color?: string;
}

const LazyIcon = ({
  key,
  iconName,
  size,
  color = "inherit",
}: LazyIconProps) => {
  const IconComponent = React.lazy(() =>
    import("react-icons/si").then((module) => ({ default: module[iconName] }))
  );

  return (
    <Suspense fallback={<span style={{ width: size, height: size }} />}>
      <IconComponent size={size} color={color} key={key} />
    </Suspense>
  );
};

export default LazyIcon;
