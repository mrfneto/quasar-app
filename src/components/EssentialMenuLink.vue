<template>
  <q-expansion-item :label="title">
    <q-item
      v-for="item in children"
      :key="item.link"
      clickable
      :to="{ name: name, params: { page: link, subpage: item.link } }"
    >
      <q-item-section v-if="item.icon" avatar>
        <q-icon :name="item.icon" />
      </q-item-section>

      <q-item-section class="q-ml-md">
        <q-item-label>{{ item.title }}</q-item-label>
        <q-item-label caption>
          {{ item.caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>
</template>

<script>

export default {
  name: "EssentialMenuLink",
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
    },

    link: {
      type: String,
      default: ""
    },

    icon: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    children: {
      type: Array
    }
  }
};
</script>
