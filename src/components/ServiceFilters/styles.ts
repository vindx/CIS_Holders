import { Dimensions, StyleSheet } from 'react-native'

const HEIGHT = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    maxHeight: HEIGHT / 2,
    marginBottom: 20,
  },
  typeElement: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: 'gray',
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
    paddingVertical: 10,
  },
  applyButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
