import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: object | string) => {
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

export async function getData<T = string | object>(
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
