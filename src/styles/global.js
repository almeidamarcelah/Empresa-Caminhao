import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

export default createGlobalStyle`

  html {
    height: 100%;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFF;  /* fallback for old browsers */
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }
  body, input, button {
    font: 14px 'Open Sans', sans-serif;
  }
  #root {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 0 50px;
    background: #fff;
    height: 100%;
  }
  button {
    cursor: pointer;
  }

  .ant-btn {
    border: 0;
    background-color: #face48 !important;
    color: #474660 !important;
    font-weight: bold;
    &:hover {
      background-color: ${darken(0.09, '#face48')} !important;
      color: #474660 !important;
    }
  }

  .ant-input {
    &:hover, &:focus {
      border-color:#face48;
      box-shadow: 0 0 0 2px rgba(250, 206, 72, 0.4);
    }
  }
  .error {
    color: red;
  }

  .ant-form-item-label > label.ant-form-item-required {
    color: #474660;
    font-weight: bold;
    &:before {
      display: none;
    }
    &:after {
      display: inline-block;
      margin-right: 4px;
      color: #face48;
      font-size: 14px;
      font-family: SimSun, sans-serif;
      line-height: 1;
      content: '*';
    }
  } 

  .driver-switch {
    .ant-form-item-control-input-content {
      display: flex;
      align-items: center;
      button {
        margin-right: 10px;
      }
      .ant-switch-checked {
        background: #face48;
      }
    }
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #face48;
    border-color: #face48;
  }

  .ant-layout-header {
    padding: 0px 44px;
    @media (max-width: 768px) {
      padding: 0 2px;
    }
  }
`;