<template>
  <Card style="width:350px; margin: 20px auto;">
    <p style="text-align: center" slot="title">学生信息管理系统 登陆入口</p>
    <Form ref="formInline" :model="formInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.u_account" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.u_password" placeholder="Password">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="Select">
          <Select v-model="formInline.u_type">
            <Option v-for="(item, index) in userTypes" :key="index" :value="item.code">{{item.title}}</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit()">登录</Button>
        </FormItem>
    </Form>
  </Card>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userTypes: [
        {title: '教工登录', code: '_teachers'},
        {title: '学生登录', code: '_students'}
      ],
      formInline: {
        u_account: '201511033423',
        u_password: '022130',
        u_type: '_students'
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$http('/admin/index/login', 'post', this.formInline).then(r => {
        localStorage.setItem('u_token', r.token)
        this.$router.push({
          name: 'IndexHome'
        })
      }).catch(e=> {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>

</style>
