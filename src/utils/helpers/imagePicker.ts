import {
  Callback,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'

class ImagePicker {
  public openCamera(callback?: Callback) {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
      },
      callback,
    )
  }

  public openGallery(callback?: Callback) {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      callback,
    )
  }
}

export default new ImagePicker()
