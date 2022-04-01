<script setup lang="ts">
import { useWallet } from './hooks/web3/useWallet'
import { useERC20 } from './hooks/web3/useErc20'
import { ref } from 'vue';
const { onConnect, account } = useWallet()
const { getBalance: getBusdBalance } = useERC20('busd')

const amount = ref<string | null>(null)
const getBalance = async () => {
  if (account.value) {
    amount.value = await getBusdBalance(account.value)
  }
}
</script>

<template>
  <button @click="onConnect">onConnect</button>
  <button v-if="account" @click="getBalance">getBalance</button>
  <p>{{ account }}</p>
  <p>{{ amount }}</p>
</template>

<style>
</style>
