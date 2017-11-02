import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Prompt, Redirect, Switch, withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class ReactOfficialExamples extends Component {
  render() {
    return (
      <div className="wrap">
        {/* react官网示例 */}
        <div className="App react-official-examples">
          {/* props */}
            {/*<div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>*/}
          {/* 定时器 */}
            {/* <Clock /><hr/> */}
          {/* 改变状态 */}
            {/*<Greeting isLoggedIn={true} name={guessName} />
            <Toggle />
            <LoginControl /><hr/> */}
          {/* 循环 */}
            {/* <Doubler value={[5,6,7,8]} />
            <ul>{listItems}</ul><hr/>. */}
          {/* 表单 */}
            {/* <Form /><br/>
            <FormOneMethod /><hr/> */}
          {/* 状态提升 */}
            {/* <Calculator />
            <Calculator2 /><hr/> */}
          {/* 组合 继承 */}
            {/* <WelcomeDialog />
            <SignUpDialog /><hr/> */}
          {/* js表达式/函数作为子代传递 */}
            {/* <TodoList />
            <ListOfTenThings /><hr/> */}
          {/* PropTypes */}
            {/* <ListOfTenThings /><hr/> */}
          {/* refs */}
            {/* <ClickToFocus/>
            <FocusAfterMounting/><br/>
            <ParentOfInputWithDomRef/><br/>
            <GrandparentOfInputWithDomRef/><hr/> */}
          {/* 非受控组件 */}
            {/* <UncontrolledInput/><hr/> */}
          {/* shouldComponentUpdate应用 */}
            {/* <CounterButton color="red"/><br/>
            <WordAdder /><br/>
            <MyWordAdder /> */}
        </div>
      </div>
    );
  }
}

/* react官网示例 */
  let guessName = 'Justin';
  /* 定时器 */
  class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state = {date: new Date()}
    }

    render(){
      return <p>It is {this.state.date.toLocaleTimeString()} now.</p>
    }

    componentDidMount() { // 生命周期
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() { // 生命周期
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }
  }



  /* 改变状态 */
  class Toggle extends React.Component {
    constructor(props){
      super(props);
      this.state = {isToggleOn: false};
      // this.handleClick = this.handleClick.bind(this); // This binding is necessary to make `this` work in the callback，不绑定则方法中的setState无法找到，或者 onClick的方法handleClick内部中使用箭头函数绑定this，或者在render的HTML中将onClick改为箭头函数(不建议)；
    }
    handleClick1 = () => {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    handleClick2(e, w){
      console.log('Toggle: ', e)
      console.log('Toggle: ', w)
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    render(){
      return (
        <button onClick={this.handleClick1}>
        {/* <button onClick={(e) => this.handleClick2(e, 'what')}> */}
          {this.state.isToggleOn? 'on' : 'off'}
        </button>
      )
    }
  }


  class Greeting extends React.Component{
    render(){
      return this.props.isLoggedIn? <UserGreeting name={this.props.name}/> : <GuestGreeting />;
    }
  }
  function UserGreeting(props){
    return <p>{props.name}, Welcom Back!</p>
  }
  function GuestGreeting(props){
    return <p>Please log in or sign up.</p>
  }

  class LoginControl extends React.Component{
    constructor(props){
      super(props);
      this.state = { isLoggedIn: true }
    }

    loginFun = () => {
      this.setState({ isLoggedIn: true });
    }

    logoutFun = () => {
      this.setState({ isLoggedIn: false });
    }

    render(){
      let isLoggedIn = this.state.isLoggedIn;
      let button = null;
      button = isLoggedIn? <LogoutButton onClick={this.logoutFun} /> : <LoginButton onClick={this.loginFun} />;
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} name={guessName}/>
          {button}
        </div>
      )
    }
  }
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }


  /* 循环 */
  function Doubler ({value=[1, 2, 3]}){ // 数组也会被渲染
    return (
      <div>
        {value.map(e => e * 2)}
      </div>
    )
  }


  /* 表单 */
  let num = [1, 2];
  let listItems = num.map((item, index) => <li key={index}>{item}</li>);
  /* 表单 */
  class Form extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: '',
        introduce: '',
        fruit: 'coconut'
      }
    }
    submitNameForm = (e) => {
      console.log(`Form: Name : ${this.state.name}; Introduce: ${this.state.introduce}; Fruit: ${this.state.fruit}`);
      e.preventDefault();
    }
    changeNameValue = (e) => {
      this.setState({name: e.target.value.toUpperCase()})
    }
    changeIntroduceValue = (e) => {
      this.setState({introduce: e.target.value})
    }
    changeFruitValue = (e) => {
      this.setState({fruit: e.target.value})
    }
    render(){
      return (
        <form onSubmit={this.submitNameForm}>
          <label>
            Name: 
            <input type="text" name="name" value={this.state.name} onChange={this.changeNameValue}/>
          </label><br/>
          <label>
            Introduce: 
            <textarea name="introduce" value={this.state.introduce} onChange={this.changeIntroduceValue} placeholder="introduce yourself"></textarea>
          </label><br/>
          <label>
            Preferred fruit:
            <select value={this.state.fruit} onChange={this.changeFruitValue}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="submit"/>
        </form>
      )
    }
  }

  class FormOneMethod extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name: '',
        ifSingle: false,
        fruit: 'coconut'
      }
    }
    submitNameForm = (e) => {
      console.log(`FormOneMethod: Name : ${this.state.name}; Single: ${this.state.ifSingle}; Fruit: ${this.state.fruit}`);
      e.preventDefault();
    }
    changeValue = (e) => {
      let target = e.target;
      let value = target.type === 'checkbox'? target.checked : target.value;
      this.setState({[target.name]: value})
    }
    render(){
      return (
        <form onSubmit={this.submitNameForm}>
          <label>
            Name: 
            <input type="text" name="name" value={this.state.name} onChange={this.changeValue}/>
          </label><br/>
          <label>
            Single: 
            <input type="checkbox" name="ifSingle" checked={this.state.ifSingle} onChange={this.changeValue} />
          </label><br/>
          <label>
            Preferred fruit:
            <select name="fruit" value={this.state.fruit} onChange={this.changeValue}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="submit"/>
        </form>
      )
    }
  }


  /* 状态提升 */
  function BoilingVerdict(props){
    if(props.celsius >= 100) return <p>The water would boil.</p> 
    return <p>The water would not boil.</p>
  }
  class Calculator extends React.Component{
    constructor(props){
      super(props);
      this.state = {temperature: ''}
    }
    changeInputNum = (e) => {
      this.setState({temperature: e.target.value})
    }
    render(){
      let temperature = this.state.temperature;
      return (
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.changeInputNum} />
          <BoilingVerdict
            celsius={parseFloat(temperature)} />
        </fieldset>
      )
    }
  }

  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }
  class TemperatureInput extends React.Component{
    // constructor(props){
    //   super(props);
    //   this.state = {temperature: ''}
    // }
    handleChange = (e) => {
      // this.setState({temperature: e.target.value});
      this.props.onTemperatureChange(e.target.value);
    }
    render(){
      let scale = this.props.scale;
      let temperature = this.props.temperature;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      )
    }
  }
  class Calculator2 extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        temperature: '',
        scale: '',
      }
    }
    handleCelsiusChange = (temperature) => {
      this.setState({
        temperature,
        scale: 'c'
      });
    }
    handleFahrenheitChange = (temperature) => {
      this.setState({
        temperature,
        scale: 'f'
      });
    }
    render(){
      let scale = this.state.scale;
      let temperature = this.state.temperature;
      let celsius = scale === 'f'? tryConvert(temperature, toCelsius) : temperature;
      let fahrenheit = scale === 'c'? tryConvert(temperature, toFahrenheit) : temperature;
      return (
        <div>
          <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
          <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
          <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
      )
    }
  }
  function toCelsius(fahrenheit){ // 华氏度转摄氏度
    return (fahrenheit - 32) * 5 / 9;
  }
  function toFahrenheit(celsius){ // 摄氏度转华氏度
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature, convert){
    let input = parseFloat(temperature);
    if(isNaN(input)) return '';
    let output = convert(input);
    let rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }


  /* 组合 继承 */
  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }

  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }
  class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
    }

    render() {
      return (
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      );
    }

    handleChange(e) {
      this.setState({login: e.target.value});
    }

    handleSignUp() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }


  /* js表达式/函数作为子代传递 */
  /* PropTypes */
  function Item(props){
    return <li>{props.message}</li>
  }
  function TodoList(){
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
      <ul>
        {todos.map(message => <Item key={message} message={message}/>)}
      </ul>
    )
  }

  class Repeat extends React.Component{
    render(){
      let items = [];
      // console.log('Repeat: ', this.props.children)
      // console.log('Repeat: ', typeof this.props.children)
      // console.log('Repeat: ', this.props.children(2))
      for (let i = 0; i < this.props.numTimes; i++) {
        items.push(this.props.children(i));
        // items.push(<p key={i}>This is item {i} in the list.</p>); // 效果相同
      }
      return <div>{items}</div>
    }
  }
  class ListOfTenThings extends React.Component{
    render(){
      return (
        <Repeat numTimes={3}>
          {/* props.children */}
          {index => <p key={index}>This is item {index} in the list.</p>}
        </Repeat>
      )
    }
  }
  Repeat.propTypes = {
    numTimes: PropTypes.number.isRequired
  }
  Repeat.defaultProps = {
    numTimes: 5
  }

  /* refs */
  // 不能在函数式组件上使用 ref 属性，因为它们没有实例
  class ClickToFocus extends React.Component{
    clickBtn = () => {
      this.domEle.focus();
      // if(this.domEle.parentNode){
      //   this.domEle.parentNode.removeChild(this.domEle); // 当this.domEle被移除后，在dom书中已不存在，但this.domEle这个变量仍保留着input的dom值
      // }else{
      //   console.log('ClickToFocus的input 已被移除')
      // }
    }
    render(){
      return (
        <div>
          <input type="text" ref={dom => this.domEle = dom} />
          <input type="button" value="click to focus" onClick={this.clickBtn} />
        </div>
      )
    }
  }

  class FocusAfterMounting extends React.Component{
    // 我的写法，直接在ref函数中操作focus
    // render(){
    //   return (
    //     <ClickToFocus ref={reactEle => {
    //       console.log('FocusAfterMounting: ', reactEle);
    //       reactEle.clickBtn();
    //     }}/>
    //   )
    // }

    // 官方写法，将ref函数中的react对象参数保存住，在生命周期中操作
    componentDidMount(){
      this.reactEle.clickBtn();
    }
    render(){
      return (
        <ClickToFocus ref={rcEle => this.reactEle = rcEle} />
      );
    }
  }


  function InputWithDomRef(props){
    return <input className="input-with-dom-ref" ref={props.inputRef} />
  }
  class ParentOfInputWithDomRef extends React.Component{
    // componentDidMount(){
    //   console.log('ParentOfInputWithDomRef: ', this.input);
    // }
    render(){
      // return <InputWithDomRef inputRef={inputEle => this.input = inputEle} />
      return <InputWithDomRef inputRef={this.props.grandInputRef} />
    }
  }
  class GrandparentOfInputWithDomRef extends React.Component{
    componentDidMount(){
      console.log('GrandparentOfInputWithDomRef: ', this.input);
    }
    render(){
      return <ParentOfInputWithDomRef grandInputRef={inputEle => this.input = inputEle} />
    }
  }


  /* 非受控组件 */
  class UncontrolledInput extends React.Component{
    submit = () => {
      console.log('UncontrolledInput: ', this.inputEle.value);
    }
    render(){
      return (
        <form>
          <label>
            name: <input type="text" defaultValue="Tom" ref={input => this.inputEle = input} />
          </label>
          sex: 
          <label>
            male <input type="radio" name="sex" value="male" defaultChecked/>
          </label>
          <label>
            female <input type="radio" name="sex" value="female"/>
          </label>
          <input type="button" onClick={this.submit} value="提交"/>
        </form>
      )
    }
  }


  /* shouldComponentUpdate应用 */
  class CounterButton extends React.Component{
    constructor(props){
      super(props);
      this.state = {count: 1}
    }
    shouldComponentUpdate(nextProps, nextState){
      // if(nextProps.color != this.props.color || nextState.count != this.state.color) return true;
      if(nextProps.color !== this.props.color) return true; // 在react开发工具中可看到点击按钮时，state.count在变化，但是dom不更新
      return false;
    }
    render(){ // 注意箭头函数返回对象时，外层要包裹小括号
      return (
        <button
          color={this.props.color}
          onClick={() => this.setState(prevState => ({count: prevState.count + 1}))}>
          color: {this.props.color}, count: {this.state.count}(观察开发工具中的count)
        </button>
      )
    }
  }
  // 官方文档案例，以下ListOfWords和WordAdder为 错误！！！ 示范
  class ListOfWords extends React.PureComponent {
    render() {
      return <span>{this.props.words.join(',')}</span>;
    }
  }

  class WordAdder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        words: ['marklar']
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      // This section is bad style and causes a bug
      const words = this.state.words;
      words.push('marklar2');
      this.setState({words: words});
    }

    render() {
      return (
        <div>
          官网案例，错误示范：
          <button onClick={this.handleClick}>click to add 'marklar2'</button>
          <ListOfWords words={this.state.words} />
        </div>
      );
    }
  }
  // 自己写的，点击有效
  class MyListOfWords extends React.Component{
    render(){
      return <span>{this.props.list.join(', ')}</span>
    }
  }
  class MyWordAdder extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        input: '',
        list: ['apple', 'banana']
      };
    }
    changeInput = (e) => {
      this.setState({input: e.target.value});
    }
    addWord = () => {
      // if(!this.state.input) return;

      this.setState((prevState) => ({
        input: '',
        list: [...prevState.list, prevState.input],
        // list: [...prevState.list, this.state.input], // 也可
      }));

      // let newList = this.state.list;
      // newList.push(this.state.input);
      // this.setState({
      //   input: '',
      //   list: newList
      // });

      // this.setState((prevState) => {
      //   // let newList = [].concat(prevState.list);
      //   // newList.push(this.state.input);
      //   // return {
      //   //   input: '',
      //   //   list: newList
      //   // };

      //   prevState.list.push(this.state.input);
      //   return {
      //     input: '',
      //     list: prevState.list
      //   };
      // });
    }
    render(){
      return (
        <div>
          <MyListOfWords list={this.state.list} />&nbsp;&nbsp;
          <input type="text" value={this.state.input} onChange={this.changeInput} />
          <input onClick={this.addWord} type="button" value="add a word" />
        </div>
      )
    }
  }


export default ReactOfficialExamples