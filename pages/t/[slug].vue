<template>
  <div class="flex px-3 pt-5 pb-10 mb-10">
    <PolicyComponent
      :policy="data?.policyCollection?.items?.[0] || null"
    ></PolicyComponent>
  </div>
</template>
<script setup>
import { GET_POLICY_BY_SLUG } from "../../api/queries";
import PolicyComponent from "./PolicyComponent.vue";
const route = useRoute();
const slug = route.params?.slug;
const query = GET_POLICY_BY_SLUG;
const variables = { where: { slug } };
const { data } = await useAsyncQuery(query, variables);
if (!data.value || !data.value.policyCollection) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>
