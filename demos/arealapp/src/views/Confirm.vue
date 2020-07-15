<template>
  <div>
    <h1>Checkout</h1>
    <p>
	ONE LAST STEP!
    </p>

    <h2>Confirm</h2>

	<p>
	Your name: {{ cartInfo.name }}<br/>
	Your shipping address: {{ cartInfo.address.shipping }}<br/>
	Your billing address: {{ cartInfo.address.billing }}<br/>
	Your CC info: {{ cartInfo.cc }}
	</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
	cartInfo() { return this.$store.getters.cartDisplay; }
  }
}
</script>