import { ABOUT_PAGE_NAVIGATOR, ROOT_NAVIGATOR } from '~constants/navigation'

export type TRootRouteParams =
  | {
      show: boolean
      displayedName?: string
    }
  | undefined

export type TRootNavigatorList = {
  [ROOT_NAVIGATOR]: TRootRouteParams
  [ABOUT_PAGE_NAVIGATOR]: TRootRouteParams
}
