<template>
  <div>
    <div class="row">
      <div class="input-group mb-6">
        <template v-if="step == 1">
          <div class="input-group-prepend">
            <span
              id="inputGroup-sizing-default"
              class="input-group-text"
            >Name</span>
          </div>
          <input
            v-model="task.name"
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            @keyup.enter="incrementStep()"
          >
        </template>
        <template v-if="step == 2">
          <div class="input-group-prepend">
            <span
              id="inputGroup-sizing-default"
              class="input-group-text"
            >Day</span>
          </div>
          <Datepicker
            v-model="task.date"
            :format="'dd/MM/yyyy'"
            :bootstrap-styling="true"
            input-class="enable form-control"
            @keyup.enter="incrementStep()"
          />
        </template>
        <template v-if="step == 3">
          <div class="input-group-prepend">
            <span
              id="inputGroup-sizing-default"
              class="input-group-text"
            >Hour</span>
          </div>
          <VueTimepicker
            v-model="task.hour"
            :readonly="false"
            :minute-interval="minuteInterval"
            :bootstrap-styling="true"
            :close-on-complete="true"
            :clear-button-icon="'fa fa-trash'"
            input-class="enable form-control"
            @keyup.enter="incrementStep()"
          />
        </template>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div
          :class="{'justify-content-between': step != 1 , 'justify-content-center': step == 1}"
          class="d-flex mt-2"
        >
          <div
            v-if="step > 1"
            class="btn btn-primary"
            @click="decrementStep()"
          >
            Back
          </div>
          <div
            class="btn btn-success"
            @click="incrementStep()"
          >
            <template v-if="(step == 3 && loading == false)">
              Create
            </template>
            <template v-else-if="(step < 3 && loading == false)">
              Next
            </template>
            <template v-else-if="loading == true">
              <i class="fa fa-circle-o-notch fa-spin fa-fw" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueTimepicker from 'vue2-timepicker';
import Datepicker from 'vuejs-datepicker';
import store from '../../store';

const MINUTE_INTERVAL = 5;

export default {
  components: {
    VueTimepicker,
    Datepicker,
  },
  data() {
    return {
      step: 1,
      task: {
        name: '',
        date: '',
        hour: this.defaultCurrentTime(),
      },
      minuteInterval: MINUTE_INTERVAL,
      loading: false,
    };
  },
  created() {
    store.commit('TASK/INITIZALIZE');
  },
  mounted() {
    this.clearWrongClassesAndProeperties();
  },
  methods: {
    clearWrongClassesAndProeperties() {
      document.getElementsByClassName('enable').forEach((element) => {
        element.removeAttribute('readonly');
        element.classList.remove('display-time');
      });
    },
    defaultCurrentTime() {
      const currentDate = new Date().toLocaleTimeString().split(':');
      const hour = currentDate[0];
      const min = Number(currentDate[1]);

      let formatedMin = min - (min % MINUTE_INTERVAL);
      formatedMin = formatedMin > 9 ? formatedMin : `0${formatedMin}`;

      return `${hour}:${formatedMin}`;
    },
    async incrementStep() {
      if (this.step >= 3) {
        this.loading = true;
        await this.submit();
        this.resetFields();
        this.loading = false;
      } else {
        this.step += 1;
      }
    },
    decrementStep() {
      this.step -= 1;
    },
    resetFields() {
      this.step = 1;
      this.task = {
        name: '',
        date: '',
        hour: this.defaultCurrentTime(),
      };
    },
    submit() {
      return store.dispatch('TASK/INSERT', this.task);
    },
  },
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