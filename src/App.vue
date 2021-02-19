<template>
  <div id="app">
    <h1>The navbar is in App.Vue</h1>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Hutt-e</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">FR</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-button>Guest? or Login</b-button>
            </template>
            <b-dropdown-item to="/login">Log In</b-dropdown-item>
            <b-dropdown-item to="/UserRgistration">Register</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <h1 style="color:red">this line is inside App.vue file until</h1>

    <!-- <div id="storeMainPage" class="productRibbon">
                <div id="product_1" class="productRibbon">

                    <h5>(Item # 1)</h5>
                    <img class="product_Image" src="images/wrench.jpg" alt=" ">

                    <div class="product1_description">
                        <p>Description: Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent..</p>
                        <h4 style="color: chartreuse;"> Price $3</h4>

                        <div class="clear"></div>

                        <form action="Purchase">
                            <label for="Quantity">Quantity</label>
                            <input type="number" class="itemQuantity" id="quantity_1" name="quantity" min="1">
                            <input type="button" class="purchase_btn" value="Add to Cart" onclick="add111ToCart();">
                            <input type="button" class="checkout_btn" value="Proceed to checkout" onclick="userRegistration();">
                            <h4 style="display: inline-block;">
                                <div id="storeErrorMessage1"></div>
                            </h4>
                            <h4 style="display: inline-block;">
                                <div id="storeErrorMessage3"></div>
                            </h4>

                        </form>
                    </div>
                </div>
                <div id="product_2" class="productRibbon">

                    <h5>(Item # 2)</h5>
                    <img class="product_Image" src="images/screwDriver.jpg" alt=" ">

                    <div class="product1_description">
                        <p>Description: Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent..</p>
                        <h4 style="color: chartreuse;"> Price $5</h4>

                        <div class="clear"></div>

                        <form action="Purchase">
                            <label for="Quantity">Quantity</label>
                            <input type="number" class="itemQuantity" id="quantity_2" name="quantity" min="1">
                            <input type="button" class="purchase_btn" value="Add to Cart" onclick="add222ToCart();">
                            <input type="button" class="checkout_btn" value="Proceed to checkout" onclick="userRegistration();">
                            <h4 style="display: inline-block;">
                                <div id="storeErrorMessage2"></div>
                            </h4>
                            <h4 style="display: inline-block;">
                                <div id="storeErrorMessage4"></div>
                            </h4>

                        </form>
                    </div>
                </div>
                <div id="product_3" class="productRibbon">

                    <h5>(Item # 3)</h5>
                    <img class="product_Image" src="../images/pexels-miguel-á-padriñán-3930097.jpg" alt=" ">

                    <div class="product1_description">
                        <p>Description: Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent..</p>
                        <h4 style="color: chartreuse;"> Price $3</h4>

                        <div class="clear"></div>

                        <form action="Purchase">
                            <label for="Quantity">Quantity</label>
                            <input type="number" class="itemQuantity" id="quantity_1" name="quantity" min="1">
                            <input type="button" class="purchase_btn" value="Add to Cart" onclick="add111ToCart();">
                            <input type="button" class="checkout_btn" value="Proceed to checkout" onclick="userRegistration();">
                            <h4 style="display: inline-block;">
                                <div id="storeErrorMessage1"></div>
                            </h4>
                            <h4 style="display: inline-block;">
                                <div id="storeErrorMessage3"></div>
                            </h4>

                        </form>
                    </div>
                </div>

            </div>
    -->

    <h1 style="color:red">this line is inside App.vue file ^</h1>
    <br /><br />
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
body {
  background-color: #f0f0f0;
}
h1 {
  padding: 0;
  margin-top: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-self: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
