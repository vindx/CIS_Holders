import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  progressPanel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'lightgray',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    color: 'green',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
})
