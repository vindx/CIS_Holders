import React, { useEffect, useState } from 'react'
import {
  Button,
  Image,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'

import Ionic from 'react-native-vector-icons/Ionicons'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import Picker from '~components/Picker'
import ProgressPanel from '~components/ProgressPanel'

import {
  serviceStateSelector,
  serviceTypesPickerSelector,
} from '~store/selectors'

import { serviceCreateRequest, serviceTypesRequest } from '~store/actions'
import { IServiceCreate } from '~types'

import styles from './styles'

const AddService = () => {
  const dispatch = useDispatch()
  const [isMap, setIsMap] = useState(false)
  const serviceTypes = useSelector(serviceTypesPickerSelector)
  const { isLoading } = useSelector(serviceStateSelector)

  useEffect(() => {
    dispatch(serviceTypesRequest())
  }, [dispatch])

  const {
    handleSubmit,
    control,
    formState: { isValid },
    setValue,
  } = useForm<IServiceCreate>({
    defaultValues: {
      address: {},
    },
  })

  const handleChooseImage = (response: ImagePickerResponse) => {
    if (response.assets) {
      const { uri } = response.assets[0]
      setValue('rawImagePath', uri)
    }
  }

  const handleOpenCamera = async () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
      },
      handleChooseImage,
    )
  }

  const handleOpenGallery = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
      },
      handleChooseImage,
    )
  }

  const onSubmit = (data: IServiceCreate) => {
    dispatch(serviceCreateRequest(data))
  }

  return (
    <>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
        <Text style={styles.label}>
          Название <Text style={styles.required}>*</Text>
        </Text>
        <Controller
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { isTouched, error },
          }) => (
            <>
              <TextInput
                style={styles.input}
                placeholder="Taco Bell"
                placeholderTextColor="gray"
                onBlur={onBlur}
                onChangeText={v => onChange(v)}
                value={value}
              />
              {isTouched && !value && (
                <Text style={styles.inputErrorMsg}>{error?.message}</Text>
              )}
            </>
          )}
          name="name"
          rules={{ required: 'Обязательное поле' }}
        />
        <Text style={styles.label}>Описание</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Очень вкусно. Чисто и опрятно"
              placeholderTextColor="gray"
              onBlur={onBlur}
              onChangeText={v => onChange(v)}
              value={value}
            />
          )}
          name="description"
        />
        <Text style={styles.label}>
          Тип сервиса <Text style={styles.required}>*</Text>
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Picker
              selectedValue={value}
              onValueChange={v => onChange(v)}
              placeholder="Кофейни"
              options={serviceTypes}
            />
          )}
          name="typeId"
          rules={{ required: true }}
        />

        <View style={styles.switcherContainer}>
          <Text style={styles.label}>
            Адрес <Text style={styles.required}>*</Text>
          </Text>
          <Text style={styles.label}> ( Ввод</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            onValueChange={v => setIsMap(v)}
            value={isMap}
          />
          <Text style={styles.label}>Карта )</Text>
        </View>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) =>
            isMap ? (
              <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                onPress={e => onChange(e.nativeEvent.coordinate)}
                initialRegion={{
                  latitude: Number(value.latitude) || 50,
                  longitude: Number(value.longitude) || 10,
                  latitudeDelta: value.latitude ? 0.1 : 30,
                  longitudeDelta: value.longitude ? 0.1 : 30,
                }}>
                {value.latitude && value.longitude ? (
                  <Marker
                    coordinate={{
                      latitude: Number(value.latitude),
                      longitude: Number(value.longitude),
                    }}
                  />
                ) : null}
              </MapView>
            ) : (
              <>
                <Text style={styles.label}>
                  Широта <Text style={styles.required}>*</Text>
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="От -90 до 90"
                  placeholderTextColor="gray"
                  onBlur={onBlur}
                  onChangeText={v => onChange({ ...value, latitude: v })}
                  keyboardType="numeric"
                  value={String(value.latitude || '')}
                  maxLength={5}
                />
                <Text style={styles.label}>
                  Долгота <Text style={styles.required}>*</Text>
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="От -180 до 180"
                  placeholderTextColor="gray"
                  onBlur={onBlur}
                  onChangeText={v => onChange({ ...value, longitude: v })}
                  keyboardType="numeric"
                  value={String(value.longitude || '')}
                  maxLength={5}
                />
              </>
            )
          }
          name="address"
          rules={{
            validate: value => {
              return (
                !!value.latitude &&
                !!value.longitude &&
                Number(value.latitude) >= -90 &&
                Number(value.latitude) <= 90 &&
                Number(value.longitude) >= -180 &&
                Number(value.longitude) <= 180
              )
            },
          }}
        />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <Text style={styles.label}>Фото</Text>
              <View style={styles.photoButtonsContainer}>
                <TouchableOpacity
                  style={styles.photoButton}
                  onPress={handleOpenCamera}>
                  <Ionic name="camera-outline" size={40} color="#81b0ff" />
                  <Text style={styles.photoText}>Камера</Text>
                </TouchableOpacity>
                {value && (
                  <View>
                    <Image style={styles.image} source={{ uri: value }} />
                    <Ionic
                      style={styles.deleteButton}
                      name="close-outline"
                      size={20}
                      color="red"
                      onPress={() => onChange()}
                    />
                  </View>
                )}
                <TouchableOpacity
                  style={styles.photoButton}
                  onPress={handleOpenGallery}>
                  <Ionic name="image-outline" size={40} color="#81b0ff" />
                  <Text style={styles.photoText}>Галерея</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          name="rawImagePath"
        />

        <View style={styles.button}>
          <Button
            disabled={!isValid}
            title="Добавить"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>

      {isLoading && <ProgressPanel inProgress={isLoading} />}
    </>
  )
}

export default AddService
