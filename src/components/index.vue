
<template>
<div class="index">
    <el-container>
        <el-header> <myHeader/></el-header>
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
