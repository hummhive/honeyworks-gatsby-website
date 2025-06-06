import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background: #fff;
  font-family: "Work Sans";
  color: #161F38;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 900;
}

.meta div {
  padding-right: 15px;
  font-size: 16px;
  color: #757575;
}
.post .meta div {
  font-size: 13px;
}

.primaryBg{
  background-color: ${(props) => (props.themeSettings && props.themeSettings.color ? props.themeSettings.color : "#000000")};
  border: 1px solid ${(props) => (props.themeSettings && props.themeSettings.color ? props.themeSettings.color : "#000000")};
  color: #FFF;
}

.primaryColor{
  color: ${(props) => (props.themeSettings && props.themeSettings.color ? props.themeSettings.color : "#000000")};
}

.primaryBg button{
  color: ${(props) => (props.themeSettings && props.themeSettings.color ? props.themeSettings.color : "#000000")};
}

button:hover{
  opacity: 0.7;
}

.primaryGradientBg{
  background-image: linear-gradient(to bottom right,${(props) => (props.themeSettings && props.themeSettings.color ? props.themeSettings.color : "#000000")},#000);
  color: #FFF;
}

.header {
  background: #fff;
}

.copyKey {
  font-size: 30px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 20px;
}

.showKey {
  font-size: 30px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 20px;
}

a {
  color: ${(props) => (props.themeSettings && props.themeSettings.color ? props.themeSettings.color : "#000000")};
}

a:hover{
  color: #000;
  text-decoration: underline;
}

.header a {
  line-height: 1.5;
  position: relative;
  padding: 0;
  font-size: 19px;
  display: inline-block;
  pointer-events: auto;
}

.header li {
  margin: 0 30px 0 0;
}

.header li:last-child {
  margin: 0;
}

.header .logo {
  font-size: 38px;
}

.hiveName {
  color: #2b394e;
  font-size: 60px;
}

.header .btn-highlight,
.header .btn-highlight:hover {
  padding: 12px 22px;
  font-size: 19px;
  color: #fff;
  transition: opacity 0.55s ease;
}

.header .btn-highlight:hover {
  opacity: 0.75;
}

.header a:hover {
  color: #999;
  text-decoration: none;
}

.subscription-title {
  font-weight: 700;
}

.subscription-plan {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.subscription-plan label {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 10px;
}

.subscription-plan input {
  margin-right: 10px;
}

.subscription-plan label:last-child {
  border-bottom: 0;
  padding-bottom: 0px;
  margin-bottom: 0;
}

.title {
  flex-grow: 1;
  /* font-size: ; */
  font-weight: 400;
  font-size: 21px;
}

.title svg {
  margin-right: 7px;
  /* padding: ; */
  width: 40px;
  height: 40px;
}

.breadcrumb__link.breadcrumb__link__active {
  color: #78757a;
}

.readable-content {
  margin: 62px auto;
}

.index-title h1 {
	font-weight: 600;
	font-size: 29px;
	margin-bottom: 0;
	color: #292929;
}

.post {
  margin-bottom: 56px;
}

.home-heading{
  font-size: 24px;
  margin-bottom: 40px;
}

.home-heading span {
	position: relative;
  font-weight: 600;
}

.home-heading span::before {
	content: "";
	width: 100%;
	height: 4px;
	border-radius: 2px;
	background-color: ${(props) => (props.themeSettings && props.themeSettings.color ? props.themeSettings.color : "#000000")};
	position: absolute;
	left: 0;
	bottom: -4px;
}

.meta > :not(:last-child)::after {
	content: "•";
	margin-left: 5px;
	position: absolute;
	display: inline-block;
	font-weight: 700;
}

.date {
	text-transform: capitalize;
}

.post p {
	font-size: 14px;
	margin-bottom: 0;
}

.post-title h1 {
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 0;
  line-height: 1.5em;
}

@media only screen and (min-width: 480px) and (max-width: 720px) {

  .index-title h1 {
    font-weight: 700;
    font-size: 22px;
  }

  .post a p {
    font-size: 16px;
  }

  .post-title h1 {
    font-size: 34px;
  }
}

@media only screen and (max-width: 480px) {

  .index-title h1 {
    font-weight: 700;
    font-size: 18px;
  }

  .post a p {
    font-size: 14px;
  }

  .post-title h1 {
    font-size: 28px;
  }
}

.subscribe {
  border: 1px solid #fff;
  color: #fff;
  border-radius: 13px;
  padding: 6px;
  text-transform: uppercase;
  font-size: 12px;
  background: #646eff;
  padding-left: 20px;
  padding-right: 20px;
  height: 30px;
}

.login {
  border: 1px solid #fff;
  color: #fff;
  border-radius: 13px;
  padding: 6px;
  text-transform: uppercase;
  font-size: 12px;
  background: #646eff;
  padding-left: 20px;
  padding-right: 20px;
  height: 30px;
}

.btn-bd-download {
  font-weight: 600;
  color: #ffe484;
  border-color: #ffe484;
}

.header a {
  font-size: 19px;
  color: #2b394e;
  font-weight: 900;
}

.login-page h1,
.login-page h2 {
  font-size: 32px;
  line-height: 1.2;
  padding: 0;
}

.login-subtitle {
  font-size: 14px;
  margin-top: 30px;
}

.login-form-shadow {
  font-size: 20px;
  padding-top: 22px;
  padding-bottom: 22px;
  outline: 0;
  border: 0;
  box-shadow: none;
  width: 100%;
  padding-right: 22px;
  padding-left: 22px;
  transition: background-color 0.15s ease;
  text-align: center;
  word-break: break-all;
  border-radius: 100px;
  background-color: #f4f4f7;
}

.highlight {
  color: #646eff;
}

.bg-highlight {
  background: #646eff;
}

.btn-highlight {
  background: #646eff;
  font-size: 20px;
  line-height: 1.5;
  padding: 10px 26px;
  border-radius: 100px;
  font-weight: 900;
  color: #fff;
  text-align: center;
  transition: opacity 0.55s ease;
  opacity: 1;
}

.btn-highlight:hover {
  color: #fff !important;
  opacity: 0.75;
}

.index-title a {
  color: #292929;
}

.loading-indicator {
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px;
  background: #646eff;
  color: #fff;
  padding: 7px;
  font-size: 12px;
}

.card {
  margin-bottom: 1.875rem;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  position: relative;
  border: 0px solid transparent;
  border-radius: 1.25rem;
  box-shadow: 0px 12px 23px 0px rgba(172, 57, 212, 0.04);
  height: calc(100% - 30px);
}

.card-header {
  border-color: #f0f1f5;
  position: relative;
  background: transparent;
  padding: 1.5rem 1.875rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post a:hover {
  text-decoration: none;
}

footer .title {
  border-bottom: 1px solid #d9d9d9;
  max-width: 300px;
  margin: auto;
}

.read-more svg,
.meta svg {
  position: relative;
  top: -1px;
}

.read-more {
  background: #a77fde;
  padding: 8px 14px 8px 14px;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 12px;
}

.read-more:hover {
  color: #fff;
  opacity: 0.85;
  text-decoration: none;
}

.hexagon-splash {
  font-size: 200px;
  color: #646eff;
}
.rotate {
  animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;

export default GlobalStyle;
