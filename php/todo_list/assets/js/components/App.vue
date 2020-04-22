<template>
  <div>
    <h2 class="center">My Application!!!</h2>
    <div id="message" v-text="message"></div>
    <ul>
      <li :key="word.id" v-for="word in words">{{ word }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "A list of words!!",
      words: []
    };
  },
  mounted() {
    let el = document.querySelector("#message");
    let mywords = el.textContent.split(" ");

    this.words.push.apply(this.words, mywords);
  }
};
</script>

<style>
.center {
  text-align: center;
}
</style>