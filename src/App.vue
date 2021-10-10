<template>
  <div class="container">
    <form action="#" class="main-form">
      <header class="header">
        <h1 class="main-title">FTL: Прямая машина</h1>
      </header>
      <section class="form-section">
        <app-section-heading :section-Name="section[0]"></app-section-heading>
        <app-input :typeName="type.input1"></app-input>
        <app-input :typeName="type.input2"></app-input>
      </section>
      <section class="form-section">
        <app-section-heading :section-Name="section[1]"></app-section-heading>
        <div class="section__half">
          <app-dropdown :typeName="type.select1"></app-dropdown>
          <app-dropdown :typeName="type.select2"></app-dropdown>
        </div>
      </section>
      <section class="form-section">
        <app-section-heading :section-Name="section[2]"></app-section-heading>
        <app-dropdown :typeName="type.select3"></app-dropdown>
        <div class="section__half">
          <app-dropdown :typeName="type.select4"></app-dropdown>
          <app-input :typeName="type.input3"></app-input>
        </div>
        <app-check-box :typeName="type.input4"></app-check-box>
      </section>
      <section class="form-section">
        <app-section-heading :section-Name="section[3]"></app-section-heading>
        <p class="input-name">Когда прибыть на точку</p>
        <div class="addresses">
          <app-destination></app-destination>
          <app-destination></app-destination>
        </div>
        <app-comments :typeName="type.input5"></app-comments>
      </section>
    </form>
  </div>
</template>

<script>
import Params from "./params";
import AppInput from "./components/AppInput.vue";
import AppDropdown from "./components/AppDropdown";
import AppCheckBox from "./components/AppCheckBox.vue";
import AppSectionHeading from "./components/AppSectionHeading.vue";
import AppDestination from "./components/AppDestination.vue";
import AppComments from "./components/AppComments.vue";
export default {
  components: {
    AppDropdown,
    AppInput,
    AppCheckBox,
    AppSectionHeading,
    AppDestination,
    AppComments,
  },
  data() {
    return Params;
  },
};
</script>

<style></style>
