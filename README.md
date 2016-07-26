# neusoft_groupManage

##GET

- 获取部门与其班组信息
- param null
- return testDepartment

##POST

- 查询排班信息
- param testQueryData
- return testCsInfo

```
const testDepartment = [
    {
        // 部门编号
        'group_department_id': 1,
        'group_department_name': '部门1',
        'groups': [
            {
                'group_id': 1,
                'group_name': '班组1'
            },
            {
                'group_id': 2,
                'group_name': '班组2'
            },
            {
                'group_id': 3,
                'group_name': '班组3'
            }
        ]
    },
    {
        // 部门编号
        'group_department_id': 2,
        'group_department_name': '部门2',
        'groups': [
            {
                'group_id': 1,
                'group_name': '班组1'
            },
            {
                'group_id': 2,
                'group_name': '班组2'
            }
        ]
    },
    {
        // 部门编号
        'group_department_id': 3,
        'group_department_name': '部门3',
        'groups': [
            {
                'group_id': 1,
                'group_name': '班组1'
            },
            {
                'group_id': 2,
                'group_name': '班组2'
            },
            {
                'group_id': 3,
                'group_name': '班组3'
            },
            {
                'group_id': 4,
                'group_name': '班组4'
            }
        ]
    }
]
```

-------------------------

```
const testQueryData = {
    startTime: '2016-08-04',
    endTime: '', // nullable
    departmentId: 2, // 部门Id
    groupId: -1, //   班组Id  (groupId < 0 则不限制班组)
    page: {
        currentPage: 1, // 当前页
        showCount: 10, // 每页数量
        totalPage: 1 // 一共页数
    },  
}
```

----------------------------

```
const testCsInfo = {
    flag: true, // true为查询成功  false失败
    totalCount: 2, // 返回查询结果条数
    totalPage: 1, // 返回查询结果页数
    info: [
        {
            department: {
                departmentId: 1,
                departmentName: '部门1'
            },
            group: {
                groupId: 1,
                groupName: '班组1'
            },
            classSystem: {
                classSystemId: 1,
                classSystemName: '三班倒'
            },
            time: {
                startTime: '2016-08-03',
                endTime: '2016-09-03'
            }
        },
        {
            department: {
                departmentId: 2,
                departmentName: '部门2'
            },
            group: {
                groupId: 2,
                groupName: '班组2'
            },
            classSystem: {
                classSystemId: 3,
                classSystemName: '四班倒'
            },
            time: {
                startTime: '2016-08-15',
                endTime: '2016-09-15'
            }
        }
    ]
}
```
