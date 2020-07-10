<template>
    <div class="index">

        <el-cascader v-model="medioValue" placeholder="展示媒介" :options = "options" filterable @change="changEquip">

        </el-cascader>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data(){
        return {
            options: [
                {
                    value: 'clientConfig',
                    label: '客户端展示配置'
                },
                {
                    value: 'appConfig',
                    label: 'APP展示配置'
                },
                {
                    value: 'stretchConfig',
                    label: '外展展示配置'
                },
                {
                    value: 'workPlatConfig',
                    label: '自定义工作台展示配置'
                },
            ],
            medioValue: ''
        }
    },
    methods: {
        changEquip(val){
            this.$store.commit("saveMedioval",val);
            
            this.$router.push({
                path: `/PlatDetail/`
            })

        }
    },
    mounted(){
        if(this.$store.state.configInfo.medioVal){
            var medioVal = this.$store.state.configInfo.medioVal;
            this.medioValue = medioVal;
        }
    }
}
</script>
<style scoped>
    .index{
        padding: 8px;
        text-align: center;
    }
    .chooseequip{
        font-weight: bold;
        text-align: left;
        font-size: 24px;
        color: #000;
        padding: 10px;
    }
</style>