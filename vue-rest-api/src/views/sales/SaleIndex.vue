<script setup>
  import useSales from '../../composables/sales';
  import { onMounted } from 'vue';

  const { sales, getSales, destroySale } = useSales();

  onMounted(() => { 
    getSales();
    });
    
</script>

<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{name: 'SaleCreate'}" class="px-4 py-2 bg-blue-200 rounded">New</RouterLink>
        </div>
        <div class="relative overflow-x-auto" bis_skin_checked="1">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">   
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="sale in sales" :key="sale.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        
                        <td class=" text-gray-700 px-6 py-4">
                            {{ sale.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ sale.quantity }}
                        </td>
                        <td class="px-6 py-4">
                            <RouterLink :to="{name: 'SaleEdit', params: {id: sale.id}}" class="px-4 py-2 bg-blue-200 rounded">Edit</RouterLink>
                            <button @click="destroySale(sale.id)" class="ml-2 px-4 py-2 bg-red-200 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>