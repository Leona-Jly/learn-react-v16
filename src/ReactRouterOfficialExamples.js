import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Prompt, Redirect, Switch, withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class ReactRouterOfficialExamples extends Component {
  render() {
    return (
      <div className="wrap">
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
            {/* <ShowTheLocationWithRouter /> */}

          {/* DOM API - Route */}
            <TestRouteRender path="/testRouteRender" component={TestRouteRenderComp}/>
        </div>
      </div>
    );
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

  /* DOM API - Route */
  const TestRouteRenderComp = ({history, location, match}) => (
    <div style={{padding: '2rem 0'}}>
      I'm TestRouteRenderComp. Which path do I match: {match.path}
    </div>
  )
  const TestRouteRender = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      <Component {...props}/>
    )}/>
  )

export default ReactRouterOfficialExamples