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
    departmentName: '部门2', // 部门名称
    groupName: '', // nullable  班组名称
    page: '1',  // 当前页
    pageNum: '10'  //  每页数量
}
```

----------------------------

```
const testCsInfo = {
    totalCount: 123,
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
