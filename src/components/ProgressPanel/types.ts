export interface IProgressPanelProps {
  inProgress: boolean
  succeed: boolean
  withError: boolean
  onPropgressComponent?: React.ReactElement
  onSuccessComponent?: React.ReactElement
  onErrorComponent?: React.ReactElement
}
