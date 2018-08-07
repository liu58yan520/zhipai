<template>
<div class="main">
    <banner/>
    <about/>
    <myMap/>
    <work/>
    <comment/>
    <friend/>
</div>

</template>
<script>
import banner from "./main/banner"
import about from "./main/about"
import myMap from "./main/map"
import work from "./main/work"
import comment from "./main/comment"
import friend from "./main/friend"
export default {
    components:{
        banner,
        about,
        myMap,
        work,
        comment,
        friend
    }
}
</script>
