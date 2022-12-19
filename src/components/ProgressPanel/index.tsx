import React, { FC } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

import styles from './styles'
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

export default ProgressPanel
