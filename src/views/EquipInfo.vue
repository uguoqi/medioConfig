<template>
    <div class="equipInfo">   
        <el-table :data='tabledata' border max-height="500px">
            <el-table-column fixed prop='thoder' label='序号'></el-table-column>
            <el-table-column fixed prop='equipname' label='设备名称'></el-table-column> 
            <el-table-column fixed prop='equiptag' label='设备标识'></el-table-column> 
            <el-table-column fixed prop='equipratio' label='设备宽高比'></el-table-column> 
            <el-table-column fixed prop='equipheight' label='高度'></el-table-column> 
            <el-table-column fixed prop='equipwidth' label='宽度'></el-table-column> 
            <el-table-column fixed prop='nets' label='网络'></el-table-column> 
            <el-table-column fixed prop='orientation' label='方向'></el-table-column> 
            <el-table-column fixed prop='resolution' label='分辨率'></el-table-column> 
            <el-table-column  align="right">
                <template slot="header" slot-scope="">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                    type="success"
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">确定</el-button>
                </template>
                </el-table-column>
        </el-table>

        <!-- <p>-----------------------------------------------------------------------</p> -->

        <!-- <equip-info-com>

        </equip-info-com> -->
    </div>
</template>

<script>

// import EquipInfoCom from "../components/EquipInfoCom.vue"

export default {
    // components: {
    //     EquipInfoCom
    // },
    data() {
        return {
            tabledata: [
                {
                    thoder: 1,
                    equipname: "电视",
                    equiptag: "tv",
                    equipratio: "1.1",
                    equipheight: "1100",
                    equipwidth: "1000",
                    nets: "https",
                    orientation: "横向",
                    resolution: "resolution",
                    operation: "配置"
                },
                {
                    thoder: 2,
                    equipname: "电脑",
                    equiptag: "computer",
                    equipratio: "1.2",
                    equipheight: "1100",
                    equipwidth: "1000",
                    nets: "https",
                    orientation: "横向",
                    resolution: "resolution",
                    operation: "配置"
                },
                {
                    thoder: 3,
                    equipname: "平板",
                    equiptag: "ipads",
                    equipratio: "1.2",
                    equipheight: "1100",
                    equipwidth: "1000",
                    nets: "https",
                    orientation: "横向",
                    resolution: "resolution",
                    operation: "配置"
                },
                {
                    thoder: 4,
                    equipname: "手机",
                    equiptag: "cellphone",
                    equipratio: "1.2",
                    equipheight: "1100",
                    equipwidth: "1000",
                    nets: "https",
                    orientation: "横向",
                    resolution: "resolution",
                    operation: "配置"
                },
                {
                    thoder: 5,
                    equipname: "手持设备",
                    equiptag: "handequipment",
                    equipratio: "1.2",
                    equipheight: "1100",
                    equipwidth: "1000",
                    nets: "https",
                    orientation: "横向",
                    resolution: "resolution",
                    operation: "配置"
                },
            ],
            search: ''
        }
    },
    mounted (){
        
        //筛选数据
        var val = this.$store.state.configInfo.equipVal;
        if(val){
            var tabledatas = this.tabledata;
            this.$store.state.equipName = val;
            if(tabledatas && tabledatas.length){
                for(var i = tabledatas.length-1; i >= 0 ; i--){
                    if(val != tabledatas[i].equiptag){
                        tabledatas.splice(i,1)
                    }
                }
            }
        }else {
            //回显数据
            if(this.$store.state.configInfo.equipInfo){
                var equipInfo = this.$store.state.configInfo.equipInfo;
                this.tabledata = equipInfo;
            }
        }
        //修改路径面包屑
        console.log(this)
        this.$emit("changerouter",[
            {
                name: '选择设备',
                urls: '/'
            },
            {
                name: '设备信息',
                urls: `/equipinfo/`
            },
        ]);

        
        
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
            this.$store.commit("saveEquipInfo",this.tabledata);

            this.$emit("changerouter",[
                {
                    name: '选择设备',
                    urls: '/'
                },
                {
                    name: '设备信息',
                    urls: '/equipinfo/'
                },
                {
                    name: "展示媒介",
                    urls: '/ChooseMedio/'
                }
            ])

            this.$router.push({
                path: `/chooseMedio/`
            })
        },
    }
}
</script>
<style scoped>

</style>