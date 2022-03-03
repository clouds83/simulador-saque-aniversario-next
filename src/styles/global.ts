import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  html, body {
    height: 100%;
  }

  html {
    font-weight: 400;

    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: ${props => props.theme.colors.mainBackground};
    color: ${props => props.theme.colors.lightText};

    -webkit-font-smoothing: antialised;
  }

  body,
  input,
  textarea,
  .button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  .button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .logo {
    width: 12rem;
  }
}

.frame1,
#root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 920px;
  margin: 0 auto;
  flex-direction: column;
}

.resto {
  left: 10px;
  position: absolute;
  top: 100%;
}

.container {
  width: 100%;
}

.flex-row {
  column-gap: 2rem;
  margin-bottom: 2.5rem;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 57.5rem;
  margin: auto;

  label {
    margin-bottom: 0.75rem;
    color: ${props => props.theme.colors.darkText};
  }
}

header {
  margin: 0 auto 3.5rem auto;

  img {
    width: 16rem;
  }

  .content {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-size: 2.5rem;
    text-align: right;
    border-right: solid 2px ${props => props.theme.colors.borderColor};
    padding-right: 1rem;
    margin-right: 1rem;
    line-height: 100%;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 700;
}

h1 {
  color: ${props => props.theme.colors.primary};
}

h2,
h3,
h4,
h5,
h6 {
  color: ${props => props.theme.colors.darkText};
}



.button {
  cursor: pointer;
  background: ${props => props.theme.colors.accent};
  border-radius: 999px;
  -webkit-border-radius: 999px;
  -moz-border-radius: 999px;
  height: 3rem;
  color: white;
  border: 0;
  box-shadow: 0px 0.5rem 2.5rem 0px rgba(13, 196, 152, 0.3);
  -webkit-box-shadow: 0px 8px 40px 0px rgba(13, 196, 152, 0.3);
  font-size: 1.75rem;
  text-transform: uppercase;
  font-weight: bold;
  height: 4.5rem;
  padding: 0 12rem;
  -webkit-transition: filter 0.5s, box-shadow 0.5s, padding 0.5s, font-size 0.5s;
  -moz-transition: filter 0.5s, box-shadow 0.5s, padding 0.5s, font-size 0.5s;
  -o-transition: filter 0.5s, box-shadow 0.5s, padding 0.5s, font-size 0.5s;
  transition: filter 0.5s, box-shadow 0.5s, padding 0.5s, font-size 0.5s;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 0.5rem 1.5rem 0 rgba(13, 196, 152, 0.7);
    -webkit-box-shadow: 0 0.5rem 1.5rem 0 rgba(13, 196, 152, 0.7);
    padding: 0 11rem;
    font-size: 1.65rem;
  }
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.flex-column {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 0;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

input, select {
  height: 4.5rem;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  border: 2px solid ${props => props.theme.colors.borderColor};
  padding: 0.75rem 1rem;
  font-size: 1.5rem;
  background: white;

  &:focus {
    outline: none !important;
    border: 2px solid ${props => props.theme.colors.primary};
  }
}

.txt-center {
  text-align: center;
}

.big-mb {
  margin-bottom: 3.5rem;
}

.fgts-after {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 3.5rem;
  width: auto;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }
}

.table-title {
  flex-grow: 3;
  justify-content: center;
  padding-right: 2rem;

  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
}

.table-results {
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;

  .results-line {
    white-space: nowrap;
  }

  .flex-row {
    margin-bottom: 0;
    align-items: center;
    height: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  span {
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }

  .middle-result {
    background-color: ${props => props.theme.colors.lightBg};
  }
}

.mb1 { margin-bottom: 1rem; }

@media (max-height: 720px) {

  .fgts-after, .big-mb {
    margin-bottom: 2rem;
  }

  header {
    margin-bottom: 2rem;

    h1 {
    font-size: 1.75rem;
    }

    img {
      width: 12rem;
    }

  }

  .table-results {

    span {
      font-size: 1.5rem;
    }

    .flex-row {
      height: 4rem;
    }

  }

  .button, .button:hover {
    height: 4rem;
    font-size: 1.5rem;
  }

  .table-title h2, .fgts-after h3 {
    font-size: 1.25rem;
  }

}

@media (orientation: portrait) and (max-height: 916px) {

  * {
    text-align: center;
  }
  
  header {
    h1 {
      font-size: 1.25rem;
    }

    img {
      width: 8rem;
    }
  }

  .flex-row {
    -webkit-column-gap: 0;
    column-gap: 0;
    margin-bottom: 0;
    flex-direction: column;
    margin-bottom: 1.5rem;

    .flex-column {
      width: auto;
    }

    .flex-column:last-child {
      margin-top: 1.5rem;
    }
  }
  
  input, select, .button, .button:hover {
    height: 3.5rem;
    font-size: 1.25rem;
  }

  .table-row {
    display: grid;
  }

  .table-results {
    margin-top: 1.5rem;

    .results-line {
      white-space: initial;
    }

    .flex-row {
      justify-content: center;
    }
  }

  .results-line span, .table-row h2 span, .fgts-after h3 span {
    display: block;
  }

  .table-title {
    padding-right: 0;
  }

  h2 {
    font-size: 1.25rem;
  }

  header, .fgts-after, .big-mb {
    margin-bottom: 1.5rem;
  }

  .button, .button:hover {
    padding: 0;
  }

  .table-title h2, .fgts-after h3 {
    font-size: 1.25rem;
  }

}

@media (orientation: portrait) and (max-width: 281px) {
  .table-results {
    span {
      font-size: 1.25rem;
    }

    .flex-row {
      height: 3rem;
    }
  }

  header {
    h1 {
      padding: 0 0.5rem;
      margin-right: 0.5rem;
    }

    img {
      width: 7rem;
    } 
  }

  .table-title h2, .fgts-after h3, header h1 {
    font-size: 1rem;
  }

  .table-results, .table-title p, .fgts-after p {
    font-size: 0.75rem;
  }

  input, select, .button, .button:hover {
    height: 3rem;
    font-size: 1rem;
  }
}
  
}
`
