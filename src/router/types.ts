import {
  ABOUT_PAGE_NAVIGATOR,
  ROOT_NAVIGATOR,
  ABOUT,
  ADD_SERVICE,
  MAP,
  SERVICES_LIST,
} from '~constants/navigation'

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

export type TRouteNamesList = {
  [ABOUT]: undefined
  [ADD_SERVICE]: undefined
  [MAP]: undefined
  [SERVICES_LIST]: undefined
}
