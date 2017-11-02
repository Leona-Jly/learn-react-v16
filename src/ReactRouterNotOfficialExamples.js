import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Prompt, Redirect, Switch, withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class ReactRouterNotOfficialExamples extends Component {
  render() {
    return (
      <div className="wrap">
        {/* react-router非官网dom示例 */}
        <div className="react-router-not-official-examples">
          {/* <PrimaryLayout /> */}
        </div>
      </div>
    );
  }
}

/* react-router非官方dom示例 */
  // [译] 关于 React Router 4 的一切 (https://juejin.im/post/5995a2506fb9a0249975a1a4?utm_source=tuicool&utm_medium=referral)
    const HomePage = props => <div>HomePage</div>
    const oddEvent = (match, location) => {
      if (!match) {
        return false
      }
      const eventID = parseInt(match.params.eventID)
      return !isNaN(eventID) && eventID % 2 === 1
    }
    const PrimaryHeader = () => (
      <header className="primary-header">
        <h4>Welcome to our app!</h4>
        <nav>
          {/* <NavLink> 与 <Link> 一样，但如果 <NavLink> 匹配浏览器的 URL，会给渲染出的元素增加样式属性。 */}
          <NavLink to="/" exact>Home | </NavLink>
          <NavLink to="/users" activeStyle={{fontWeight: 'bold'}}>Users  | </NavLink>
          <NavLink to="/products">Products | </NavLink>
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
              {/* <Redirect to="/" /> */}
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

export default ReactRouterNotOfficialExamples