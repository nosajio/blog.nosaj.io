export const colorTransitionWithDelay = (d: number = 400): string =>
  `transition: color 200ms ${d}ms ease`;

export const oneWayDelayColorTransition = (
  y: boolean = true,
  delay: number = 400,
  duration: number = 200
): string =>
  y
    ? `transition: color ${duration}ms ${delay}ms ease`
    : `transition: color ${duration}ms ease`;
