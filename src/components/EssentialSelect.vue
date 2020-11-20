<template>
  <q-select
    :label="label"
    :outlined="outlined"
    :rounded="rounded"
    v-bind="$attrs"
    v-on="$listeners"
    :dense="dense"
    :stack-label="stack"
    :clearable="clearable"
    :rules="[required ? rules.isRequired : '']"
    :options="options"
    :option-value="optionValue"
    :option-label="optionLabel"
  />
</template>

<script>
export default {
  name: "EssentialInput",
  props: {
    label: {
      type: String,
      default: "Selecione uma opção"
    },
    outlined: {
      type: Boolean,
      default: true
    },
    rounded: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    stack: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: true
    },
    optionValue: {
      type: String,
      default: ""
    },
    optionLabel: {
      type: String,
      default: ""
    },
    options: {
        type: Array
    }
  },
  data() {
    return {
      rules: {
        isRequired: val => (val && val.length > 0) || "Selecione uma opção",
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
