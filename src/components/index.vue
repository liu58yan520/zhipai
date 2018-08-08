
<template>
<div class="index">
    <el-container>
        <el-header style="height:auto"> <myHeader></myHeader></el-header>
        <el-main><myMain/></el-main>
        <el-footer><myFooter/></el-footer>
    </el-container>
</div>
    
</template>
<script>
import myMain from "./main";
export default {
    components:{
        myMain
    }
}
</script>
