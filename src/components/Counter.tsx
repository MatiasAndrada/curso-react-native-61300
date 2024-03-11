import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'
import { decrement, increment, reset, incrementByAmount } from '../features/count'

import React from 'react'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counterReducer.value)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>Counter</Text>
      <Pressable onPress={() => dispatch(decrement())}>
        <Text>-</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(increment())}>
        <Text>+</Text>
      </Pressable>

      <Text>0</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})