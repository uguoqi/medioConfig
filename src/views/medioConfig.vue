<template>
  <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        border>
        <el-table-column
          label="内容"
          prop="block"
          max-width="180px">
          <!-- <template slot-scope="">
            <span style="margin-left: 10px">数值</span>
          </template> -->
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

        <el-form-item label="浏览器宽度、高度" :label-width="formLabelWidth" prop="webWidthHeight">
          <el-input v-model="forms.webWidthHeight" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="设备屏幕宽高" :label-width="formLabelWidth" prop="deviceWidthHeight">
          <el-input v-model="forms.deviceWidthHeight" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="设备装填（横向、纵向）" :label-width="formLabelWidth" prop="equipState">
          <el-select v-model="forms.equipState" placeholder="请选择状态">
            <el-option label="横向" value="horizontal"></el-option>
            <el-option label="纵向" value="vertical"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="可视宽高比" :label-width="formLabelWidth" prop="visibleRatio">
          <el-input v-model="forms.visibleRatio" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>

        <el-form-item label="分辨率" :label-width="formLabelWidth" prop="equipRatio">
          <el-input v-model="forms.equipRatio" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>


        <el-form-item label="分辨率" :label-width="formLabelWidth" prop="resolutionRatio">
          <el-input v-model="forms.resolutionRatio" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetConfig()">取 消</el-button>
        <el-button type="primary" @click="subConfig()">确 定</el-button>
      </div>
      </el-dialog>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          configRow: 0,
          tdWidth: 'auto',
          tableData: [{
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
          configVisible: false,//配置对话框
          formLabelWidth: '180px',
          forms:{
            name: "配置",
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
          },
          rules: {
            webWidthHeight: [
              { required: true, message: '请输入浏览器信息', trigger: 'blur' },
              { message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            deviceWidthHeight: [
              { required: true, message: '请输入设备信息', trigger: 'blur' },
            ],
            equipState: [
              { required: true, message: '请选择设备状态', trigger: 'change' }
            ],
            visibleRatio: [
              { required: true, message: '请输入可视宽高比', trigger: 'blur' },
            ],
            equipRatio: [
              { required: true, message: '请输入设备宽高比', trigger: 'blur' },
            ],
            resolutionRatio: [
              { required: true, message: '请输入分辨率', trigger: 'blur' },
            ]
          }
          
        }
      },
      mounted: function (){

        if(this.$store.state.configInfo.medioInfo.length > 0){
          var medioInfo = this.$store.state.configInfo.medioInfo;
          this.tableData = medioInfo;
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
            },
            {
                name: "媒体设置",
                urls: '/MedioConfig/'
            }
        ])
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

            this.$store.commit("saveMedioInfo",dataList)

            this.$router.push({
                path: `/PreviewConfig/`,
                name: 'PreviewConfig'
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
                    if(forms[key] == ''){
                      this.$message({
                          message: "请配置数据",
                          type: 'warning'
                      })
                      return
                    }
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
      }
  }
</script>

<style>
.el-form-item__content{
  text-align: left;
}
.el-form-item__content .el-input{
  width:  300px;
  position: relative;
  font-size: 14px;
  display: inline-block;
}
.demo-block.demo-dialog .el-input, .demo-block.demo-dialog .el-select{
  width:  300px;
  position: relative;
  font-size: 14px;
  display: inline-block;
}
</style>