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
      <b-navbar-brand class="navbar-brand" to="/">
        <img src="@/assets/images/logo.png" alt="logo" />
      </b-navbar-brand>
      <b-collapse class="default-nav" is-nav id="nav_collapse">
        <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="#about">about</b-nav-item>
          <b-nav-item href="#feature">feature</b-nav-item>
          <b-nav-item href="#screenshot">screenshot</b-nav-item>
          <b-nav-item href="#team">team</b-nav-item>

          <b-nav-item-dropdown right-alignment text="blog" class="nav-link">
            <b-dropdown-item class="nav-link" :href="'#blog'">
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

          <b-nav-item href="#price">
            price
          </b-nav-item>
          <b-nav-item href="#contact">
            contact us
          </b-nav-item>

          <b-nav-item to="/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
