<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/inquiries">
        <md-icon>mail</md-icon>
        <p>Inquiries</p>
      </sidebar-link>
      <sidebar-link to="/projects">
        <md-icon>apartment</md-icon>
        <p>Projects</p>
      </sidebar-link>
      <sidebar-link to="/news">
        <md-icon>public</md-icon>
        <p>News</p>
      </sidebar-link>
      <sidebar-link to="/users">
        <md-icon>people</md-icon>
        <p>Users</p>
      </sidebar-link>
      <sidebar-link to="/user-types">
        <md-icon>assignment_ind</md-icon>
        <p>User Types</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
