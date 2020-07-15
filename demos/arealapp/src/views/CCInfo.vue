<template>
  <div>
    <h1>Checkout</h1>
    <p>
    You're almost done!
    </p>

    <h2>Your CC Info (don't really)</h2>
    <form>
      <p>
      <label for="ccnum">CC Num:</label>
      <input type="text" id="ccnum" v-model="ccnum">
      </p>
      <p>
      <label for="expmonth">Exp (Month/Year):</label>
      <input type="text" id="expmonth" v-model="expmonth" size="2"> /
      <input type="text" id="expyear" v-model="expyear" size="2">
      </p>

      <button @click.prevent="nextStep">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ccnum:'',
      expmonth:'',
      expyear:''
    }
  },
  methods: {
    nextStep() {
      this.$store.commit('setPaymentInfo', { num:this.ccnum, expmonth:this.expmonth, expyear:this.expyear });
      this.$router.push('confirm');
    }
  }
}
</script>