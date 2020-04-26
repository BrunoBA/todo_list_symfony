<template>
  <div>
    {{step}}
    <div class="row">
      <div class="input-group mb-6">
        
        <template v-if="step == 1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
          </div>
          <input
            v-model="taskName"
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            @keyup.enter="incrementStep()"
          />
        </template>
        <template v-if="step == 2">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Day</span>
          </div>
          <Datepicker
            v-model="taskDate"
            :format="'dd/MM/yyyy'"
            :bootstrap-styling="true"
            input-class="enable form-control"
            @keyup.enter="incrementStep()"
          ></Datepicker>
        </template>
        <template v-if="step == 3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Hour</span>
          </div>
          <VueTimepicker
            v-model="taskHour"
            :readonly="false"
            :minute-interval="5"
            :bootstrap-styling="true"
            :close-on-complete="true"
            :clear-button-icon="'fa fa-trash'"
            input-class="enable form-control"
            @keyup.enter="incrementStep()"
          ></VueTimepicker>
        </template>
      </div>
    </div>
    <div class="d-flex justify-content-around mt-2">
      <div v-if="step > 1" @click="decrementStep()" class="btn btn-primary">Back</div>
      <div @click="incrementStep()" class="btn btn-success">Select Day</div>
    </div>
  </div>
</template>
<script>
import VueTimepicker from "vue2-timepicker";
import Datepicker from "vuejs-datepicker";

import store from "../../store";

export default {
  components: {
    VueTimepicker,
    Datepicker
  },
  data() {
    return {
      step: 1,
      taskName: "",
      taskDate: "",
      taskHour: ""
    };
  },
  created() {
    console.log(store);
  },
  mounted() {
    this.clearWrongClassesAndProeperties();
  },
  methods: {
    clearWrongClassesAndProeperties() {
      document.getElementsByClassName("enable").forEach(element => {
        element.removeAttribute("readonly");
        element.classList.remove("display-time");
        console.log(element);
      });
    },
    incrementStep() {
      this.step += 1;
    },
    decrementStep() {
      this.step -= 1;
    }
  }
};
</script>

<style lang="scss">
@import "~vue2-timepicker/dist/VueTimepicker.css";
.enable {
  background: none !important;
}

.vue__time-picker input.display-time {
  height: unset !important;
  padding: 0.4em 0.5em !important;
}
</style>