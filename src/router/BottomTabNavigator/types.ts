import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { TSortingName } from '~constants/firestore'
import { ARROW_DOWN_ICON, ARROW_UP_ICON } from '~constants/iconNames'

export interface ICustomHeaderProps extends BottomTabHeaderProps {
  toggleDrawer: () => void
}

export interface ISortItemProps {
  iconName: typeof ARROW_DOWN_ICON | typeof ARROW_UP_ICON
  onPress: () => void
  text: TSortingName
}
