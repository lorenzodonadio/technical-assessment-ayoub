<script lang="ts">
import type { Person } from "$lib/types/personType";


    export let data : Person
</script>


<div class="flex justify-center w-full">
    <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
      <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={data.avatar}  alt="" />
      <div class="p-6 flex flex-col justify-start">
        <h5 class="text-gray-900 text-xl font-medium mb-2">{data.first_name} {data.last_name}</h5>
        <p class="text-gray-700 text-base mb-4">
            Email : {data.email}
        </p>
        <p class="text-gray-700 text-base mb-4">
            Ip Address : {data.ip_address}
        </p>
        <p class="text-gray-700 text-base mb-4">
            Country : {data.country != null ? data.country : "Unspecified"}
        </p>
        <p class="text-gray-600 text-xs">created at : {data.created_at}</p>
      </div>
    </div>
  </div>

<style>
</style>
