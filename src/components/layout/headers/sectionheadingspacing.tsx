import React from "react";

export const SectionHeadingSpacing = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="mb-12 space-y-2">{children}</div>;
};
