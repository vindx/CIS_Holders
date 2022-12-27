export const DATE_SORT = 'Дата создания'
export const NAME_SORT = 'Название'

export type TSortingName = typeof DATE_SORT | typeof NAME_SORT

export const ASC = 'asc'
export const DESC = 'desc'

export type TSortingValue = typeof ASC | typeof DESC

type SortOption = 'name' | 'createdDate'

export type TSortValue = [SortOption, TSortingValue]
