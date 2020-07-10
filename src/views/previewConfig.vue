<template>

    <div>
        <h1>{{name}}</h1>

        <el-form :model="medioForm" label-width="100px"> 

            <el-form-item label="设备:">
                <el-input v-model="medioForm.equipVal" disabled></el-input>
            </el-form-item>
                <el-form-item label="设备信息">
                    <el-table :data='medioForm.equipData' border max-height="500px">
                    <el-table-column fixed prop='thoder' label='序号'></el-table-column>
                    <el-table-column fixed prop='equipname' label='设备名称'></el-table-column> 
                    <el-table-column fixed prop='equiptag' label='设备标识'></el-table-column> 
                    <el-table-column fixed prop='equipratio' label='设备宽高比'></el-table-column> 
                    <el-table-column fixed prop='equipheight' label='高度'></el-table-column> 
                    <el-table-column fixed prop='equipwidth' label='宽度'></el-table-column> 
                    <el-table-column fixed prop='nets' label='网络'></el-table-column> 
                    <el-table-column fixed prop='orientation' label='方向'></el-table-column> 
                    <el-table-column fixed prop='resolution' label='分辨率'></el-table-column> 
                </el-table>
            </el-form-item>

            <el-form-item label="展示媒介:">
                <el-input v-model="medioForm.medioVal" disabled></el-input>
            </el-form-item>

            <el-form-item label="配置区块:">
                <el-table
                    :data="medioForm.blockData"
                    style="width: 100%"
                    border>
                    <el-table-column
                        label="区块"
                        max-width="180px">
                        <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.block }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="设备横向、纵向"
                        :width="tdWidth"
                        prop="isOrientation">
                    </el-table-column>
                    <el-table-column
                        label="顶部导航宽度"
                        :width="tdWidth"
                        prop="topMenuWidth">
                    </el-table-column>
                    <el-table-column
                        label="顶部导航高度"
                        :width="tdWidth"
                        prop="topMenuHeight">
                    </el-table-column>
                    <el-table-column
                        label="分辨率"
                        :width="tdWidth"
                        prop="resolutionPower">
                    </el-table-column>
                    </el-table>
            </el-form-item>

            <el-form-item label="媒体设置:">
                <el-table
                    :data="medioForm.medioData"
                    style="width: 100%"
                    border>
                    <el-table-column
                    label="内容"
                    prop="block"
                    max-width="180px">
                    </el-table-column>
                    <el-table-column
                    label="浏览器宽度、高度"
                    :width="tdWidth"
                    prop="webWidthHeight">
                    </el-table-column>
                    <el-table-column
                    label="设备屏幕宽高"
                    :width="tdWidth"
                    prop="deviceWidthHeight">
                    </el-table-column>
                    <el-table-column
                    label="设备状态(横向、纵向)"
                    :width="tdWidth"
                    prop="equipState">
                    </el-table-column>
                    <el-table-column
                    label="可视宽高比"
                    :width="tdWidth"
                    prop="visibleRatio">
                    </el-table-column>
                    <el-table-column
                    label="设备宽高比"
                    :width="tdWidth"
                    prop="equipRatio">
                    </el-table-column>
                    <el-table-column
                    label="分辨率"
                    :width="tdWidth"
                    prop="resolutionRatio">
                    </el-table-column>
                </el-table>
            </el-form-item>

        </el-form>


    </div>

</template>


<script>

export default{
    data(){
        return {
            name: '配置预览',
            tdWidth: 'auto',
            medioForm: {
                equipVal: "TV",
                medioVal: "111",
                blockData: [{
                    block: '顶部导航配置',
                    isOrientation: '',
                    topMenuWidth: '',
                    topMenuHeight: '',
                    resolutionPower: '',
                    defaultisOrientation: '横向',
                    defaulttopMenuWidth: '1240px',
                    defaulttopMenuHeight: '960px',
                    defaultresolutionPower: '123',
                    }, {
                    block: '左侧导航配置',
                    isOrientation: '',
                    topMenuWidth: '',
                    topMenuHeight: '',
                    resolutionPower: '',
                    defaultisOrientation: '横向',
                    defaulttopMenuWidth: '1240px',
                    defaulttopMenuHeight: '960px',
                    defaultresolutionPower: '123',
                    }, {
                    block: '聊天框配置',
                    isOrientation: '',
                    topMenuWidth: '',
                    topMenuHeight: '',
                    resolutionPower: '',
                    defaultisOrientation: '横向',
                    defaulttopMenuWidth: '1240px',
                    defaulttopMenuHeight: '960px',
                    defaultresolutionPower: '123',
                    }, {
                    block: '工作台配置',
                    isOrientation: '',
                    topMenuWidth: '',
                    topMenuHeight: '',
                    resolutionPower: '',
                    defaultisOrientation: '横向',
                    defaulttopMenuWidth: '1240px',
                    defaulttopMenuHeight: '960px',
                    defaultresolutionPower: '123',
                    }, {
                    block: '自定义工作台配置',
                    isOrientation: '',
                    topMenuWidth: '',
                    topMenuHeight: '',
                    resolutionPower: '',
                    defaultisOrientation: '横向',
                    defaulttopMenuWidth: '1240px',
                    defaulttopMenuHeight: '960px',
                    defaultresolutionPower: '123',
                    }, {
                    block: '商务块配置',
                    isOrientation: '',
                    topMenuWidth: '',
                    topMenuHeight: '',
                    resolutionPower: '',
                    defaultisOrientation: '横向',
                    defaulttopMenuWidth: '1240px',
                    defaulttopMenuHeight: '960px',
                    defaultresolutionPower: '123',
                    }],
                medioData: [{
                    block: '媒体配置',
                    webWidthHeight: '',
                    defaultwebWidthHeight: '1920/1020',
                    deviceWidthHeight: '',
                    defaultdeviceWidthHeight: '1020/780',
                    equipState: '',
                    defaultequipState: 'vertical',
                    visibleRatio: '',
                    defaultvisibleRatio: '1.2',
                    equipRatio: '',
                    defaultequipRatio: '1.3',
                    resolutionRatio: '',
                    defaultresolutionRatio: '680',
                    isOrientation: '',
                    topMenuWidth: '',
                    resolutionPower: '',
                    defaultisOrientation: '横向',
                    defaulttopMenuWidth: '1240px',
                    defaultresolutionPower: '123',
                }],
                equipData: [
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
            }
        }
    },
    mounted: function (){
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
            },
            {
                name: "配置区块",
                urls: '/PlatDetail/'
            },
            {
                name: "媒体设置",
                urls: '/MedioConfig/'
            },
            {
                name: "配置预览",
                urls: '/previewConfig/'
            },
        ]);

        //返回store里面的配置
        if(this.$store.state){
            var states = this.$store.state;
            console.log("---------------------------")
            console.log(states);
            //选择设备
            this.medioForm.equipVal = states.configInfo.equipVal;
            
            //设备信息
            this.medioForm.equipData = states.configInfo.equipInfo;

            //选择媒体
            this.medioForm.medioVal = states.configInfo.medioVal;

            //区块配置
            this.medioForm.blockData = states.configInfo.blockData;

            //媒体配置
            this.medioForm.medioData = states.configInfo.medioInfo;
        }
    }
}

</script>

<style>


</style>