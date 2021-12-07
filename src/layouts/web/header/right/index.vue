<template>
    <div class="header-right">
        <Search />
        <UserInfo />
        <Navbar />
    </div>
</template>
<script>
import Search from './SearchBox.vue';
import Navbar from './Navbar.vue';
import UserInfo from './UserInfo.vue';
export default {
    components: {
        Search,
        Navbar,
        UserInfo
    }
}
</script>