<template>
  <transition>
    <keep-alive>
      <div id="appRoot">
        <v-app>
          <template v-if="$route.meta.public">
            <router-view></router-view>
          </template>
          <template v-else>
            <!--<core-filter/>-->

            <core-toolbar />

            <core-drawer />

            <core-view />
          </template>
        </v-app>
      </div>
    </keep-alive>
  </transition>
</template>

<script></script>
<style scoped lang="scss">
/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
