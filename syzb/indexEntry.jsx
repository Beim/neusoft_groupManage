const React = require('react')
const ReactDOM = require('react-dom')
// const ReactUI = require('rctui')
import { Datepicker, Grid, borderGridStyle, FormControl } from 'rctui';

const rce = React.createElement.bind()

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

let Query = React.createClass({
    getDepartmentInfo() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(testDepartment)
            }, 2000)
        })
    },

    departmentValidator(value) {
        this.setState({queryDepartmentName: value, queryGroupName: ''})
    },

    groupValidator(value) {
        this.setState({queryGroupName: value})
    },

    queryHandler() {
        if (this.state.startTime === '') return alert('开始时间不能为空')
        if (this.state.queryDepartmentName === '') return alert('部门不能为空')
        let data = {
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            departmentName: this.state.queryDepartmentName,
            groupName: this.state.queryGroupName
        }
        console.log(data)
    },

    getInitialState() {
        return {
            startTime: '',
            endTime: '',
            departmentInfo: [],
            queryDepartmentName: '',
            queryGroupName: ''
        };
    },

    componentDidMount() {
        this.getDepartmentInfo().then((departmentInfo) => {
            this.setState({
                departmentInfo: departmentInfo
            })
        })
    },

    render() {
        let groups = []
        let departments = this.state.departmentInfo.map((value) => {
            if (value.group_department_name === this.state.queryDepartmentName) {
                groups = value.groups.map((value1) => {
                    return value1.group_name
                })
            }
            return value.group_department_name
        })
        return (
            <div className='queryContainer'>
                <div className='queryHead'>
                    <Grid width={1/4} offset={0} style={borderGridStyle} className='limitation'>
                        <label>开始时间:</label>
                        <Datepicker min={Date.now() - 1000*60*60*24} max={this.state.endTime} type="date" onChange={(value) => this.setState({ startTime: value })} className='limitation-limit'/>
                        
                    </Grid>
                    <Grid width={1/4} offset={0} style={borderGridStyle} className='limitation'>
                        <label>结束时间:</label>
                        <Datepicker min={this.state.startTime} readOnly={this.state.startTime === ''} type="date" onChange={(value) => this.setState({ endTime: value })} className='limitation-limit'/>
                        
                    </Grid>
                    <Grid width={1/4} offset={0} style={borderGridStyle} className='limitation'>
                        <label>部门：</label>
                        <FormControl validator={{func: this.departmentValidator}} name="selectDepartment" label="部门" data={departments} type="select" className='limitation-limit' />
                    </Grid>
                    <Grid width={1/4} offset={0} style={borderGridStyle} className='limitation'>
                        <label>班组：</label>
                        <FormControl validator={{func: this.groupValidator}} name="selectGroup" label="班组" data={groups} type="select" className='limitation-limit' />
                    </Grid>

                    <Grid width={1/4} offset={3/4} style={borderGridStyle} > 
                        <div className='queryAndAdd'>
                            <button type='button' className='btn btn-info b' onClick={this.queryHandler}>查询</button>
                            <button type='button' className='btn btn-success b'>新增</button>
                        </div>
                    </Grid>
                </div>
                <div className='queryBody'>
                    <table className='table event-table table-striped table-advance table-hover'>
                        <thead>
                            <tr>
                                <th className='th'>序号</th>
                                <th className='th'>部门</th>
                                <th className='th'>班组</th>
                                <th className='th'>班制</th>
                                <th className='th'>起止时间</th>
                                <th className='th'>操作</th>
                            </tr>
                        </thead>
                        <tbody className='tableBody'>
                            <tr>
                                <td>1</td>
                                <td>厂部</td>
                                <td>小车</td>
                                <td>三班倒</td>
                                <td>2016-07-25 至 2016-08-25</td>
                                <td className='tdBtn'>
                                    <button className='btn btn-primary btn-xs'>
                                        <i className='fa fa-pencil'></i>
                                    </button>
                                    <button className='btn btn-danger btn-xs'>
                                        <i className='fa fa-trash-o'></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
})

let Main = React.createClass({
    
    render() {
        return (
            <div id='main'>
                <div className='header'>
                    <p className='top'>
                        <span className='glyphicon glyphicon-book'/>
                        班组排班管理
                    </p>
                </div>
                <br/>
                <br/>
                <Query/>
            </div>
        )
    }
})

ReactDOM.render(<Main/>, document.getElementById('container'))
