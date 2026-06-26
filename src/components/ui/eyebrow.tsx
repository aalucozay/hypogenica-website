interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A small, quiet section label. No pill, border, or all-caps tracking — just
 * understated muted text that introduces a section without shouting.
 */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  // Inherits the surrounding text colour and simply dims it, so it reads
  // correctly on both dark green and light sections.
  return (
    <span className={`block text-sm font-medium opacity-55 ${className}`}>
      {children}
    </span>
  );
}
