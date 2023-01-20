import AsyncStorage from '@react-native-async-storage/async-storage'

class AsyncStorageClass {
  public async storeData(key: string, value: object | string) {
    try {
      if (typeof value === 'string') {
        await AsyncStorage.setItem(key, value)
      } else {
        await AsyncStorage.setItem(key, JSON.stringify(value))
      }
    } catch (e) {
      console.error(e)
    }
  }

  public async getData<T = string | object>(
    key: string,
  ): Promise<T | undefined> {
    try {
      const value = await AsyncStorage.getItem(key)

      if (value !== null) {
        return JSON.parse(value)
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default new AsyncStorageClass()
