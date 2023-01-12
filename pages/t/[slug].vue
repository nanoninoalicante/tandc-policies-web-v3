<template>
  <div class="flex px-3 pt-5 pb-10 mb-10">
    <Title>{{ title }}</Title>
    <div v-if="policyData && policyData.policy">
      <PolicyComponent :policy="policyData.policy"></PolicyComponent>
    </div>
  </div>
</template>
<script setup>
import { GET_POLICY_BY_SLUG, GET_POLICY_BY_ID } from "../../api/queries";
import PolicyComponent from "./PolicyComponent.vue";
const route = useRoute();
const slug = route.params?.slug;
const title = ref("Policy");
const description = ref("Policy");
const query = GET_POLICY_BY_SLUG;
const linksQuery = GET_POLICY_BY_ID;
const variables = { where: { slug } };
const { data } = await useAsyncQuery(query, variables);
console.log("getting policy: ", data.value);
if (
  !data.value ||
  !data.value.policyCollection ||
  !data.value.policyCollection.items ||
  data.value.policyCollection.items.length === 0
) {
  console.log("cannot find policy");
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
const { data: policyData } = await useAsyncQuery(linksQuery, {
  policyId: data.value?.policyCollection?.items?.[0]?.sys?.id || null,
});
title.value = policyData.value?.policy?.title || "Policy";
console.log("getting policyData: ", policyData.value);
</script>
