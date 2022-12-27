import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { TSortingName } from '~constants/firestore'

export interface ICustomHeaderProps extends BottomTabHeaderProps {
  toggleDrawer: () => void
}

export interface ISortItemProps {
  iconName: 'arrow-down-outline' | 'arrow-up-outline'
  onPress: () => void
  text: TSortingName
}
