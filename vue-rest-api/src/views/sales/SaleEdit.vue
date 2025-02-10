<script setup>
    import useSales from '@/composables/sales';
    import { onMounted } from 'vue';

    const { sale, getSale, updateSale, errors } = useSales();

    const props = defineProps({
        id: {
            reqquired: true,
            type: String
        }
    })

    onMounted(() => { getSale(props.id);
  });

</script>

<template>
    <div class="mt-12">
        <form  class="max-w-md mx-auto rounded" @submit.prevent="updateSale($route.params.id)">
            <div class="space-y-6">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                    <input type="text" id="name" v-model="sale.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.name">
                        <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Quantity
                    </label>
                    <input type="text" id="quantity" v-model="sale.quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.quantity">
                        <span class="text-sm text-red-400">{{ errors.quantity[0] }}</span>
                    </div>
                </div>
                <div class="mt-4">                
                    <button type="submit" class="flex justify-end m-2 p-2 bg-green-100 rounded">Update</button>
                </div>
            </div>
        </form>
    </div>
</template>
