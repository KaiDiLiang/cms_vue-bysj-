<template>
  <Table border :columns="columns1" :data="data1"></Table>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        { title: '编号', key: 'user_id' },
        { title: '用户账号', key: 'user_account' },
        { title: '住址', key: 'address' },
        {
          title: 'Action',
          key: 'action',
          fixed: 'right',
          width: 120,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                },
                '修改'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      data1: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData () {
      this.$http('/admin/user/index', 'post')
        .then(r => {
          this.data1 = r.rows
        })
        .catch(e => {
          console.log(e)
        })
    },
    fuckdelete () {
      this.$http('/admin/user/delete', 'post', {
        primary: 'user_id',
        ids: [1]
      })
    },
    fuckadd () {
      this.$http('/admin/user/add', 'post', {
        row: {
          user_account: '201511033430',
          user_password: '033430'
        }
      })
    }
  }
}
</script>