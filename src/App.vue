<template>
  <div id="appRoot">
    <template v-if="!$route.meta.public">
      <v-app>
        <!--<core-filter/>-->

        <core-toolbar />

        <core-drawer />

        <core-view />
      </v-app>
    </template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script></script>
<style scoped lang="scss">
/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
