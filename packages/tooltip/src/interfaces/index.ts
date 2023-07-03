export interface ITooltipProps {
  /**
   * @param children
   * Param that will receive any other react component
   */
  children?: React.ReactNode;
  /**
   * @param timeToDisappear
   *
   */
  timeToDisappear?: number;
  text: string;
}
