<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
			<el-col  class="rightmenu" :span="4" style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" background-color="#324057" text-color="#fff" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage">
						<i class="el-icon-menu"></i>西本后台管理系统</el-menu-item>
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-document"></i>客户端维护</template>
						<el-menu-item index="addClient">新增客户端</el-menu-item>
						<el-menu-item index="editClient">编辑客户端</el-menu-item>
						<el-menu-item index="createKey">生成密钥对</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-plus"></i>用户维护</template>
						<el-menu-item index="addUser">新增用户</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-star-on"></i>角色权限维护</template>
						<el-menu-item index="addRole">新增角色</el-menu-item>
						<el-menu-item index="roleAuth">已分配权限查看</el-menu-item>
						<el-menu-item index="editAuth">权限维护</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title">
							<i class="el-icon-edit"></i>用户角色分配</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="allotRole">分配角色</el-menu-item>
						<el-menu-item index="addUserClient">添加用户至客户端</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title">
							<i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="7">
						<template slot="title">
							<i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
					<router-view></router-view>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/mixin';
.manage_page {
}
</style>
