<template>
  <div class="mt-3">
    <div class="col-md-12">
      <ul class="task list-group">
        <li
          v-for="task in tasks"
          :key="task.name"
          class="list-group-item d-flex justify-content-between"
        >
          <span class="w-50 m-2 align-middle">{{ reduceString(task.name) }}</span>
          <span class="m-2 align-middle">{{ task.date.toLocaleDateString() }}</span>
          <span class="m-2 align-middle">{{ task.hour }}</span>
          <span class="del-btn-default m-2 align-middle text-right">
            <button
              type="button"
              class="btn btn-danger"
            >
              Danger
            </button>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../../store';

const MAX_LENGTH = 250;

export default {
  data() {
    return {};
  },
  computed: {
    tasks() {
      return store.state.TASK.list;
    },
  },
  created() {
  },
  methods: {
    reduceString (text) {
      return (text.length > MAX_LENGTH) ? `${text.substring(0, MAX_LENGTH)  }...` : text;
    },
  },
};
</script>

<style>
.del-btn-default {
  max-height: 50px;
}
</style>