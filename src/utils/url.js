
const isProduction = process.env.NODE_ENV === 'production';
console.log(process,'process');

const url = isProduction ? 'https://github.com/jackchen0120/' : 'http://localhost:8088/';

const apiUrl = '/api';  


export {
  apiUrl,
  url
};
