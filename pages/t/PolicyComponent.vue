<script setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
const props = defineProps(["policy"]);
const policy = props.policy;
const blockLinks = computed(() => {
  return policy.body?.links?.assets?.block || [];
});
const renderedBody = computed(() => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        const image = blockLinks.value.filter(
          (i) => i.sys.id === node.data?.target?.sys?.id
        );
        return `<img class='p-4 m-4' src='${image?.[0]?.url}' alt='${image?.[0]?.fileName}'></img>`;
      },
    },
  };
  return documentToHtmlString(policy?.body?.json || {}, options);
});
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
