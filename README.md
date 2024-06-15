# React: Dormitory

A resident directory that makes note of a list of residents in the dormitory.

The application has 3 Components:

- The _Search_ view, which has two inputs: 'Student Name', where the user can type a student's name, and 'Joining Date', a date field denoting when the student will join the dormitory.
- The _ResidentsList_ view, which shows all the residents' names.
- The *Error* view, which is shown in case of an error.

The `studentsList.js` file holds the _STUDENTS_ constant, which holds the _name_ and _validityDate_ of all the students who are part of the college. The structure of the _STUDENTS_ variable is as follows:

- _name_: The name of the student. `<String>`
- _validityDate_: The last valid day the student can be added to the dormitory. `<String>` of format `<yyyy-mm-dd>`

The function _checkValidity_ takes two arguments: _joiningDate_ and _validityDate_. It needs to be called to check if the student’s joining date is valid.

- _joiningDate_: The date when the student will join the dormitory. `<String>` of format `<yyyy-mm-dd>`
- _validityDate_: The last valid day the student can be added to the dormitory. `<String>` of format `<yyyy-mm-dd>`

**Commands**

- run:

```bash
npm start
```

- install:

```bash
npm install
```

- test:

```bash
npm test
```

**Student List**

1. name: 'John', validityDate: '2030-12-30'
2. name: 'Jane', validityDate: '2030-05-25'
3. name: 'Adam', validityDate: '2030-11-11'
4. name: 'Bonnie', validityDate: '2008-11-11'
5. name: 'Dhilip', validityDate: '2030-12-30'
6. name: 'Falude', validityDate: '2020-05-25'
7. name: 'Damiyen', validityDate: '2030-11-11'
8. name: 'Talisk', validityDate: '2023-11-11'

**Srceenshot**

![ScreenShot](https://github.com/Karandumbre/dormitory/blob/master/images/list.png)

![ScreenShot](https://github.com/Karandumbre/dormitory/blob/master/images/not_verified.png)

![ScreenShot](https://github.com/Karandumbre/dormitory/blob/master/images/validity_error.png)
