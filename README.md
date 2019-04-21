# date-between

获取两个日期相差的时间
`2019-4-21 9:00`, `2019-4-21 11:30`
返回一个对象

```js
{ days: 0,
  years: 0,
  months: 0,
  hours: 2,
  minutes: 30,
  seconds: 0,
  strTime: '2小时前' }
```

## Install

```js
$ npm install date-between
```

## Usage

```js
const dateBetween = require('date-between')

dateBetween(new Date('2019-4-21 9:00'), new Date('2019-4-21 11:30'))
// =>
{ days: 0,
  years: 0,
  months: 0,
  hours: 2,
  minutes: 30,
  seconds: 0,
  strTime: '2小时前' }
```
