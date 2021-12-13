<template>
  <a-menu
    mode="inline"
    :default-open-keys="[openKey]"
    :selected-keys="[current]"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <template v-for="menu in menuList">
      <template v-if="menu.children">
        <a-sub-menu :key="menu.path">
          <span slot="title">
            <a-icon :type="menu.icon" />{{ menu.name }}
          </span>
          <a-menu-item
            v-for="m in menu.children"
            :key="m.path"
            @click="showDetail(m.path)"
          >
            <a-icon :type="m.icon" />{{ m.name }}
          </a-menu-item>
        </a-sub-menu>
      </template>
      <template v-else>
        <a-menu-item :key="menu.path" @click="showDetail(menu.path)">
          <a-icon :type="menu.icon" />{{ menu.name }}
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>

<script>
import menuList from "./menu";

// 获取所有存在子元素的菜单
function getMenuOpenKeys(menu) {
  const list = [];
  menu.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        list.push({
          pathname: child.path,
          openKey: item.path,
        });
      });
    }
  });
  return list;
}

const menuMenuOpenKeys = getMenuOpenKeys(menuList);

export default {
  data() {
    return {
      current: "/admin",
      openKey: "",
      menuList,
    };
  },
  created() {
    this.current = this.$route.path;
    const target = menuMenuOpenKeys.find(
      (item) => item.pathname === this.current
    );
    this.openKey = target ? target.openKey : "";
  },
  methods: {
    showDetail(path) {
      this.$router.push(path);
      this.current = path;
    },
  },
};
</script>