import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Prompt, Redirect, Switch, withRouter, NavLink } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
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
        {/* 非react官网示例 */}
        <div className="react-not-official-examples">
          {/* <AjaxForGithub /> */}
        </div>
        {/* react-router官网core示例 */}
        <div className="react-router-official-examples">
          {/* https://reacttraining.com/react-router/core/guides/philosophy */}
          {/* philosophy - Dynamic Routing */}
            {/* Prompt表示离开当前路由时的确认弹框；when表示是否一直显示或不显示或按照条件进行显示；message可以是string或者function */}
            {/* <div>
              <nav>
                <Link to="/dashboard">Dashboard</Link>
              </nav>
              <div>
                <Route path="/dashboard" component={Dashboard} />
                <Prompt when={false} message={(location, action) => (
                  `You are going to '${location.pathname}', and the action is ${action}.`
                )} />
              </div>
            </div> */}

          {/* philosophy - Responsive Routes */}
            {/* <Route path="/invoices" component={Invoices} /> */}

          {/* API - Redirect */}
            {/* Redirect表示重定向，新地址将在历史记录中替换当前地址，类似HTTP 3xx；to可以是string或location对象；push若为true则向历史记录中push，而不是replace；from为路径字符串，只能在Switch内使用 */}
            {/* <Route exact path="/redirectNotExist" push render={() => <Redirect to="/testRedirect" />} />
            <Route path="/testRedirect" component={TestRedirect} /> */}

          {/* API - Route */}
            {/* Route分为三种方式渲染，通过props传入，一个Route只能用其中一种，component，render，children；component要传一个组件，若传行内function，则会用unmount和mount来替代update，降低性能，若想要用inline function，用render方式；render传入一个行内方法，且component优先级比render高，会覆盖render，所以不要同时使用；children方式则是无论是否匹配路由都可以显示出ui组件，可通过match来判断是否匹配路由，详见下例；component和render都比children优先级高，勿混用； */}
            {/* <ul>
              <RouteWithChildrenProp to="/somewhere" />
              <RouteWithChildrenProp to="/somewhere-else" />
            </ul> */}
            {/* Route的prop有path、exact、strict，location；path为string类型正则表达式，若没有写path，则会匹配所有路由；exact为布尔值，为true时表示路由和location.pathname完全一致时才会匹配，但末尾多出个斜杠仍能匹配；strict为布尔值，为true时表示location.pathname中最后的斜杠是否和path匹配，如path为`/one`和location.pathname为`/one/`的不匹配，和`/one/`及`/one/two`的匹配；同时加上exact和strict，能够保证pathname没有斜杠； */}
            {/* <strong>exact</strong><Route exact path="/testRoute" component={ComponentForRouteTest} /><br/>
            <strong>strict</strong><Route strict path="/testRoute/" component={ComponentForRouteTest} /><br/>
            <strong>exact strict</strong><Route exact strict path="/testRoute/" component={ComponentForRouteTest} /><br/> */}

          {/* API - Router */}
            {/* Router是最常见的低级路由器，props的history可以传入自定义history，子级可以传入一个单一element；一般apps都会用高级路由器：BrowserRouter、HashRouter、MemoryRouter、NativeRouter、StaticRouter */}

          {/* API - StaticRouter */}
            {/* 指的是不会改变location的Router，在服务器端比较有用；props有basename、location、context、children；basename为string，作为所有location的前缀URL，标准写法为开头有斜杠，结尾无斜杠；location可以是url字符串，也可以是location对象，格式为{pathname, search, hash, state}；context为js对象，在render渲染时，组件能够向对象中添加属性来存储关于渲染的信息；children为node节点； */}

          {/* API - Switch */}
            {/* 渲染子元素中首个匹配location的Route或者Redirect；用Switch包起来和散落在外面的区别：Switch包起来的Route标签中只会渲染一个，而没有被包起来的Route标签，只要是匹配的，就会被渲染；如下代码，若没有Switch，则在location为'/about'时全部都被渲染，若有，则只渲染一个；Switch可用在动画中，防止一个界面出现多个动画； */}
            {/* <Route path="/about" component={ComponentForRouteTest} />
            <Route path="/:user" component={ComponentForRouteTest} />
            <Route component={ComponentForRouteTest} />
            <Switch>
              <Route path="/about" component={ComponentForRouteTest} />
              <Route path="/:user" component={ComponentForRouteTest} />
              <Route component={ComponentForRouteTest} />
            </Switch> */}
            {/* Switch可传入location对象来匹配子元素；Switch子元素中除了Route和Redirect，不能包含其他标签，否则会报错；Route元素用path属性匹配路由，二Redirect用from属性匹配；若Route没有path或Redirect没有from则永远匹配当前路由；在Switch中使用Redirect时，可以使用Route的任何一个props：path、exact和strict，from只是path的别名；Switch的prop location会覆盖匹配的子元素的location； */}

          {/* API - context.router，别直接用此API，可能被修改；使用withRouter代替； */}

          {/* API - history */}
            {/* 下面这几个术语也会被用到：
              'browser history' - 用于支持H5的web浏览器
              'hash history' - 用于不支持H5的web浏览器
              'memory history' - 用于测试及原生如React Native */}
            {/* history有以下属性及方法：
              * length - string，历史记录栈中的数量；
              * action - string，当前动作(push, replace, pop)
              * location - object，当前的location对象，有以下属性
                * pathname - string，URL路径；
                * search - string，URL搜索字符串；
                * hash - string，url哈希片段；
                * state - 当location被推入历史记录栈中时提供的state信息，比如push(path, state)？；只在browser和memory history中有效；
              * push(path, [state]) - function，推入一条新历史记录；
              * replace(path, [state]) - function，替换当前历史记录；
              * go(n) - function，指向第n条历史记录；
              * goBack() - function，后退，等同于go(-1)；
              * goForward() - function，前进，等同于go(1)；
              * block(prompt) - function，阻止跳转；
            */}
            {/* history是可变的，所以推荐使用Route去修改location，而不是通过history.location；这能保证你对React生命周期钩子的猜想是正确的；个人理解：在history.location中改动，其他地方用到的history.location，仍是同一个地址，而不是新生成的location对象，所以route改变前后的history.location永远相等；而location是不可被改变的，每次路由改变后的location都是一个新的对象，对象地址与路由改变前不同，所以可以进行比较； */}
            {/* <Route component={HistoryTestComp} /> */}

          {/* API - location */}
            {/* location展示了app当前在哪个页面，想要去哪个页面，之前在哪个页面； */}
            {/* location可在以下场景被获取到：
              * Route component中，获取方式为this.props.location；
              * Route render中，获取方式为({location}) => {}；
              * Route children中，获取方式为({location}) => {}；
              * withRoute中，获取方式为this.props.location；
            */}
            {/* 虽然在history中也有location，但不应该被使用，因为它是可被改变的，个人理解：在history.location中改动，其他地方用到的history.location，仍是同一个地址，而不是新生成的location对象，所以route改变前后的history.location永远相等； */}
            {/* 你可以在很多跳转的地方用location对象来替代字符串
              * Web Link to
              * Native Link to
              * Redirect to
              * history.push
              * history.replace
            */}
            {/* 通常会使用字符串表示要跳转的路由，但如果想要添加'location state'时，可用location代替；当你想要基于跳转历史来展现UI(比如modals模态框)时，location比path更有用；个人理解：a页面跳到b，b回到a时展示模态框；使用path时，无法判断是否要展示模态框，使用location时，添加state对象属性，可用来判断； */}
            {/* 比如：
              // 通常只要这样
              <Link to="/somewhere"/>

              // 但可以用location对象代替
              const location = {
                pathname: '/somewhere'
                state: { fromDashboard: true }
              }
              <Link to={location}/>
              <Redirect to={location}/>
              history.push(location)
              history.replace(location)
            */}

          {/* API - match */}
            {/* match包含以下属性
              * params - object，URL动态部分的参数键值对；
              * isExact - boolean，URL完全一致时为true(没有尾随字符)；
              * path - string，path匹配模式，在建立嵌套Route时很有用；
              * url - string，URL匹配部分，在建立嵌套Link时很有用；
                * url和path的区别：如在浏览器中访问'/users/5'，那么match.url将是'/users/5'，而match.path将是'/users/:userId'；建议选择path来构建路由路径；具体见react-router非官方dom示例；
            */}
            {/* match可在以下场景被获取到：
              * Route component中，获取方式为this.props.match；
              * Route render中，获取方式为({match}) => {}；
              * Route children中，获取方式为({match}) => {}；
              * withRoute中，获取方式为this.props.match；
              * matchPath中作为返回值；
            */}
            {/* 若Route没有path，则匹配所有，且你会得到元素最近父级的match？withRouter也一样； */}

          {/* API - withRouter */}
            {/* 使用withRouter可以获取到match、history和location；每次路由改变时，withRouter会重新渲染它的组件； */}
            {/* 若想要用withRouter阻止被shouldComponentUpdate阻塞的更新，一定要把执行shouldComponentUpdate那部分的组件也包裹进去，正确写法`withRouter(connect(...)(MyComponent))`，错误写法`connect(...)(withRouter(MyComponent))` */}
            <ShowTheLocationWithRouter />
        </div>
        {/* react-router非官网dom示例 */}
        <div className="react-router-not-official-examples">
          <PrimaryLayout />
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

/* 非react官网示例 */
  class AjaxForGithub extends React.Component{
    render(){
      return (
        <RepoList
            promise={fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')}
          />
      )
    }
  }
  class RepoList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        loading: true,
        data: [],
        error: null
      }
    }
    componentDidMount(){
      // 使用fetch进行ajax请求
      this.props.promise.then((response) => {
          return response.json().then((data) => {
              console.log('data: ', data)
              this.setState({loading: false, data: data})
            }
          )
        }
      ).catch((error) => {
          console.log('error: ', error)
          this.setState({loading: false, error: JSON.stringify(error)})
        }
      );
    }
    render(){
      if(this.state.loading){
        return <p>loading...please wait</p>
      }else if(this.state.error){
        return <p>Error: {this.state.error}</p>
      }else if(this.state.data){
        let repos = this.state.data.items;
        let repoList = repos.map(item => {
          return (
            <li style={{textAlign: 'left'}} key={item.id}>
              <a href={item.html_url}>{item.name}</a> ({item.stargazers_count} stars): {item.description}
            </li>
          )
        });
        return (
          <main>
            <h4>Most Popular JavaScript Projects in Github</h4>
            <ol>{repoList}</ol>
          </main>
        )
      }else{
        return <p>no data...</p>
      }
    }
  }

/* react-router官网core示例 */
  /* philosophy - Dynamic Routing */
  class Dashboard extends React.Component{
    componentDidMount(){
      console.log('match: ', this.props.match);
      console.log('location: ', this.props.location);
      console.log('history: ', this.props.history);
    }
    goBack = () => {
      this.props.history.goBack('/');
    }
    render(){
      return (
        <div>
          <p>I am "Dashboard" component</p>
          <p onClick={this.goBack}>Click to go backward.</p>
          <Link to={this.props.match.url + '/nestingRoute'}>Click to try nestingRoute.</Link>
          <Route
            path={this.props.match.url + '/nestingRoute'}
            component={DashboardNestingRoute}
          />
        </div>
      )
    }
  }
  function DashboardNestingRoute(){
    return (
      <div>
        <p>I am "DashboardNestingRoute" component.</p>
        <p><Link to="/redirectNotExist">Click to try Redirect.</Link></p>
      </div>
    )
  }

  /* philosophy - Responsive Routes */
    // 竖屏时只有一列invoice目录，横屏时左侧目录，右侧详情
    // const Invoices = () => (
    //   <Layout>
    //     {/* 总是显示nav */}
    //     <InvoicesNav />
    //     <Media query={PRETTY_SMALL}>
    //       {screenIsSmall => (screenIsSmall?
    //       {/* 小屏幕，竖屏时 */}
    //         <Switch>
    //           <Route exact path="/invoices/dashboard" component={Dashboard} />
    //           <Route path="/invoices/:id" component={Invoice} />
    //         </Switch>
    //         {/* 大屏幕，横屏时 */}
    //         : <Switch>
    //             <Route exact path="invoices/dashboard" component={Dashboard} />
    //             <Route path="invoices/:id" component={Invoice} />
    //             <Redirect from="/invoices" to="/invoices/dashboard" />
    //           </Switch>
    //       )}
    //     </Media>
    //   </Layout>
    // )

  /* API - Redirect */
  function TestRedirect(){
    return <p>I am "TestRedirect" component.</p>
  }

  /* API - Route */
  const RouteWithChildrenProp = ({to, ...rest}) => (
    <Route path={to} children={({match}) => (
      <li className={match? 'active' : 'not-active'}>
        <Link to={to} {...rest}>RouteWithChildrenPropLink</Link>
      </li>
    )} />
  )

  const ComponentForRouteTest = (props) => ( // 此处的props是一个对象，包含了match, location, history三个子对象, 若想分离，可用es6语法，将props替换为{match, location, history}即可；
    <p>I am "ComponentForRouteTest" component. Now the path is '{props.location.pathname}'.</p>
  )
  // class ComponentForRouteTest extends React.Component{
    //   constructor(props,){
    //     super(props);
    //   }
    //   render(){
    //     return <p>I am "ComponentForRouteTest" component. Now the path is '{this.props.location.pathname}'.</p>
    //   }
    // }

  /* API - history */
  class HistoryTestComp extends React.Component{
    componentWillReceiveProps(nextProps) {
      console.log('nextProps: ', nextProps);
      // 此为true
      // const locationChanged = nextProps.location !== this.props.location;
      console.log('nextProps.location: ', nextProps.location);
      console.log('this.props.location: ', this.props.location);
      // 不正确，永远为false，因为history是可变的
      const locationChanged = nextProps.history.location !== this.props.history.location;
      console.log('nextProps.history.location: ', nextProps.history.location);
      console.log('this.props.history.location: ', this.props.history.location);
      console.log('componentWillReceiveProps: ', locationChanged);
    }
    render(){
      return (
        <div>
          <p>I am "HistoryTestComp" component.</p>
          <Link to="/about">change route to '/about'</Link>
        </div>
      )
    }
  }

  /* API - withRouter */
  class ShowTheLocation extends React.Component{
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    }
    render(){
      const {match, location, history} = this.props;
      console.log('ShowTheLocation location: ', location)
      return <div>withRouter: Now the route is {location.pathname}.</div>
    }
  }
  const ShowTheLocationWithRouter = withRouter(ShowTheLocation); // 使用withRouter才能获取到location等

/* react-router非官方dom示例 */
  // [译] 关于 React Router 4 的一切 (https://juejin.im/post/5995a2506fb9a0249975a1a4?utm_source=tuicool&utm_medium=referral)
    const HomePage = props => <div>HomePage</div>
    const PrimaryHeader = () => (
      <header className="primary-header">
        <h4>Welcome to our app!</h4>
        <nav>
          {/* <NavLink> 与 <Link> 一样，但如果 <NavLink> 匹配浏览器的 URL，那么它可以提供一些额外的样式能力。 */}
          <NavLink to="/" exact activeClassName="active">Home | </NavLink>
          <NavLink to="/users" activeClassName="active">Users  | </NavLink>
          <NavLink to="/products" activeClassName="active">Products</NavLink>
        </nav>
      </header>
    )
    // 不推荐写法，虽然技术上可行，但是存在重复代码，每次 BrowseUsersPage 或 UserProfilePage 被渲染时，它将创建一个新的 UserNav 实例，这意味着所有的生命周期方法都将重新开始。如果导航标签需要初始网络流量，这将导致不必要的请求；
      // const PrimaryLayout = props => {
      //   return (
      //     <div className="primary-layout">
      //       <PrimaryHeader />
      //       <main>
      //         <Switch>
      //           <Route path="/" exact component={HomePage} />
      //           <Route path="/users" exact component={BrowseUsersPage} />
      //           <Route path="/users/:userId" component={UserProfilePage} />
      //           <Route path="/products" exact component={BrowseProductsPage} />
      //           <Route path="/products/:productId" component={ProductProfilePage} />
      //           <Redirect to="/" />
      //         </Switch>
      //       </main>
      //     </div>
      //   )
      // }
      // const BrowseUsersPage = () => (
      //   <div className="user-sub-layout">
      //     <aside>
      //       <UserNav />
      //     </aside>
      //     <div className="primary-content">
      //       <BrowseUserTable />
      //     </div>
      //   </div>
      // )
      // const UserProfilePage = props => (
      //   <div className="user-sub-layout">
      //     <aside>
      //       <UserNav />
      //     </aside>
      //     <div className="primary-content">
      //       <UserProfile userId={props.match.params.userId} />
      //     </div>
      //   </div>
      // )
    // 推荐写法，所有用户页面之间不重复布局；有一点需要注意的是，即使我们在布局结构中深入嵌套，路由仍然需要识别它们的完整路径才能匹配。为了节省重复输入（以防你决定将“用户”改为其他内容），请改用 props.match.path；
    const PrimaryLayout = props => {
      return (
        <div className="primary-layout">
          <PrimaryHeader />
          <main>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/users" component={UserSubLayout} />
              <Route path="/products" component={ProductSubLayout} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      )
    }
    const UserNav = props => <div>UserNav</div>
    const BrowseUsersPage = props => <div>BrowseUsersPage</div>
    const UserComments = ({ match }) => <div>UserComments UserId: {match.params.userId}</div>
    const UserSettings = ({ match }) => <div>UserSettings UserId: {match.params.userId}</div>
    const AddUserPage = ({ match }) => <div>AddUserPage</div>
    const EditUserPage = ({ match }) => <div>EditUserPage</div>
    const UserProfilePage = ({ match }) => (
      <div>
        User Profile:
        {/* comments的userId为undefined，settings的userId可正常获取 */}
        {/* match.path可以帮助我们构建路径，而match.url则不可以，因为{${match.url}/comments} 基本上就像和硬编码的 {'/users/5/comments'} 一样。这样做意味着后续组件将无法正确地填充 match.params，因为路径中没有参数，只有硬编码的5； */}
        <Route path={`${match.url}/comments`} component={UserComments} />
        <Route path={`${match.path}/settings`} component={UserSettings} />
      </div>
    )
    const UserSubLayout = ({match}) => (
      <div className="user-sub-layout">
        <aside>
          <UserNav />
        </aside>
        <div className="primary-content">
          <Switch>
            {/* path不推荐写死为'/user'，以防将“用户”改为其他内容；推荐使用props.match.path，即Route中定义的path */}
            {/* 为了确保进行适当的匹配，新增和编辑路由需要战略性地放在详情路由/:userId之前。如果详情路径在前面，那么访问 /users/add 时将匹配详情（因为 "add" 将匹配 :userId）；或者，如果我们这样创建路径 ${match.path}/:userId(\\d+)，来确保 :userId 必须是一个数字，那么我们可以先放置详情路由。然后访问 /users/add 将不会产生冲突； */}
            <Route path={match.path} exact component={BrowseUsersPage} />
            <Route path={`${match.path}/add`} component={AddUserPage} />
            <Route path={`${match.path}/:userId/edit`} component={EditUserPage} />
            <Route path={`${match.path}/:userId(\\d+)`} component={UserProfilePage} />
          </Switch>
        </div>
      </div>
    )
    const ProductNav = props => <div>ProductNav</div>
    const ProductPage = props => <div>ProductPage</div>
    const ProductProfilePage = props => <div>ProductProfilePage</div>
    const ProductSubLayout = props => (
      <div className="product-sub-layout">
        <aside>
          <ProductNav />
        </aside>
        <div className="primary-content">
          <Switch>
            <Route path={props.match.path} exact component={ProductPage} />
            <Route path={`${props.match.path}/:productId`} component={ProductProfilePage} />
          </Switch>
        </div>
      </div>
    )




export default App;
