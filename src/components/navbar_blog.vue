<template>
  <b-navbar
    type="light"
    class="navbar-light theme-nav fixed-top"
    toggleable="lg"
    fixed="top"
    v-b-scrollspy:nav-scroller
  >
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand class="navbar-brand" to="#">
        <img src="@/assets/images/logo.png" alt="logo" />
      </b-navbar-brand>
      <b-collapse class="default-nav" is-nav id="nav_collapse">
        <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item to="#">Home</b-nav-item>
          <b-nav-item to="#">about</b-nav-item>
          <b-nav-item to="#">feature</b-nav-item>
          <b-nav-item to="#">screenshot</b-nav-item>
          <b-nav-item to="#">team</b-nav-item>

          <b-nav-item-dropdown right-alignment text="blog" class="nav-link">
            <b-dropdown-item class="nav-link" to="#">
              Blog
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#">
              Blog list
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#">
              Blog details
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#">
              Left sidebar
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#">
              Right sidebar
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#">
              Details left sidebar
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#">
              Details right sidebar
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="#">
            price
          </b-nav-item>
          <b-nav-item to="#">
            contact us
          </b-nav-item>

          <b-nav-item-dropdown
            right-alignment
            href="#Other_page"
            text="Other page"
            class="nav-link "
          >
            <b-dropdown-item class="nav-link" to="#" :href="'/sign-in'">
              sign in
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#" :href="'/sign-up'">
              sign up
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#" :href="'/forget-Password'">
              Forget Password
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#" :href="'/thank-you'">
              Thank you
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#" :href="'/review'">
              Review
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#" :href="'/404'">
              404
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#" :href="'/faq'">
              FAQ
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#" :href="'/download'">
              Download
            </b-dropdown-item>
            <b-dropdown-item class="nav-link" to="#" :href="'/coming-soon'">
              coming soon
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar',
  beforeCreate: function() {
    document.body.className = '';
  },
};
</script>
