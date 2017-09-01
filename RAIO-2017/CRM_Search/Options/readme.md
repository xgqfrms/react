# Options



```jsx

/* 

Sorts:
    {
        key: "k-s",
        name: "Sorts",
        type: "array",
        value: "select 1 = 请先选择排序字段: (? multi table ? )dynamic output desc; select 2 =  排序方式，升序或者降序: (升序),(降序),(无序)",
        description: "排序字段，支持排序组合"
    }

// ["asc(升序)", "desc(降序)", "no(无序)"]

排序方式: 
    <Select
        placeholder="排序方式，升序或者降序: (升序),(降序),(无序)"
        > 
        <Option value="descend">升序</Option>
        <Option value="ascend">升序</Option>
        <Option value="null">无序</Option>
    </Select>

Page
    {
        key: "k-p",
        name: "ShKindCode",
        type: "object",
        value: "input 1 = 请求的页数：1 ; input 2 = 每页的大小：100",
        description: "分页参数"
    }

OutField:
    {
        key: "k-of",
        name: "OutField",
        type: "array",
        value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
        description: "数据输出的字段，用于输出字段过滤，当输出字段数量小于不输出字段数量时采用"
    }

IgnoreField:
    {
        key: "k-if",
        name: "IgnoreField",
        type: "array",
        value: "multi select options 1 = dynamic output desc (全选/全不选/customize)",
        description: "数据输出的字段，用于输出字段过滤，当输出字段数量大于不输出字段数量时采用"
    }

Group

"Group": `/"AnyManagedFundsRow.A0"/"AnyManagedFundsRow.A1"/"BasicInformationRow.A3"/"BasicInformationRow.A5"`

// 单选 select
// output multi tables to one


    <RadioGroup
        onChange={this.onChange}
        value={this.state.value}>
        <Radio value="true">
            是
        </Radio>
        <Radio value="false">
            否
        </Radio>
    </RadioGroup>


// 单选 radio
// output multi tables to one



Filters

// disabled








FastDateFilterType
    {
        key: "k-fdft",
        name: "FastDateFilterType",
        type: "string",
        value: "select 1 = fixed ((最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后) (自定义 ? datapicker ))",
        description: "日期 快速过滤类型"
    }

const FDFT = [(最新日期) (今年以来) (近一月) (近三月) (近六月) (近一年) (近二年) (近三年) (近五年) (全部) (上市以前) (上市以后)];

// fixed ("LatestTime" / "CurrentYear") 12 select

// input FastDateFilterType

const FDFT = [
    "LatestTime(最新日期)",
    "CurrentYear(今年以来)",
    "Latest1Month(近一月)",
    "Latest3Month(近三月)",
    "Latest6Month(近六月)",
    "Latest1Year(近一年)",
    "Latest2Year(近二年)",
    "Latest3Year(近三年)",
    "Latest5Year(近五年)",
    "AllYear(全部)",
    "ListedBefore(上市以前)",
    "ListedAfter(上市以后)",
    "Customer(自定义)"
];
// regex


const FDFT = [
    {"LatestTime":"最新日期"},
    {"CurrentYear":"今年以来"},
    {"Latest1Month":"近一月"},
    {"Latest3Month":"近三月"},
    {"Latest6Month":"近六月"},
    {"Latest1Year":"近一年"},
    {"Latest2Year":"近二年"},
    {"Latest3Year":"近三年"},
    {"Latest5Year":"近五年"},
    {"AllYear":"全部"},
    {"ListedBefore":"上市以前"},
    {"ListedAfter":"上市以后"},
    {"Customer":"自定义"}
];

FDFT.map(
    (value, index) => {
        console.log(`value = `, value);
        // console.log(`value.index = `, value.index);
        // console.log(`value[index] = `, value[index]);
        for(let key in value){
            console.log(`value[key] = `, value[key]);
            console.log(`value key = `, key);
        }
        // return();
    }
);








FastQuarterReportType
    {
        key: "k-fqrt",
        name: "FastQuarterReportType",
        type: "array",
        value: "multi checkbox 1 = fixed ((一季报) (中报) (三季报) (年报))",
        description: "季报 快速过滤类型"
    }

// array === checkboxs

// fixed ("Q1th" / "Q2nd") 4 multi checkboxs


// ["Q1th(一季报)", "Q2nd(中报)", "Q3rd(三季报)", "Q4th(年报)"]


const QR = [
    "Q1th(一季报)",
    "Q2nd(中报)",
    "Q3rd(三季报)",
    "Q4th(年报)"
];


const QR = [
    {"label": "Q1th", "value": "一季报",}
    {"label": "Q2nd", "value": "中报",}
    {"label": "Q3rd", "value": "三季报",}
    {"label": "Q4th", "value": "年报"}
];

<CheckboxGroup options={plainOptions} defaultValue={["苹果"]} onChange={onChange} />

// "checked = " ["苹果", "Pear", "Orange"]


const QR = [
    "Q1th 一季报",
    "Q2nd 中报",
    "Q3rd 三季报",
    "Q4th 年报"
];

QR.map(
    (value, index) => {
        console.log(`value = `, value);
        let v = value.slice(0, 4);
        let d = value.slice(5);
        console.log(`new value = `, v);
        console.log(`new desc = `, d);
    }
);


 "Compress": "true or false",

: true
: "true"

  "CallBack": "不要",
  "ExtParams": "不要",

input disabled

"WriteType": "json(固定)"

"Filters": [
    {
      "FilterType": "like",
      "Field": "a0(来自于输出字段)",
      "Value": "hello(用户输入)"
    },
    {
      "FilterType": "equal",
      "Field": "a0(来自于输出字段)",
      "Value": "world(用户输入)"
    },
    {
      "FilterType": "between",
      "Field": "a0(来自于输出字段)",
      "MaxValue": "2017-08-04(时间选择控件)",
      "MinValue": "2012-01-01(时间选择控件)"
    },
    {
      "FilterType": "quarter",
      "Field": "a0(来自于输出字段)",
      "Value": [
        "Q1th(枚举值，固定)",
        "Q2nd(枚举值，固定)",
        "Q3rd(枚举值，固定)",
        "Q4th(枚举值，固定)"
      ]
    },
    {
      "FilterType": "in",
      "Field": "a0(来自于输出字段)",
      "Value": "hello world(用户输入)"
    }
],

// select 1 & select 2 (components ???)

"FilterType": "like",
// In、Between、Like、equal、quarter



// ??? enum multi = array , single = string

date = datepicker(yyyy-MM-dd) / input



*/





```





```jsx
{
    (this.state.isCollapsed === true)
    ?
    <Collapse
        defaultActiveKey={['2']}
        onChange={this.cilicPanel}
        className="options-panal">
        <Panel
            header={ (this.state.isCollapsed === true) ? "展开-可选项" : "收起-可选项"}
            key="1"
            >
            {/* <Table dataSource={this.props.dataSource} columns={this.props.columns} bordered pagination={false}/> */}
            <OI dataSource={this.props.dataSource} columns={this.props.columns}/>
            <Form />
        </Panel>
    </Collapse>
    :
    <Collapse
        defaultActiveKey={['2']}
        onChange={
            (e) => {
                return "callback";
            }
        }
        onClick={this.cilicPanel}
        className="options-panal">
        <Panel
            header={"收起-可选项"}
            key="1"
            onClick={this.cilicPanel}
            >
            <OI dataSource={this.props.dataSource} columns={this.props.columns}/>
            <Form />
        </Panel>
    </Collapse>
}
```

















