import { Fragment, type ReactNode } from "react";

/**
 * Chemical formulae used across the site. Listed longest-first so "CaCO3" is
 * matched whole rather than partially matching as "CO3".
 */
const FORMULA = /(CaCO3|CO2)/g;

/** A true subscript: smaller, dropped below the baseline, no added leading. */
function Sub({ children }: { children: ReactNode }) {
  return (
    <sub className="text-[0.68em] leading-none [vertical-align:-0.18em]">
      {children}
    </sub>
  );
}

/**
 * Renders the digits in "CaCO3" and "CO2" as real subscripts while leaving the
 * surrounding text untouched. Copy stays authored as plain strings, so the same
 * source string can also feed metadata, alt text and aria labels, where markup
 * isn't allowed — call `chem()` only where the text is rendered.
 */
export function chem(text: string): ReactNode {
  const parts = text.split(FORMULA);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    if (part === "CaCO3") {
      return (
        <Fragment key={i}>
          CaCO<Sub>3</Sub>
        </Fragment>
      );
    }
    if (part === "CO2") {
      return (
        <Fragment key={i}>
          CO<Sub>2</Sub>
        </Fragment>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
