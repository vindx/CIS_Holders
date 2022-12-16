import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const ErrorText = styled.Text`
  color: red;
  font-size: 20px;
`

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LoadingText = styled.Text`
  color: black;
  font-size: 20px;
`

export const HeaderText = styled.Text`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  background: yellow;
`

export const ItemText = styled.Text`
  color: black;
  font-size: 20px;
`

export const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
})
