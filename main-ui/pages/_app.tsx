import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import configureStore from '../store';

class MyApp extends App<any> {

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

}

export default withRedux(configureStore)(MyApp);


// App.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {}
//   const { store, pathname } = ctx;
//   await store.dispatch(updateLocale(parseMatchToFilename(pathname)))
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx)
//   }

//   return { pageProps }
// }