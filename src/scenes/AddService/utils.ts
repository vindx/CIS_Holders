import { createServiceAPI, saveImageAPI } from '~api'

import { ICreateService } from './types'

export const createService = async ({
  formValues,
  onSuccessCallback,
  onErrorCallback,
}: ICreateService) => {
  try {
    let imageUrl: string | undefined
    if (formValues.rawImagePath) {
      const imageFilename = formValues.rawImagePath.substring(
        formValues.rawImagePath.lastIndexOf('/') + 1,
      )
      imageUrl = await saveImageAPI(imageFilename, formValues.rawImagePath)
    }

    await createServiceAPI({
      ...formValues,
      imageUrl,
    })
    typeof onSuccessCallback === 'function' && onSuccessCallback()
  } catch (err) {
    typeof onErrorCallback === 'function' && onErrorCallback()
  }
}
