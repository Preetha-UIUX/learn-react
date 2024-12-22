import './App.css'
// import ProductList from './components/products'
// import Users from './components/users';
// import ChangeButtonComponent from './components/context-concept/button';
// import ChangeTextComponent from './components/context-concept/text';
// import UseReducerExample from './components/use-reducer-example';
import FormComponent from './components/form';
import Login from './components/login/Login';
import Register from './components/Register/Register';

// const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {
  return (
    <div>
      {/* <ProductList listOfProducts={dummyProductData} name="Roxy" city="ABC"/>
      <Users /> */}
      {/* <ChangeButtonComponent />
      <ChangeTextComponent /> */}
      {/* <UseReducerExample /> */}
      <FormComponent />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Login />
        <Register />
      </div>
    </div>
  )
}

export default App
