<template>
<div class="main">
<banner></banner>
<about></about>
<myMap></myMap>
<work></work>
<comment></comment>
</div>

</template>
<script>
import banner from "./main/banner";
import about from "./main/about";
import myMap from "./main/map";
import work from "./main/work";
import comment from "./main/comment";
export default {
    components:{
        banner,
        about,
        myMap,
        work,
        comment
    }
}
</script>
