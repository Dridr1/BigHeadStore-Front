import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
        * {     
                ul, li, button, input, a{
                        all: unset;
                }
                body{
                        background-color: #FFFFFF;
                        min-height: 100vh;
                }
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font-weight: normal;
                vertical-align: baseline;
                font-family: 'Raleway', sans-serif;;
                box-sizing: border-box;
                overflow: scroll;
               ::-webkit-scrollbar {
                        width: 8px;
                        }
                ::-webkit-scrollbar-track { 
	                background: none; 
                        }
                ::-webkit-scrollbar-thumb {
                        background: #d8d8d8; 
                        }
                ::-webkit-scrollbar-thumb:hover {
                        background: #c4c4c4; 
                        }
        }
`;

export { GlobalStyle };
