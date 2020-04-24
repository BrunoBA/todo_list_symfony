<template>
  <div>
    <h2 class="d-flex justify-content-center">
      Todo List
    </h2>
    <div class="col-md-12">
      <ul class="task list-group">
        <li
          v-for="word in words"
          :key="word"
          class="list-group-item d-flex justify-content-between"
        >
          <span class="mr-5">
            {{ word }}
          </span>
          <button
            type="button"
            class="btn btn-danger"
          >
            Danger
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: ['A', 'list', 'of', 'words!ytfiusytfiuystdiyftsiduyftiudy!'],
    };
  },
  created() {
    const nome = 'bruno';
    console.log('teste');
  },
};
</script>

<style>
.task {
  min-width: 50%;
}
</style>