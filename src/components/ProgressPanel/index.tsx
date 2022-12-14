import React, { FC } from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'

import { IProgressPanelProps } from './types'

const ProgressPanel: FC<IProgressPanelProps> = ({
  inProgress,
  succeed,
  withError,
  onPropgressComponent,
  onSuccessComponent,
  onErrorComponent,
}) => {
  const OnProgress = () => (
    <View>
      {onPropgressComponent || <ActivityIndicator animating size={40} />}
    </View>
  )

  const OnSuccess = () => (
    <View>
      {onSuccessComponent || <Text style={styles.successText}>Успешно</Text>}
    </View>
  )

  const OnError = () => (
    <View>
      {onErrorComponent || (
        <Text style={styles.errorText}>Произошла ошибка</Text>
      )}
    </View>
  )

  return (
    <View style={styles.progressPanel}>
      {inProgress && <OnProgress />}
      {succeed && <OnSuccess />}
      {withError && <OnError />}
    </View>
  )
}

const styles = StyleSheet.create({
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

export default ProgressPanel
