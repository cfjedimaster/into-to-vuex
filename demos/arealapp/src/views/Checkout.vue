<template>
  <div>
    <h1>Checkout</h1>
    <p>
    Welcome to the long and laborious checkout process. You will have so much fun!
    </p>

    <h2>Your Personal Info</h2>
    <form>
      <p>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName">
      </p>
      <p>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName">
      </p>
      <p>
      <label for="email">Email Name:</label>
      <input type="email" id="email" v-model="email">
      </p>

      <button @click.prevent="nextStep">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName:'',
      lastName:'',
      email:''
    }
  },
  methods: {
    nextStep() {
      this.$store.commit('setName', { first: this.firstName, last: this.lastName });
      this.$store.commit('setEmail', this.email);
      this.$router.push('shippingaddress');
    }
  }
}
</script>