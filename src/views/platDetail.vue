<template>
  <div>
    <el-table
      :data="tableData"
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
      <el-table-column label="操作">
          <template slot="header" slot-scope="">
          <el-button
            size="mini"
            type="success"
            @click="save()">保存</el-button>
          </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="chooseDefault(scope.$index, scope.row)">默认</el-button>
          <el-button
            size="mini"                                            
            type="danger"
            @click="toggleConfigVisible(scope.$index, scope.row)">配置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="配置" :visible.sync = "configVisible">
      <el-form :model="forms" :rules="rules" ref="forms">
      
      
      <el-form-item label="设备装填（横向、纵向）" :label-width="formLabelWidth" prop="isOrientation">
        <el-select v-model="forms.isOrientation" placeholder="请选择状态">
          <el-option label="横向" value="horizontal"></el-option>
          <el-option label="纵向" value="vertical"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="顶部导航宽度" :label-width="formLabelWidth" prop="topMenuWidth">
        <el-input v-model="forms.topMenuWidth" autocomplete="off" placeholder="请输入宽度"></el-input>
      </el-form-item>

      <el-form-item label="顶部导航高度" :label-width="formLabelWidth" prop="topMenuHeight">
        <el-input v-model="forms.topMenuHeight" autocomplete="off" placeholder="请输入高度"></el-input>
      </el-form-item>

      <el-form-item label="分辨率" :label-width="formLabelWidth" prop="resolutionPower">
        <el-input v-model="forms.resolutionPower" autocomplete="off" placeholder="请输入分辨率"></el-input>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetConfig()">取 消</el-button>
      <el-button type="primary" @click="subConfig()">确 定</el-button>
    </div>
    </el-dialog>

    <div>----------------------------</div>

    <plat-detail-com></plat-detail-com>
  </div>
</template>
<script>

  import PlatDetailCom from '../components/PlatDetailCom.vue'

    export default {
    components: {
      PlatDetailCom
    },
    data() {
      return {
        configRow: 0,
        tdWidth: 'auto',
        configVisible: false,//配置对话框
        formLabelWidth: '180px',
        
        tableData: [{
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
        forms:{
          name: "配置",
          isOrientation: '',
          topMenuWidth: '',
          topMenuHeight: '',
          resolutionPower: '',
          defaultisOrientation: '横向',
          defaulttopMenuWidth: '1240px',
          defaulttopMenuHeight: '960px',
          defaultresolutionPower: '123',
        },
        rules: {
          isOrientation: [
            { required: true, message: '请选择', trigger: 'change' },
          ],
          topMenuWidth: [
            { required: true, message: '请输入宽度', trigger: 'blur' },
          ],
          topMenuHeight: [
            { required: true, message: '请输入高度', trigger: 'blur' }
          ],
          resolutionPower: [
            { required: true, message: '请输入分辨率', trigger: 'blur' },
          ]
        },
      }
    },
    methods: {
      toggleConfigVisible(index, row){
        console.log(index,row);
        this.configRow = index;
        this.configVisible = true;
      },
      chooseDefault(index, row) {
        console.log(index,row);
        var lists = this.tableData[index];
        for(var key in lists){
            if(lists['default'+key]){
                lists[key] = lists['default'+key];
            }
        }
      },
      chooseConfig(index, row) {
        console.log(index, row);
      },
      save(){
          var dataList = this.tableData;
          for(var i = 0; i < dataList.length; i++){
              for(var key in dataList[i]){
                  if(dataList[i][key] == ''){
                      this.$message({
                          message: "请配置数据",
                          type: 'warning'
                      })
                      return
                  }
              }
          }

          this.$store.commit("saveBlockData",dataList)
          
          this.$router.push({
              path: `/MedioConfig/`,
              name: 'MedioConfig'
          })
      },
      subConfig(){
         var dataLists = this.tableData;
         this.$refs.forms.validate((valid) => {
          if (valid) {
            var forms = this.forms;
            //for(var i = 0; i < forms.length; i++){
              for(var key in forms){
                console.log(forms[key]);
                console.log(dataLists[0][key]);
                if(key.indexOf("default") < 0){
                  dataLists[this.configRow][key] = forms[key];
                }
              }
            //}
            console.log(dataLists);
            this.configVisible = false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetConfig(){
        this.$refs.forms.resetFields();
      }
    },
    mounted:function () {
      if(this.$store.state.configInfo.blockData.length > 0){
        var blockData = this.$store.state.configInfo.blockData;
        this.tableData = blockData;
      }

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
          }
      ])
    }
  }
</script>

<style>

</style>