<template>
  <div>
    <h1>Checkout</h1>
    <p>
    Now enter your billing address!
    </p>

    <h2>Billing Address</h2>
    <form>
      <p>
      <label for="streetAddress">Street Address:</label>
      <input type="text" id="streetAddress" v-model="streetAddress">
      </p>
      <p>
      <label for="city">City:</label>
      <input type="text" id="city" v-model="city">
      </p>
      <p>
      <label for="state">State:</label>
      <input type="text" id="state" v-model="state">
      </p>
      <p>
      <label for="zip">Zip:</label>
      <input type="text" id="zip" v-model="zip">
      </p>

      <button @click.prevent="nextStep">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      streetAddress:'',
      city:'',
      state:'',
      zip:''
    }
  },
  methods: {
    nextStep() {
      this.$store.commit('setAddress', { 
          type:'billing', 
          address: {
            street:this.streetAddress,
            city:this.city,
            state:this.state,
            zip:this.zip
          }
        });
      this.$router.push('ccinfo');
    }
  }
}
</script>