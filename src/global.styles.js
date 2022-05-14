/** @format */

import { createGlobalStyle } from "styled-components";
import maxWidth from "./config/screen.size";

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
      padding:0;
      margin:0;
      box-sizing:inherit;
      
  }
 
  html{ 
      font-size: 62.5%;
      font-family: 'Poppins';
      @media only screen and (max-width: ${maxWidth.mediumBelta}) {
        font-size:50%;
      }
  } 
  
  body { 
      box-sizing: border-box;
      background-color:${(props) => props.theme.backgroundColor};
      color: ${({ theme: { color } }) => color};
    
      position:relative;
      ${
        "" /* @media only screen and (max-width: ${maxWidth.mediumBelta}) {
        font-family: 'Oswald', sans-serif;
      } */
      }
      
  }
  
 body,div {
     cursor: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00Ljg3NjY2IDMuNjc1NDdMMTQuODk4NyA2LjgyNjg1TDExLjAxODIgOC42NTM1NUw4LjA0MzAyIDcuODc2NjJMNy45NzAzMSAxMC45NTA3TDUuMTQ1MzQgMTQuMTc3OEw0Ljg3NjY2IDMuNjc1NDdaIiBmaWxsPSIjOUIyMjI2IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuMiIvPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZGlpaWlfMzY2XzEzOSkiPg0KPGNpcmNsZSBjeD0iMjYiIGN5PSIyOC45OTk5IiByPSIyMSIgZmlsbD0iI0EzOUM5QyIgZmlsbC1vcGFjaXR5PSIwLjMiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyIvPg0KPGNpcmNsZSBjeD0iMjYiIGN5PSIyOC45OTk5IiByPSIyMSIgc3Ryb2tlPSIjRTlFOUU5IiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzaGFwZS1yZW5kZXJpbmc9ImNyaXNwRWRnZXMiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9kaWlpaV8zNjZfMTM5IiB4PSIyLjUiIHk9IjIuNDk5ODgiIHdpZHRoPSI0NyIgaGVpZ2h0PSI1MSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPg0KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4NCjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPg0KPGZlT2Zmc2V0Lz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz4NCjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC41OTU4MzMgMCAwIDAgMCAwLjU5NTgzMyAwIDAgMCAwIDAuNTk1ODMzIDAgMCAwIDAuMjUgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMzY2XzEzOSIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMzY2XzEzOSIgcmVzdWx0PSJzaGFwZSIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+DQo8ZmVNb3JwaG9sb2d5IHJhZGl1cz0iMSIgb3BlcmF0b3I9ImVyb2RlIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0iZWZmZWN0Ml9pbm5lclNoYWRvd18zNjZfMTM5Ii8+DQo8ZmVPZmZzZXQgZHg9IjEiIGR5PSIxIi8+DQo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIi8+DQo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+DQo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC4yNSAwIi8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0ic2hhcGUiIHJlc3VsdD0iZWZmZWN0Ml9pbm5lclNoYWRvd18zNjZfMTM5Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4NCjxmZU9mZnNldCBkeT0iLTIiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIuNSIvPg0KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC4yNzkxNjcgMCAwIDAgMCAwLjI3OTE2NyAwIDAgMCAwIDAuMjc5MTY3IDAgMCAwIDAuMjUgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDJfaW5uZXJTaGFkb3dfMzY2XzEzOSIgcmVzdWx0PSJlZmZlY3QzX2lubmVyU2hhZG93XzM2Nl8xMzkiLz4NCjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPg0KPGZlT2Zmc2V0IGR5PSI1Ii8+DQo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiLz4NCjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4NCjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjUyIDAiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QzX2lubmVyU2hhZG93XzM2Nl8xMzkiIHJlc3VsdD0iZWZmZWN0NF9pbm5lclNoYWRvd18zNjZfMTM5Ii8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4NCjxmZU9mZnNldCBkeT0iLTUiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUiLz4NCjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4NCjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMzcwODMzIDAgMCAwIDAgMC4zNjc3NDMgMCAwIDAgMCAwLjM2Nzc0MyAwIDAgMCAwLjI1IDAiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3Q0X2lubmVyU2hhZG93XzM2Nl8xMzkiIHJlc3VsdD0iZWZmZWN0NV9pbm5lclNoYWRvd18zNjZfMTM5Ii8+DQo8L2ZpbHRlcj4NCjwvZGVmcz4NCjwvc3ZnPg=='),auto;
  
  }
a,button {
  cursor:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00Ljg3NjY2IDMuNjc1NDdMMTQuODk4NyA2LjgyNjg1TDExLjAxODIgOC42NTM1NUw4LjA0MzAyIDcuODc2NjJMNy45NzAzMSAxMC45NTA3TDUuMTQ1MzQgMTQuMTc3OEw0Ljg3NjY2IDMuNjc1NDdaIiBmaWxsPSJibGFjayIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4NCjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RpaWlpXzM2Nl8xMzkpIj4NCjxjaXJjbGUgY3g9IjI2IiBjeT0iMjguOTk5OSIgcj0iMjEiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIi8+DQo8Y2lyY2xlIGN4PSIyNiIgY3k9IjI4Ljk5OTkiIHI9IjIxIiBzdHJva2U9IiNFOUU5RTkiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyIvPg0KPC9nPg0KPGRlZnM+DQo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RpaWlpXzM2Nl8xMzkiIHg9IjIuNSIgeT0iMi40OTk4OCIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjUxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+DQo8ZmVPZmZzZXQvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPg0KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+DQo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjU5NTgzMyAwIDAgMCAwIDAuNTk1ODMzIDAgMCAwIDAgMC41OTU4MzMgMCAwIDAgMC4yNSAwIi8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18zNjZfMTM5Ii8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18zNjZfMTM5IiByZXN1bHQ9InNoYXBlIi8+DQo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4NCjxmZU1vcnBob2xvZ3kgcmFkaXVzPSIxIiBvcGVyYXRvcj0iZXJvZGUiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJlZmZlY3QyX2lubmVyU2hhZG93XzM2Nl8xMzkiLz4NCjxmZU9mZnNldCBkeD0iMSIgZHk9IjEiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz4NCjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4NCjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwLjI1IDAiLz4NCjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QyX2lubmVyU2hhZG93XzM2Nl8xMzkiLz4NCjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPg0KPGZlT2Zmc2V0IGR5PSItMiIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41Ii8+DQo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+DQo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjI3OTE2NyAwIDAgMCAwIDAuMjc5MTY3IDAgMCAwIDAgMC4yNzkxNjcgMCAwIDAgMC4yNSAwIi8+DQo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0Ml9pbm5lclNoYWRvd18zNjZfMTM5IiByZXN1bHQ9ImVmZmVjdDNfaW5uZXJTaGFkb3dfMzY2XzEzOSIvPg0KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+DQo8ZmVPZmZzZXQgZHk9IjUiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuNSIvPg0KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNTIgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDNfaW5uZXJTaGFkb3dfMzY2XzEzOSIgcmVzdWx0PSJlZmZlY3Q0X2lubmVyU2hhZG93XzM2Nl8xMzkiLz4NCjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPg0KPGZlT2Zmc2V0IGR5PSItNSIvPg0KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIvPg0KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPg0KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC4zNzA4MzMgMCAwIDAgMCAwLjM2Nzc0MyAwIDAgMCAwIDAuMzY3NzQzIDAgMCAwIDAuMjUgMCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDRfaW5uZXJTaGFkb3dfMzY2XzEzOSIgcmVzdWx0PSJlZmZlY3Q1X2lubmVyU2hhZG93XzM2Nl8xMzkiLz4NCjwvZmlsdGVyPg0KPC9kZWZzPg0KPC9zdmc+'),auto
}
  
  ::-webkit-scrollbar {
    width: 0;
    height: 0;  
  } 
  a,a:active,a:focus {
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
    text-decoration: none;
    outline:none;
  }
  input {
    &:active,$:focus {
      outline: none;
      border:none;
    }
  }
  img {
    user-select: none;
  }
  button {
    background-color:${({ theme: { buttonBackgroundColor } }) =>
      buttonBackgroundColor};
    color: ${({ theme: { buttonFontColor } }) => buttonFontColor};
  }
  p,span {
    font-size:2rem;
    font-weight: 400;

  }
  h1 {
    pointer-events: none;
  }
  h2 {
    font-size:3rem;
  }
  h3 {
    font-size: 2.5rem;
 
  }
  button {
    color: ${({ theme: { color } }) => color};
  }
  
  h1,h2,h3,h4,h5,h6,a {
    font-family: 'Oswald';
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
  }
  p,div{
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
  }

`;
