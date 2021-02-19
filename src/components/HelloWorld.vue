<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      First Red line: Any thing Between this line to last red line is inside the
      component HelloWorld sentence
    </h2>

    <img src="../assets/wrench.jpg" alt="" />
    <h2>
      First Red line: Any thing Between this line to last red line is inside the
      component HelloWorld sentence
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
            url : '../assets/wrench.jpg',
            name : 'My Image 1',
         }
    },
  
  props: {
    msg: String,
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
h2 {
  color: white;
  background-color: red;

  margin-right: 50px;
  margin-left: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.productRibbon {
  border-color: #051d0b;
  width: 400;
  height: fit-content;
}

.product_Image {
  width: 30%;
  height: 150px;
  float: left;
  border: #051d0b;
  border-style: solid;
}

.product_description {
  display: block;
  width: 65%;
  float: right;
  padding-right: 10px;
}
.product_description p {
  text-align: justify;
}
</style>
