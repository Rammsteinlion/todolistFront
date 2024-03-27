<script setup lang="ts">
import { loginService } from '@/service/login';
import { userTextField,passTextField } from '@/util';

const onSubmit = async (): Promise<void> => {
  const data: any = await loginService(userTextField.value, passTextField.value);

  if (data && data['success']) {
    // Handle success
  } else {
    // Handle failure or undefined data
  }
};

</script>

<template>
  <form @submit.prevent="onSubmit" action="">
    <div class="flex flex-col w-[50%] m-auto p-5 gap-3">
      <input
      v-model="userTextField.value"
        type="text"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="user"
        required
      />
      <input
      v-model="passTextField.value"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required
      />
      <input type="submit" value="Login" class="text-white bg-blue-700 text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-xl"/>
    </div>
  </form>
</template>

<style scoped></style>
