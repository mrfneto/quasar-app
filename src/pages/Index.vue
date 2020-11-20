<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <EssentialInput label="Test" v-model="model" />
      <EssentialSelect
        :options="['Opção 01', 'Opção 02']"
        v-model="select"
        :clearable="true"
        :requerid="false"
      />

      <q-btn color="primary" icon="check" label="Salvar" type="submit" />
    </q-form>
  </q-page>
</template>

<script>
import EssentialSelectVue from "src/components/EssentialSelect.vue";
export default {
  name: "PageIndex",
  components: {
    EssentialInput: () => import("src/components/EssentialInput"),
    EssentialSelect: () => import("src/components/EssentialSelect")
  },
  data() {
    return {
      model: "",
      select: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("Ok");
    }
  }
};
</script>
