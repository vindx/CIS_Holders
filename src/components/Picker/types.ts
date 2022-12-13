export interface IPickerOption {
  label: string
  value: string
}

export interface IPickerProps {
  placeholder?: string
  options: IPickerOption[]
  selectedValue?: IPickerOption['value']
  onValueChange?: (value: IPickerOption['value']) => void
}

export interface IPickerDataState {
  label: string
  value: null | IPickerOption['value']
}
