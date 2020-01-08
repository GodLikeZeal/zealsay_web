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

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
