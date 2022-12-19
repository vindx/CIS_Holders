import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 0.3,
  },
  title: {
    fontWeight: '800',
    fontSize: 26,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    fontSize: 22,
    marginBottom: 10,
    color: '#62656b',
    paddingHorizontal: 40,
    textAlign: 'center',
  },
})
