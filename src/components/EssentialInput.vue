<template>
  <q-input
    :type="type"
    :label="label"
    :outlined="outlined"
    :rounded="rounded"
    v-bind="$attrs"
    v-on="$listeners"
    :dense="dense"
    :stack-label="stack"
    :clearable="clearable"
    :rules="[required ? rules.isRequired : '', type == 'email' ? rules.isInvalidEmail : '']"
  />
</template>

<script>
export default {
  name: "EssentialInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
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
    }
  },
  data() {
    return {
      rules: {
        isRequired: val => (val && val.length > 0) || "Campo obrigatório",
        isInvalidEmail: v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Informe um e-mail válido"
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
