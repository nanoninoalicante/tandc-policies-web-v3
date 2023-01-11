<script setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
const props = defineProps(["policy"]);
const policy = props.policy;
const renderedBody = computed(() =>
  documentToHtmlString(policy?.body?.json || {})
);
</script>
<template>
  <div v-if="policy" class="mt-4 mb-10 pb-10">
    <div class="uppercase tracking-wide text-sm text-grey-600 font-bold mb-9">
      {{ policy.title }}
    </div>
    <div class="mt-2 mb-8 text-gray-500" v-html="renderedBody || ''"></div>
  </div>
</template>
<style>
p {
  padding: 0.5rem 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 2rem 0 0.5rem 0;
}
</style>
