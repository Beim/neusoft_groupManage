# neusoft_groupManage

##GET

>- 获取部门与其班组信息
- param null
- return testDepartment  // 数组

--------------------------------

>- 获取可用的班制的信息
- param null
- return testClassSystems

---------------------------------

##POST

>- 查询排班信息
- param testQueryData
- return testCsInfo

----------------------------

>- 获取时间范围内 符合要求的部门与其班组信息
- param testTimeArrange // 对象
- return testDepartment // 数组

------------------------------

>- 提交排班信息
- param testArrangements
- return testArrangeInfo

------------------------------

>- 删除排班信息
- param testDelete
- return testDelInfo

-----------------------------

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
    start_time: '2016-08-04',
    end_time: '', // nullable
    departmentId: 2, // 部门Id
    group_id: -1, //   班组Id  (groupId < 0 则不限制班组)
    is_del: -1, // 启用状态 -1 为不限制启用状态，  0:待用,1:停用,2:使用中,3:所选班制已停用
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
    flag: true,
    totalCount: 2,
    totalPage: 1,
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
            },
            isDel: 0
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
            },
            isDel: 1
        },
        {
            department: {
                departmentId: 3,
                departmentName: '部门3'
            },
            group: {
                groupId: 3,
                groupName: '班组3'
            },
            classSystem: {
                classSystemId: 3,
                classSystemName: '四班倒'
            },
            time: {
                startTime: '2016-08-15',
                endTime: '2016-09-15'
            },
            isDel: 2
        }
    ]
}
```
-----------------------------

```
const testTimeArrange = {
    start_time: '2016-07-27',
    end_time: '2016-08-27'
}
```

----------------------------

```
const testClassSystems = [
    {
        cs_master_id: 1,
        class_system_num: 0, // 0则不限制人数
        class_system_name: '班制1',
        class_system_des: '描述1',
        scheduling_circle: '1',
        class_kind: {
            1: '正常'
        }
    },
    {
        cs_master_id: 2,
        class_system_num: 0,
        class_system_name: '班制2',
        class_system_des: '描述3',
        scheduling_circle: '2',
        class_kind: {
            1: '早',
            2: '晚'
        }
    },
    {
        cs_master_id: 3,
        class_system_num: 3,
        class_system_name: '班制3',
        class_system_des: '描述3',
        scheduling_circle: '3',
        class_kind: {
            1: '早',
            2: '晚',
            '-1': '休'
        }
    }
]

```

-----------------------------------------

```
const testArrangeInfo = {
    flag: true, // true 则查询成功 false 失败
}
```

------------------------------

```
const testArrangements = {
    cs_master_id: 123, // 班制id
    start_time: '2016-07-28',
    end_time: '2016-08-28',
    arrangements: [
        {
            class_kind: 2, // 班制类型
            department_id: 1,
            group_id: 111 // 班组id
        }
    ]
}
```

--------------------------

```
const testDelete = {
    groupId: 1,
    startTime: '2016-07-15', 
    endTime: '2016-07-28', 
    isAll: 0,
    isDel: -1 // -1 为删除记录，否则改为相应的启用状态
}
```

------------------------

```
const testDelInfo = {
    flag: true // true为删除成功， false失败
}
```