import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  itemText: {
    color: 'black',
    fontSize: 20,
  },
  errorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 20,
  },
  loadingText: {
    color: 'black',
    fontSize: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'yellow',
  },
})
