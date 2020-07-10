<template>
    <div class="index">
        <!-- <div class="chooseequip block">选择设备</div>
        <el-select v-model="equipValue" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label">

            </el-option>
        </el-select> -->

        <el-cascader v-model="selectVal" placeholder="搜索设备" :options = "options" filterable @change="changEquip">

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
                    value: 'tv',
                    label: '电视'
                },
                {
                    value: 'computer',
                    label: '电脑'
                },
                {
                    value: 'ipads',
                    label: '平板'
                },
                {
                    value: 'cellphone',
                    label: '手机'
                },
                {
                    value: 'handequipment',
                    label: '手持设备'
                },
            ],
            selectVal: ''
        }
    },
    methods: {
        changEquip(val){
            this.$store.commit("saveEquipval",val);
            this.$router.push({
                path: `/equipinfo/`
            })
        }
    },
    created: function (){
        console.log(this.$router.params);
    },
    mounted(){
        //回显
        if(this.$store.state.configInfo.equipVal){
            var equipVal = this.$store.state.configInfo.equipVal;
            this.selectVal = equipVal;
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