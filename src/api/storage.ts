import storage from '@react-native-firebase/storage'

import { SERVICES_IMAGES_FOLDER } from '~constants/fireabaseStorage'

export const saveImageAPI = async (filename: string, uri: string) => {
  const ref = storage().ref(`${SERVICES_IMAGES_FOLDER}/${filename}`)
  await ref.putFile(uri)
  const url = await ref.getDownloadURL()
  return url
}
