import aboutTemplate from '@/page/about.ejs';
const tableData = [
  { name: 'John', age: 25, occupation: 'Engineer' },
  { name: 'Alice', age: 30, occupation: 'Designer' },
  { name: 'Bob', age: 35, occupation: 'Manager' }
];
const renderTable = () => {
  document.getElementById('main').innerHTML = aboutTemplate({ tableData: tableData });
}

export default renderTable;
