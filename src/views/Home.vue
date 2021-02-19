<template>
  <div class="homebody">
    <HelloWorld
      msg="This message is being passed from Home View to hello world which is a component"
    />
    <h1>
      This line is inside Home.vue and the component HelloWorld is disabled
    </h1>
    <div>
      <b-card
        title="Card Title"
        img
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <img src="../assets/wrench.jpg" alt="product image" />
    HelloWorld
    <h1>
      This line is inside home.vue and the component HelloWorld is disabled
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'Home',

  // components(){
  //   HelloWorld
  // }
};
</script>
<style>
.homebody {
  width: auto;
}
</style>
