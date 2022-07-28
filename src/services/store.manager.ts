import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key: string, value: any) {

  const jsonValue = JSON.stringify(value);

  await AsyncStorage.setItem(key, jsonValue);
}

export async function getData(key: string) {

  const jsonValue = await AsyncStorage.getItem(key);

  return jsonValue != null ? JSON.parse(jsonValue) : null;
}

export async function removeData(key: string) {
  await AsyncStorage.removeItem(key);
}

export default const StoreManager = { storeData, getData, removeData };
